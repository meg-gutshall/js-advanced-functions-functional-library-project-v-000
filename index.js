const fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(collection, callback) {
      let newCollection = collection.isArray ? collection.splice() : Object.values(collection);
      for (let i = 0; i < newCollection.length; i++) {
        callback(newCollection[i]);
      }
      return collection;
    },

    map: function(collection, callback) {

    },

    reduce: function(collection, callback, acc) {

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
