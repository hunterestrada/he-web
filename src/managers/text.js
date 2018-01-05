
import * as type from 'managers/type.js'

const CommonMark = require('commonmark');
const contentReader = new CommonMark.Parser();
const contentWriter = new CommonMark.HtmlRenderer({
  smart: true
});

export const getHTML = (markdownText) => {
  console.log('CONVERTING', markdownText);
  const parsedText = contentReader.parse(
    type.isString(markdownText) ? markdownText : ''
  )
  console.log('CONVERTED', contentWriter.render(parsedText));
  return contentWriter.render(parsedText);
}
