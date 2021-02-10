import { withSession } from 'next-session';
import { onPost } from '../../pangolin';

function handler(req: any, res: any) {
  onPost(
    req,
    res,
    () => {},
    () => {}
  );
}

export default withSession(handler);
