
const JOINER_NAME = ' ';

export const NAME_CARD = 'Card';
export const NAME_CONTENT = 'Content';
export const NAME_CONTENT_COMPONENT = NAME_CONTENT + 'Component';
export const NAME_CONTENT_COMPONENT_EXPANDABLE = 'Expandable' + NAME_CONTENT_COMPONENT;

export function getClassName(nameList) {
  return nameList.join(JOINER_NAME);
}

export function getContentComponentClassName(otherNameList) {
  return getClassName(otherNameList.concat([NAME_CONTENT_COMPONENT]))
}

export function getExpandableContentComponentClassName(otherNameList) {
  return getClassName(otherNameList.concat([NAME_CONTENT_COMPONENT_EXPANDABLE]))
}
