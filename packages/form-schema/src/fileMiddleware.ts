import Busboy from 'busboy';
import { ISharedArgs } from './interfaces';
import { redirectHandler } from './utils/validationUtils';

export default async function fileHandler(sharedArgs: ISharedArgs, req: any, res: any) {
  if (req.method === 'POST') {
    let js = false;
    let fileName = '';
    const { handleReadStream, onFileLoad } = sharedArgs;
    const busboy = new Busboy({ headers: req.headers });
    req.pipe(busboy);
    busboy.on('file', function (_fieldname, file: ReadableStream, filename: string, _encoding, _mimetype) {
      fileName = filename;
      if (handleReadStream) {
        handleReadStream(filename, file);
      }
    });
    busboy.on('field', function (fieldname, value) {
      if (fieldname === 'js' && value === 'true') js = true;
    });
    busboy.on('finish', function () {
      if (onFileLoad) onFileLoad(fileName);
      redirectHandler(sharedArgs, js, {}, req, res);
    });
  }
}
