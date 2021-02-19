// See https://github.com/Azure-Samples/azure-sdk-for-js-storage-blob-stream-nodejs/blob/master/v12/routes/index.js
const { BlobServiceClient, StorageSharedKeyCredential, newPipeline } = require('@azure/storage-blob');

const ONE_MEGABYTE = 1024 * 1024;
const uploadOptions = { bufferSize: 4 * ONE_MEGABYTE, maxBuffers: 20 };

const getBlobName = (originalName: string) => {
  const identifier = Math.random().toString().replace(/0\./, '');
  return `${identifier}-${originalName}`;
};

let sharedKeyCredential;
let blobServiceClient: any;
let pipeline;

if (typeof window === 'undefined') {
  sharedKeyCredential = new StorageSharedKeyCredential(
    process.env.AZURE_STORAGE_ACCOUNT_NAME,
    process.env.AZURE_STORAGE_ACCOUNT_ACCESS_KEY
  );
  pipeline = newPipeline(sharedKeyCredential);
  blobServiceClient = new BlobServiceClient(
    `https://${process.env.AZURE_STORAGE_ACCOUNT_NAME}.blob.core.windows.net`,
    pipeline
  );
}

export { uploadOptions, getBlobName, sharedKeyCredential, blobServiceClient, pipeline };
