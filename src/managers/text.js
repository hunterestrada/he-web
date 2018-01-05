
import * as type from 'managers/type.js'

const CommonMark = require('commonmark');
const contentReader = new CommonMark.Parser();
const contentWriter = new CommonMark.HtmlRenderer({
  smart: true
});

export const getHTML = (markdownText) => {
  const parsedText = contentReader.parse(
    type.isString(markdownText) ? markdownText : ''
  )
  return contentWriter.render(parsedText);
}
