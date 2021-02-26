import Busboy from 'busboy';
import { getPageInfo, parseUrl } from './utils/urlUtils';
import { ISharedArgs } from './interfaces';
import { handleFormEnd } from './utils/validationUtils';
import { getCleanedFormData } from './utils/cleanDataUtils';

function handleRedirect(sharedArgs: ISharedArgs, js: boolean, req: any, res: any) {
  const { url } = req;
  const { urlArray, schemasArray, numForms, getRoute } = sharedArgs;
  const { nextPageNumber, nextPagePostfix, schemaIndex } = getPageInfo(url, urlArray);
  const pageSchema = schemasArray[schemaIndex];
  const isLastPage = nextPageNumber > numForms;

  if (isLastPage) {
    const formData = getCleanedFormData(sharedArgs, {}, pageSchema, req);
    handleFormEnd(sharedArgs, formData);
  }

  const props = { nextPage: nextPagePostfix, isLastPage };
  if (js) {
    res.json(props);
  } else {
    const redirectUrl = parseUrl(getRoute, String(nextPagePostfix));
    res.redirect(redirectUrl);
  }
}

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
      handleRedirect(sharedArgs, js, req, res);
    });
  }
}
