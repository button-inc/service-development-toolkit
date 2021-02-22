export default function runMiddleware(req: any, res: any, fn: Function) {
  return new Promise((resolve, reject) => {
    fn(req, res, (result: Error) => {
      if (result instanceof Error) {
        return reject(result);
      }
      return resolve(result);
    });
  });
}
