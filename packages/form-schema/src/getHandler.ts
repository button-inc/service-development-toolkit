import { getUrlPage } from './helpers';

export default function getHandler(numPages, req) {
  const page = getUrlPage(req.url);
  const validPage = Number.isInteger(page) && page > 0 && page <= numPages;

  if (!validPage) return { validPage: false };

  const { session: { formData = {} } = {} } = req;
  return { formIndex: page, formData, validPage: true };
}
