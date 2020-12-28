import ReactHtmlParser from 'react-html-parser';
import { renderToStaticMarkup } from 'react-dom/server';

const getHtmlWithCss = child => renderToStaticMarkup(child);

const HtmlWithCssWrapper = ({ children }) => ReactHtmlParser(getHtmlWithCss(children));
const HtmlOnlyWrapper = ({ children }) => {
  const htmlWithCssString = getHtmlWithCss(children);
  const htmlString = htmlWithCssString.replace(/class=".+?"/g, '');
  return ReactHtmlParser(htmlString);
};

export { HtmlOnlyWrapper, HtmlWithCssWrapper };
