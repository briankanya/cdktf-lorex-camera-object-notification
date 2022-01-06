import * as aws from '@cdktf/provider-aws';
import { Construct } from 'constructs';
import { LorexCameraObjectNotificationProps } from './LorexCameraObjectNotificationProps';

export class LorexCameraObjectNotification extends Construct {
  constructor(scope: Construct, id: string, props: LorexCameraObjectNotificationProps) {
    super(scope, id);

    const bucketPrefix = props.bucketPrefix || 'mdiBucket';
    const collectionName = props.collectionName || 'mdiCollection';
    const emails = props.emails || [];
    const facesKey = props.facesKey || 'facesKey';
    const mdiKey = props.mdiKey || 'mdiKey';
    const s3fsUsername = props.s3fsUsername || 'mdiS3FSUser';
    const topicPrefix = props.topicPrefix || 'mdiTopic';

    const bucket = new aws.s3.S3Bucket(this, 'mdiBucket', {
      acl: 'private',
      bucketPrefix: bucketPrefix,
      forceDestroy: true,
      lifecycleRule: [
        {
          enabled: true,
          expiration: {
            days: 90,
          },
          transition: [
            {
              storageClass: 'STANDARD_IA',
              days: 30,
            },
            {
              storageClass: 'GLACIER',
              days: 60,
            },
          ],
        },
      ],
      serverSideEncryptionConfiguration: {
        rule: {
          applyServerSideEncryptionByDefault: {
            sseAlgorithm: 'aws:kms',
          },
        },
      },
    });

    const snsTopic = new aws.sns.SnsTopic(this, 'mdiTopic', {
      kmsMasterKeyId: 'alias/aws/sns',
      namePrefix: topicPrefix,
    });

    emails.forEach(email => {
      new aws.sns.SnsTopicSubscription(this, `mdiTopicSubscription${email}`, {
        endpoint: email,
        protocol: 'email',
        topicArn: snsTopic.arn,
      });
    });

    const rolePolicy = new aws.iam.DataAwsIamPolicyDocument(this, 'rolePolicy', {
      statement: [
        {
          actions: [
            'rekognition:CreateCollection',
            'rekognition:DeleteCollection',
            'rekognition:DetectFaces',
            'rekognition:IndexFaces',
            'rekognition:SearchFacesByImage',
            's3:GetObject',
            's3:PutObject',
            'sns:Publish',
          ],
          resources: [
            `${bucket.arn}/*`,
            snsTopic.arn,
          ],
        },
      ],
    });

    const s3fsUser = new aws.iam.IamUser(this, 's3fsUser', {
      forceDestroy: true,
      name: s3fsUsername,
    });

    new aws.iam.IamAccessKey(this, 's3fsUserAccessKey', {
      user: s3fsUser.name,
    });

    new aws.iam.IamUserPolicy(this, 's3fsUserPolicy', {
      name: 's3fsUserPolicy',
      policy: rolePolicy.json,
      user: s3fsUser.name,
    });

    const lambdaAssumeRolePolicy = new aws.iam.DataAwsIamPolicyDocument(this, 'lambdaAssumeRolePolicy', {
      statement: [
        {
          actions: ['sts:AssumeRole'],
          principals: [
            {
              type: 'Service',
              identifiers: [
                'lambda.amazonaws.com',
              ],
            },
          ],
        },
      ],
    });

    const role = new aws.iam.IamRole(this, 'role', {
      assumeRolePolicy: lambdaAssumeRolePolicy.json,
      inlinePolicy: [
        {
          name: 'mdiPolicy',
          policy: rolePolicy.json,
        },
      ],
      name: 'mdiRole',
    });

    new aws.lambdafunction.LambdaFunction(this, 'indexFaces', {
      environment: {
        variables: {
          BUCKET: bucket.bucket,
          KEY: facesKey,
          REKOGNITION_COLLECTION_ID: collectionName,
        },
      },
      filename: 'lambda_function.zip',
      functionName: 'indexFaces',
      handler: 'index.indexFaces',
      role: role.arn,
      runtime: 'nodejs',
    });

    new aws.lambdafunction.LambdaFunction(this, 'sendNotification', {
      environment: {
        variables: {
          BUCKET: bucket.bucket,
          KEY: mdiKey,
          NOTIFICATION_ARN: snsTopic.arn,
          REKOGNITION_COLLECTION_ID: collectionName,
        },
      },
      filename: 'lambda_function.zip',
      functionName: 'indexFaces',
      handler: 'index.indexFaces',
      role: role.arn,
      runtime: 'nodejs',
    });
  }
}