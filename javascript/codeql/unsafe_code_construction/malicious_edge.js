module.exports.unsafeGetter = function unsafeGetter(object, path) {
  return eval("object." + path);
};
