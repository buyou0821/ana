export const merge = (a, b) => Object.assign({}, a, b);

export function toArray(arg) {
  if (!arg) {
    return [];
  }
  if (Array.isArray(arg)) {
    return arg;
  }
  return [arg];
}

export function toHash(arg) {
  let i = 0;
  return toArray(arg).reduce((prev, item) => {
    const key = item.key;
    prev[`.${key ? key : i++}`] = item;
    return prev;
  }, {});
}

export const defer = requestAnimationFrame || setTimeout;
