import { removePageFields, matchPostBody, submitApplication, pageForward } from './helpers';

// TEMP
const LAST_PAGE = 10;
const schemasArray = [];

export default async function onPost(req, res, onEnd, onPageOver) {
  res.send('POST');
}
