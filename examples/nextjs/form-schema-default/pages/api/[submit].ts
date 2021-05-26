import { withSession } from 'next-session';
import { postMiddleware } from 'form-schema';

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
  runMiddleware(req, res, postMiddleware);
}

export default withSession(handler);
