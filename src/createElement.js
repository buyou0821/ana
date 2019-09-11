export function createElement(type) {
  if (typeof type === 'function') {
    return type();
  }
  const element = {};
  console.log(type);
}
