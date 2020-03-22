const fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(collection, callback) {
      if (collection.isArray) {
        let newCollection = collection;
        for (const element of newCollection) {
          callback(element);
        }
      } else {
        let newCollection = collection;
        for (const element in newCollection) {
          callback(element);
        }
      }
      return collection;
    },

    map: function() {

    },

    reduce: function() {

    },

    functions: function() {

    },


  }
})()

fi.libraryMethod()
