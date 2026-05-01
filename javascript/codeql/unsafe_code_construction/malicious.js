module.exports.unsafeDeserialize = function unsafeDeserialize(value) {
  return eval("(" + value + ")");
};
