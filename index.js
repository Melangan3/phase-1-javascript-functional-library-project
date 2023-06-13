function myEach(collection, callback) {
    if (Array.isArray(collection)) {
      for (let i = 0; i < collection.length; i++) {
        callback(collection[i], i, collection);
      }
    } else if (typeof collection === 'object') {
      for (let key in collection) {
        if (collection.hasOwnProperty(key)) {
          callback(collection[key], key, collection);
        }
      }
    }
  
    return collection;
  };

  function myMap(collection, callback){
    if (Array.isArray(collection)) {
      let newArray = [];
      for (let i = 0; i < collection.length; i++) {
        newArray.push(callback(collection[i], i, collection));
      }
      return newArray;
    } else if (typeof collection === 'object') {
      let newArray = {};
      for (let key in collection) {
        if (collection.hasOwnProperty(key)) {
          newArray[key] = callback(collection[key], key, collection);
        }
      }
      return newArray;
    }
};

function myReduce(collection, callback, startValue) {
    const values = Object.values(collection);
    let acc = startValue !== undefined ? startValue : values[0];
    const startIndex = startValue !== undefined ? 0 : 1;
  
    for (let i = startIndex; i < values.length; i++) {
      acc = callback(acc, values[i], collection);
    }
  
    return acc;
  }

  function myFind(collection, predicate) {
    for (let i = 0; i < collection.length; i++) {
      if (predicate(collection[i])) {
        return collection[i];
      }
    }
    return undefined;
  }

  function myFilter(collection, predicate) {
    const result = [];

    for (let i = 0; i < collection.length; i++) {
      if (predicate(collection[i])) {
        result.push(collection[i]);
      }
    }
  
    return result;
  }

  function mySize(collection) {
    if (Array.isArray(collection)) {
      return collection.length;
    } else if (typeof collection === 'object' && collection !== null) {
      return Object.keys(collection).length;
    } else {
      return 0;
    }
  }

  function myFirst(collection, n) {
    if (!Array.isArray(collection) || collection.length === 0) {
      return undefined; 
    }
  
    if (n === undefined || n <= 0) {
      return collection[0]; 
    }
  
    return collection.slice(0, n);
  }

  function myLast(collection, n) {
    if (!Array.isArray(collection) || collection.length === 0) {
      return undefined; // Return undefined if the collection is not an array or is empty
    }
  
    if (n === undefined || n <= 0) {
      return collection[collection.length - 1]; // Return the last element if n is not provided or is less than or equal to 0
    }
  
    if (n >= collection.length) {
      return collection; // Return the entire collection if n is greater than or equal to the collection length
    }
  
    return collection.slice(collection.length - n);
  }

  function myKeys(obj) {
    return Object.keys(obj);
  }
  
  function myValues(obj) {
    return Object.values(obj);
  }