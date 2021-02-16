import { withSession } from 'next-session';
import { postHandler } from 'pangolin';

function handler(req: any, res: any) {
  postHandler(req, res);
}

export default withSession(handler);
