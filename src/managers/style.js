
const JOINER_NAME = ' ';

export const NAME_CARD = 'Card';
export const NAME_CONTENT = 'Content';
export const NAME_CONTENT_COMPONENT = NAME_CONTENT + 'Component';

export function getClassName(nameList) {
  return nameList.join(JOINER_NAME);
}

export function getContentComponentClassName(otherNameList) {
  return getClassName([NAME_CONTENT_COMPONENT].concat(otherNameList))
}
