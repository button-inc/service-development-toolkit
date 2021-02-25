import ReactHtmlParser from 'react-html-parser';
import { renderToStaticMarkup } from 'react-dom/server';
import styled from 'styled-components';

const getHtmlWithCss = child => renderToStaticMarkup(child);

const HtmlWithCssWrapper = ({ children }) => ReactHtmlParser(getHtmlWithCss(children));

const HtmlOnlyWrapper = ({ children }) => {
  const htmlWithCssString = getHtmlWithCss(children);
  const htmlString = htmlWithCssString.replace(/class=".+?"/g, '');
  return ReactHtmlParser(htmlString);
};

const Divider = styled.div`
  border: 2px solid black;
  margin: 20px 0;
`;

export { HtmlOnlyWrapper, HtmlWithCssWrapper, Divider };
