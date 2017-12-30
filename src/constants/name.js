
const NAME_JOINER = ' ';

export const CONTENT = 'Content';

export function getClassName(nameList) {
  return nameList.join(NAME_JOINER);
}

export function getContentClassName(otherNameList) {
  return getClassName([CONTENT].concat(otherNameList))
}
