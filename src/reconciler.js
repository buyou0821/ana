import { defer, toHash, merge } from './utils';

let nextWork = null;
const updateQueue = [];
const [HOST, HOOK, ROOT, PLACE, REPLACE, UPDATE, DELETE] = [
  0,
  1,
  2,
  3,
  4,
  5,
  6
];

function render(vnode, el) {
  const rootFiber = {
    tag: ROOT,
    base: el,
    props: { children: vnode }
  };
  scheduleWork(rootFiber);
}

function scheduleWork(fiber) {
  updateQueue.push(fiber);
  if (!nextWork) {
    nextWork = updateQueue.shift();
    defer(workLoop);
  }
}

function workLoop() {
  nextWork = performWork(nextWork);
  console.log(nextWork);
}

// WIP is rootFiber at first render
function performWork(WIP) {
  WIP.tag === HOOK ? updateHook(WIP) : updateHost(WIP);
  if (WIP.child) {
    return WIP.child;
  }
}

function updateHost(WIP) {
  const children = WIP.props.children;
  reconcileChildren(WIP, children);
}

function fiberize(WIP, children) {
  return (WIP.children = toHash(children));
}

function reconcileChildren(WIP, children) {
  const oldFibers = WIP.children;
  const newFibers = fiberize(WIP, children); // 这里设置了WIP.childer用于oldFibers
  const reused = {};

  // TODO oldFibers
  for (const key in oldFibers) {
  }

  let prevFiber = null;

  for (const key in newFibers) {
    let newFiber = newFibers[key];
    const oldFiber = reused[key];

    if (oldFiber) {
    } else {
      newFiber = createFiber(newFiber, {
        patchTag: PLACE
      });
    }

    newFibers[key] = newFiber; // 更新WIP.children
    newFiber.parent = WIP;

    if (prevFiber) {
    } else {
      WIP.child = newFiber;
    }
    prevFiber = newFiber;
  }

  if (prevFiber) {
    // TODO sibling
    prevFiber.sibling = null;
  }
}

function createFiber(vnode, data) {
  data.tag = typeof vnode.type === 'function' ? HOOK : HOST;
  // TODO nodeValue
  return merge(vnode, data);
}

function updateHook() {}

export { render };
