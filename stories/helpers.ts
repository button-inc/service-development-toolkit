import parse from 'html-react-parser';
import { renderToStaticMarkup } from 'react-dom/server';
import styled from 'styled-components';

const getHtmlWithCss = element => renderToStaticMarkup(element);

const HtmlWithCssWrapper = ({ children }) => {
  const htmlWithCssString = getHtmlWithCss(children);
  return parse(htmlWithCssString);
};

const HtmlOnlyWrapper = ({ children }) => {
  const htmlWithCssString = getHtmlWithCss(children);
  const htmlString = htmlWithCssString.replace(/class=".+?"/g, '');
  return parse(htmlString);
};

const Divider = styled.div`
  border: 2px solid black;
  margin: 20px 0;
`;

export { HtmlOnlyWrapper, HtmlWithCssWrapper, Divider };
