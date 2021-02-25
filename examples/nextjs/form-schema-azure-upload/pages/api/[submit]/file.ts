import { withSession } from 'next-session';
import { fileMiddleware } from 'pangolin';

function runMiddleware(req: any, res: any, fn: Function) {
  return new Promise((resolve, reject) => {
    fn(req, res, (result: Error) => {
      if (result instanceof Error) {
        return reject(result);
      }
      return resolve(result);
    });
  });
}

function handler(req: any, res: any) {
  runMiddleware(req, res, fileMiddleware);
}

export default withSession(handler);

export const config = {
  api: {
    bodyParser: false,
  },
};
