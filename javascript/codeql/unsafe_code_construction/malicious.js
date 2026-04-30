function unsafeDeserialize(value) {
  return eval(`(${value})`);
}

module.exports = { unsafeDeserialize };
