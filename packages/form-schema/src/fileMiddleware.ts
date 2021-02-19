import Busboy from 'busboy';
import { getPageInfo, parseUrl } from './Utils/urlUtils';
import { IFileOptions } from './interfaces';

function handleRedirect(js: boolean, getRoute: string, numForms: number, urlArray: string[], req: any, res: any) {
  const { url } = req;
  const { nextPageNumber, nextPagePostfix } = getPageInfo(url, urlArray);
  const props = { nextPage: nextPagePostfix, formData: req.session.formData, isLastPage: nextPageNumber > numForms };

  if (js) {
    res.json(props);
  } else {
    const redirectUrl = parseUrl(getRoute, String(nextPagePostfix));
    res.redirect(redirectUrl);
  }
}

export default async function fileHandler(
  getRoute: string,
  numForms: number,
  urlArray: string[],
  options: IFileOptions,
  req: any,
  res: any
) {
  if (req.method === 'POST') {
    let js = false;
    let fileName = '';
    const { handleReadStream } = options;
    const busboy = new Busboy({ headers: req.headers });
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
      if (options.onFileLoad) options.onFileLoad(fileName);
      handleRedirect(js, getRoute, numForms, urlArray, req, res);
    });
    req.pipe(busboy);
  }
}
