const fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(collection, callback) {
      let mutated = collection.isArray ? collection.splice() : Object.values(collection);
      for (let i = 0; i < mutated.length; i++) {
        callback(mutated[i]);
      }
      return collection;
    },

    map: function(collection, callback) {
      let mutated = collection.isArray ? collection.splice() : Object.values(collection);
      let newCollection = [];
      for (let i = 0; i < mutated.length; i++) {
        newCollection.push(callback(mutated[i]));
      }
      return newCollection;
    },

    reduce: function(collection, callback, acc) {
      let mutated = collection.splice();
      let memo = acc || mutated[0];
      !!acc ? null : mutated.shift();
      for (const el of mutated) { memo = callback(el, memo) };
      return memo;
      // let memo = (!!acc) ? acc : collection[0];
      // let i = (!!acc) ? 0 : 1;
      // for (; i < collection.length; i++) {
      //   memo = callback(collection[i], memo);
      // }
      // return memo;
    },

    find: function(collection, predicate) {

    },

    filter: function(collection, predicate) {

    },

    size: function(collection) {

    },
      // STOP --> Pair with Connie!!
    first: function(array, [n]) {

    },

    last: function(array, [n]) {

    },

    compact: function(array) {

    },

    sortBy: function(array, callback) {

    },

    flatten: function(array, [shallow]) {

    },

    uniq: function(array, [isSorted], [callback]) {

    },

    keys: function(object) {

    },

    values: function(object) {

    },

    functions: function(object) {

    }
  }
})()

fi.libraryMethod()
