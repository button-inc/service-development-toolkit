import { ISharedArgs } from './interfaces';
import { redirectHandler } from './utils/validationUtils';

export default async function postHandler(sharedArgs: ISharedArgs, req: any, res: any) {
  const { body } = req;
  const { js } = body;
  let { postData } = body;
  if (!js) postData = req.body;
  redirectHandler(sharedArgs, js, postData, req, res);
}
