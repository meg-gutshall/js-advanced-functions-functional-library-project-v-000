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
      let memo = (!!acc) ? acc : collection[0];
      let i = (!!acc) ? 0 : 1;
      for (; i < collection.length; i++) {
        memo = callback(memo, collection[i]);
      }
      return memo;
    },

    find: function(collection, predicate) {
      let mutated = collection.isArray ? collection.splice() : Object.values(collection);
      for (let i = 0; i < mutated.length; i++) {
        return predicate(mutated[i]) ? predicate(mutated[i]) : undefined;
      }
    },

    filter: function(collection, predicate) {
      let mutated = collection.isArray ? collection.splice() : Object.values(collection);
      let newCollection = [];
      for (let i = 0; i < mutated.length; i++) {
        predicate(mutated[i]) !== false ? newCollection.push(predicate(mutated[i])) : null;
      }
      return newCollection;
    },

    size: function(collection) {
      let mutated = collection.isArray ? collection.splice() : Object.values(collection);
      return mutated.length;
    },

    first: function(array, n) {
      let mutated = array;
      if (n !== undefined ) {
        return mutated.slice(0, n);
      } else {
        return mutated.slice(0, 1).pop();
      }
    },

    last: function(array, n) {
      let mutated = array;
      if (n !== undefined ) {
        return mutated.slice(mutated.length - n, mutated.length);
      } else {
        return mutated.slice(mutated.length - 1, mutated.length).pop();
      }
    },

    compact: function(array) {
      let mutated = array;
      let newArray = [];
      for (const el of mutated) { el ? newArray.push(el) : null };
      return newArray;
    },

    sortBy: function(array, callback) {

    },

    flatten: function(array, [shallow]) {

    },

    uniq: function(array, [isSorted], [callback]) {

    },

    keys: function(object) {
      let mutated = Object.keys(object);
      return mutated;
    },

    values: function(object) {
      let mutated = Object.values(object);
      return mutated;
    },

    functions: function(object) {
      let mutated = Object.assign({}, object);
      let newArray = [];
      
    }
  }
})()

fi.libraryMethod()
