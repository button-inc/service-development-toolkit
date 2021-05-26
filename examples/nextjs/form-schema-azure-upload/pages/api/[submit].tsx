import { withSession } from 'next-session';
import { postMiddleware } from 'form-schema';

function handler(req: any, res: any) {
  postMiddleware(req, res);
}

export default withSession(handler);
