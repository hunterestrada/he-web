
export const isString = (value) => {
  // Because JS is ugly.
  return typeof value === 'string' || value instanceof String;
}
