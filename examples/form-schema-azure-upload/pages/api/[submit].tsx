import { withSession } from 'next-session';
import { postHandler } from 'pangolin';

function handler(req: any, res: any) {
  postHandler(req, res, (errors: []) => console.log(errors));
}

export default withSession(handler);

