let pubSub = function() {
  let subscribers = {};
  return {
    emit (event, fnParams) {
      if (subscribers.hasOwnProperty(event)) { 
        subscribers[event].reduce((acc, val) => acc.concat(val), []) // polyfill for array.flat()
                          .forEach(subscriber => subscriber(fnParams)); }
    },
    on (event, fn) {
      if (!subscribers.hasOwnProperty(event)) { subscribers[event] = []; }
      subscribers[event].push(fn);
    }
  }
};
