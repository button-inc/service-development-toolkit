import { withSession } from 'next-session';
import { fileMiddleware } from 'pangolin';
import runMiddleware from 'utils';

function handler(req: any, res: any) {
  runMiddleware(req, res, fileMiddleware);
}

export default withSession(handler);

export const config = {
  api: {
    bodyParser: false,
  },
};
