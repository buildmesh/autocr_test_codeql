export function unsafeGetter(object, path) {
  return eval(`object.${path}`);
}
