import { merge } from './utils';

export function createElement(type, props, ...children) {
  return {
    type,
    props: merge(props, children),
    key: props && props.key,
  };
}
