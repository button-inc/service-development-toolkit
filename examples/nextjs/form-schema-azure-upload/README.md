# Azure setup

## References: 
- https://stackoverflow.com/questions/60191272/node-js-stream-file-without-saving-to-memory
- https://docs.microsoft.com/en-us/azure/storage/blobs/storage-quickstart-blobs-nodejs
- https://github.com/Azure-Samples/azure-sdk-for-js-storage-blob-stream-nodejs/blob/master/v12/routes/index.js

## Steps:
  1. [Create a storage account resource](https://docs.microsoft.com/en-us/azure/storage/common/storage-account-create?tabs=azure-portal)
  2. In the storage account, create a container with the name you will use. e.g, here we use `testcontainer` in form-schema.ts:
  `const containerClient = blobServiceClient.getContainerClient('testcontainer');`
  3. Add your storage account name and key to a `.env` file, following the `.env.example` naming.
