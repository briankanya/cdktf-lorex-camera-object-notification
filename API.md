# API Reference <a name="API Reference" id="api-reference"></a>

## Constructs <a name="Constructs" id="constructs"></a>

### LorexCameraObjectNotification <a name="cdktf-lorex-camera-object-notification.LorexCameraObjectNotification" id="cdktflorexcameraobjectnotificationlorexcameraobjectnotification"></a>

#### Initializers <a name="cdktf-lorex-camera-object-notification.LorexCameraObjectNotification.Initializer" id="cdktflorexcameraobjectnotificationlorexcameraobjectnotificationinitializer"></a>

```typescript
import { LorexCameraObjectNotification } from 'cdktf-lorex-camera-object-notification'

new LorexCameraObjectNotification(scope: Construct, id: string, props: LorexCameraObjectNotificationProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`scope`](#cdktflorexcameraobjectnotificationlorexcameraobjectnotificationparameterscope)<span title="Required">*</span> | [`constructs.Construct`](#constructs.Construct) | *No description.* |
| [`id`](#cdktflorexcameraobjectnotificationlorexcameraobjectnotificationparameterid)<span title="Required">*</span> | `string` | *No description.* |
| [`props`](#cdktflorexcameraobjectnotificationlorexcameraobjectnotificationparameterprops)<span title="Required">*</span> | [`cdktf-lorex-camera-object-notification.LorexCameraObjectNotificationProps`](#cdktf-lorex-camera-object-notification.LorexCameraObjectNotificationProps) | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="cdktf-lorex-camera-object-notification.LorexCameraObjectNotification.parameter.scope" id="cdktflorexcameraobjectnotificationlorexcameraobjectnotificationparameterscope"></a>

- *Type:* [`constructs.Construct`](#constructs.Construct)

---

##### `id`<sup>Required</sup> <a name="cdktf-lorex-camera-object-notification.LorexCameraObjectNotification.parameter.id" id="cdktflorexcameraobjectnotificationlorexcameraobjectnotificationparameterid"></a>

- *Type:* `string`

---

##### `props`<sup>Required</sup> <a name="cdktf-lorex-camera-object-notification.LorexCameraObjectNotification.parameter.props" id="cdktflorexcameraobjectnotificationlorexcameraobjectnotificationparameterprops"></a>

- *Type:* [`cdktf-lorex-camera-object-notification.LorexCameraObjectNotificationProps`](#cdktf-lorex-camera-object-notification.LorexCameraObjectNotificationProps)

---





## Structs <a name="Structs" id="structs"></a>

### LorexCameraObjectNotificationProps <a name="cdktf-lorex-camera-object-notification.LorexCameraObjectNotificationProps" id="cdktflorexcameraobjectnotificationlorexcameraobjectnotificationprops"></a>

#### Initializer <a name="[object Object].Initializer" id="object-objectinitializer"></a>

```typescript
import { LorexCameraObjectNotificationProps } from 'cdktf-lorex-camera-object-notification'

const lorexCameraObjectNotificationProps: LorexCameraObjectNotificationProps = { ... }
```

#### Properties <a name="Properties" id="properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`bucketPrefix`](#cdktflorexcameraobjectnotificationlorexcameraobjectnotificationpropspropertybucketprefix) | `string` | Prefix of the S3 bucket to use for uploading motion detected images. |
| [`collectionName`](#cdktflorexcameraobjectnotificationlorexcameraobjectnotificationpropspropertycollectionname) | `string` | The name of the rekognition collection to create and use for indexing faces. |
| [`emails`](#cdktflorexcameraobjectnotificationlorexcameraobjectnotificationpropspropertyemails) | `string`[] | List of email addresses to send notifications to. |
| [`facesKey`](#cdktflorexcameraobjectnotificationlorexcameraobjectnotificationpropspropertyfaceskey) | `string` | Key in the S3 bucket to use for accessing and uploading faces. |
| [`mdiKey`](#cdktflorexcameraobjectnotificationlorexcameraobjectnotificationpropspropertymdikey) | `string` | Key in the S3 bucket to use for accessing and uploading motion detected images. |
| [`s3fsUsername`](#cdktflorexcameraobjectnotificationlorexcameraobjectnotificationpropspropertys3fsusername) | `string` | Name of the S3FS user to use for uploading motion detected images. |
| [`topicPrefix`](#cdktflorexcameraobjectnotificationlorexcameraobjectnotificationpropspropertytopicprefix) | `string` | Prefix of the SNS topic to use for sending notifications. |

---

##### `bucketPrefix`<sup>Optional</sup> <a name="cdktf-lorex-camera-object-notification.LorexCameraObjectNotificationProps.property.bucketPrefix" id="cdktflorexcameraobjectnotificationlorexcameraobjectnotificationpropspropertybucketprefix"></a>

```typescript
public readonly bucketPrefix: string;
```

- *Type:* `string`
- *Default:* 'mdiBucket'

Prefix of the S3 bucket to use for uploading motion detected images.

---

##### `collectionName`<sup>Optional</sup> <a name="cdktf-lorex-camera-object-notification.LorexCameraObjectNotificationProps.property.collectionName" id="cdktflorexcameraobjectnotificationlorexcameraobjectnotificationpropspropertycollectionname"></a>

```typescript
public readonly collectionName: string;
```

- *Type:* `string`
- *Default:* 'mdiCollection'

The name of the rekognition collection to create and use for indexing faces.

---

##### `emails`<sup>Optional</sup> <a name="cdktf-lorex-camera-object-notification.LorexCameraObjectNotificationProps.property.emails" id="cdktflorexcameraobjectnotificationlorexcameraobjectnotificationpropspropertyemails"></a>

```typescript
public readonly emails: string[];
```

- *Type:* `string`[]
- *Default:* []

List of email addresses to send notifications to.

---

##### `facesKey`<sup>Optional</sup> <a name="cdktf-lorex-camera-object-notification.LorexCameraObjectNotificationProps.property.facesKey" id="cdktflorexcameraobjectnotificationlorexcameraobjectnotificationpropspropertyfaceskey"></a>

```typescript
public readonly facesKey: string;
```

- *Type:* `string`
- *Default:* 'facesKey'

Key in the S3 bucket to use for accessing and uploading faces.

---

##### `mdiKey`<sup>Optional</sup> <a name="cdktf-lorex-camera-object-notification.LorexCameraObjectNotificationProps.property.mdiKey" id="cdktflorexcameraobjectnotificationlorexcameraobjectnotificationpropspropertymdikey"></a>

```typescript
public readonly mdiKey: string;
```

- *Type:* `string`
- *Default:* 'mdiKey'

Key in the S3 bucket to use for accessing and uploading motion detected images.

---

##### `s3fsUsername`<sup>Optional</sup> <a name="cdktf-lorex-camera-object-notification.LorexCameraObjectNotificationProps.property.s3fsUsername" id="cdktflorexcameraobjectnotificationlorexcameraobjectnotificationpropspropertys3fsusername"></a>

```typescript
public readonly s3fsUsername: string;
```

- *Type:* `string`
- *Default:* 'mdiS3FSUser'

Name of the S3FS user to use for uploading motion detected images.

---

##### `topicPrefix`<sup>Optional</sup> <a name="cdktf-lorex-camera-object-notification.LorexCameraObjectNotificationProps.property.topicPrefix" id="cdktflorexcameraobjectnotificationlorexcameraobjectnotificationpropspropertytopicprefix"></a>

```typescript
public readonly topicPrefix: string;
```

- *Type:* `string`
- *Default:* 'mdiTopic'

Prefix of the SNS topic to use for sending notifications.

---



