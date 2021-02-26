import { handleFormEnd } from './utils/validationUtils';
import { getCleanedFormData } from './utils/cleanDataUtils';
import { getPageInfo, parseUrl } from './utils/urlUtils';
import { ISharedArgs } from './interfaces';

export default async function postHandler(sharedArgs: ISharedArgs, req: any, res: any) {
  const {
    body: { js },
    url,
  } = req;

  let {
    body: { postData },
  } = req;

  const { schemasArray, getRoute, urlArray, numForms } = sharedArgs;

  if (!js) postData = req.body;
  const { nextPageNumber, nextPagePostfix, schemaIndex } = getPageInfo(url, urlArray);
  const pageSchema = schemasArray[schemaIndex];
  const isLastPage = nextPageNumber > numForms;

  const formData = getCleanedFormData(sharedArgs, postData, pageSchema, req);
  if (isLastPage) handleFormEnd(sharedArgs, formData);

  const props = { nextPage: nextPagePostfix, isLastPage };
  if (js) {
    res.json(props);
  } else {
    const redirectUrl = parseUrl(getRoute, String(nextPagePostfix));
    res.redirect(redirectUrl);
  }
}
