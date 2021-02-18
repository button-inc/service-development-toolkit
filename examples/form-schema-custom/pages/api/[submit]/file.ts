// @ts-nocheck
import { withSession } from 'next-session';
import { postHandler } from 'pangolin';
import formData from 'db';
import fs from 'fs';
import Busboy from 'busboy';
import path from 'path';

const handlePageOver = (postData: object, schemaIndex: number, cleanSchemaData: Function) => {
  const newData = cleanSchemaData(formData);
  formData[schemaIndex] = { ...formData[schemaIndex], ...newData };
  return newData;
};

function handler(req: any, res: any) {
  if (req.method === 'POST') {
    const busboy = new Busboy({ headers: req.headers });
    busboy.on('file', function (fieldname, file, filename, encoding, mimetype) {
      const saveTo = './test.pdf';
      console.log(`Uploading: ${saveTo}`);
      file.pipe(fs.createWriteStream(saveTo));
    });
    busboy.on('finish', function () {
      console.log('Upload complete');
      res.writeHead(200, { Connection: 'close' });
      res.end("That's all folks!");
    });
    return req.pipe(busboy);
  }
  postHandler(req, res);
  // postHandler(req, res, () => console.log('finished form'), handlePageOver);
  return 1;
}

export default withSession(handler);

export const config = {
  api: {
    bodyParser: false,
  },
};
