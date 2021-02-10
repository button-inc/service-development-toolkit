import { getUrlPage } from './helpers';

export default function getHandler(numPages, req) {
  const page = getUrlPage(req.url);
  const validPage = Number.isInteger(page) && page > 0 && page <= numPages;

  if (!validPage) return { validPage: false };

  const formIndex = page - 1;
  const { session: { formData = {} } = {} } = req;
  return { formIndex, formData, validPage: true };
}
