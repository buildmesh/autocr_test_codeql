function unsafeGetter(object, path) {
  return eval(`object.${path}`);
}

module.exports = { unsafeGetter };
