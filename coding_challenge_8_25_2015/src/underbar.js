var _ = {};

(function() {


  // Call iterator(value, key, collection) for each element of collection
  //support either an object or an array
  _.each = function(obj, iterator) {
    if (Array.isArray(obj)) {
      for (var i = 0, l = obj.length; i < l; i++) {
        iterator(obj[i], i, obj);
      }
    } else if (typeof(obj) === 'object') {
      for (var prop in obj) {
        iterator(obj[prop], prop, obj);
      }
    }
  };


  /*
   * map() is a useful primitive iteration function that works a lot
   * like each(), but in addition to running the operation on all
   * the members, it also maintains an array of results.
   */
   //write reusing each
  _.map = function(array, iterator) {
    var resultsArray = [];
    _.each(array, function(value, index, array) {
      resultsArray[index] = iterator(value);
    });
    return resultsArray;
  };

  //using each
  _.indexOf = function(array, target) {

    // [2, 4, 5, 2]
    var result = -1;
    var targetChecker = function(value, index, array) {
      if (result === -1) {
        if (value === target) {      
        result = index;
        return result;
        }
      }      
    };
    _.each(array, targetChecker);
    return parseInt(result);
  }



  //using indexOf
  _.contains = function(obj, target) {
    // 1: initiate variable for the return boolean as false
    var result = false;
    // 2: call indexOf passing in the obj and the target value  
      // if result of indexOf is greater than -1, you know it's in there
    var value =  _.indexOf(obj, target);
    if (value > -1)  {
      result = true;
    }
    // last: return boolean for whter you found it
    return result;
  };

  //produce a duplicate free version of the array
  //use contains

  _.uniq = function(list) {
    // 1: initiate new array variable
    var resultsArray = [];
    // 
      // each tiem throguh, check if it already exists in the new aray, if it does, don't psush it to new array
    _.each(list, function(value, index, list) {
      if (!_.contains(resultsArray, value)) {
        resultsArray.push(value);
      }
    });
    // last: return new array
    return resultsArray;
  }

  //using recursion
  //The concat() method returns a new array comprised of the array on which it is called joined with the array(s) and/or value(s) provided as arguments.
  _.flatten = function(array) {
    var newArray = [];
    
    for (var i = 0; i < array.length; i++) {
      if (Array.isArray(array[i])) {
        newArray = newArray.concat(_.flatten(array[i]));
      } else {
        newArray.push(array[i]);
      }
    } 
    return newArray;
  };

  //assumption, there are no duplicates within any of the arrays

  //every item shared between all passed in arrays
  _.intersection = function(arrays) {
    // 1. initate my variabnle, items shared
    var arrayDupes = [];
    var doubles = [];

    // 2. flatten the arguments
    var flat  = _.flatten(arguments);
    // 3: pass each one into the intersection array 
    // flat = ['moe', 'curly', 'larry', 'moe', 'groucho'];
    _.each(flat, function(value, index, flat) {
      if (_.contains(arrayDupes, value)) {
        doubles.push(value);
      } else {
        arrayDupes.push(value);
      }
    });
    // last: return itesm sharedd
    return doubles;
  };

  //take the difference between one array and a number of other arrays
  _.difference = function(arrays) {
    var arrayDupes = [];
    var singles = [];

    // 2. flatten the arguments
    var flat  = _.flatten(arguments);
    // 3: pass each one into the intersection array 
    // flat = ['moe', 'curly', 'larry', 'moe', 'groucho'];
    // [1,2,3 , 2,30,40]
    _.each(flat, function(value, index, flat) {
      if (!_.contains(arrayDupes, value)) {
        singles.push(value);
        arrayDupes.push(value);
      } else {
        arrayDupes.push(value);
      }
    });
    // last: return itesm sharedd
    return singles;
    // [1, 3];
  };
  







}).call(this);
