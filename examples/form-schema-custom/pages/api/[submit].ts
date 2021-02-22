import { withSession } from 'next-session';
import { postMiddleware } from 'pangolin';
import runMiddleware from 'utils';

function handler(req: any, res: any) {
  runMiddleware(req, res, postMiddleware);
}

export default withSession(handler);

export const config = {
  api: {
    bodyParser: true,
  },
};
