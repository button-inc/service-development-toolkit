import { withSession } from 'next-session';
import { postMiddleware } from 'form-schema';
import runMiddleware from 'utils';

function handler(req: any, res: any) {
  runMiddleware(req, res, postMiddleware);
}

export default withSession(handler);
