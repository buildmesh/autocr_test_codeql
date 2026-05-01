export function unsafeDeserialize(value) {
  return eval(`(${value})`);
}
