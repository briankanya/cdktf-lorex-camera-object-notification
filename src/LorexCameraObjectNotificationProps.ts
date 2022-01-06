export interface LorexCameraObjectNotificationProps {
  /**
     * Prefix of the S3 bucket to use for uploading motion detected images.
     * @default 'mdiBucket'
     * @example
     * 'myCoolS3Bucket'
     */
  readonly bucketPrefix?: string;

  /**
     * The name of the rekognition collection to create and use for indexing faces.
     * @default 'mdiCollection'
     * @example
     * 'myCoolCollection'
     */
  readonly collectionName?: string;

  /**
     * List of email addresses to send notifications to.
     * @default []
     * @example
     * ['me@example.com']
     */
  readonly emails?: string[];

  /**
     * Key in the S3 bucket to use for accessing and uploading faces.
     * @default 'facesKey'
     * @example
     * 'myCoolFacesKey'
     */
  readonly facesKey?: string;

  /**
     * Key in the S3 bucket to use for accessing and uploading motion detected images.
     * @default 'mdiKey'
     * @example
     * 'myCoolKey'
     */
  readonly mdiKey?: string;
  /**
     * Name of the S3FS user to use for uploading motion detected images.
     * @default 'mdiS3FSUser'
     * @example
     * 'myCoolS3FSUser'
     */
  readonly s3fsUsername?: string;

  /**
     * Prefix of the SNS topic to use for sending notifications.
     * @default 'mdiTopic'
     * @example
     * 'myCoolSnsTopic'
     */
  readonly topicPrefix?: string;
}