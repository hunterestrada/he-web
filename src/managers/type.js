
export const isString = (value) => {
  // Because JS is ugly.
  return typeof value === 'string' || value instanceof String;
}

export const isArray = (value) => {
  return Array.isArray(value);
}
