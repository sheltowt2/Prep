var _ = {};

(function() {


  // Call iterator(value, key, collection) for each element of collection
  //support either an object or an array
  _.each = function(obj, iterator) {
    // 1. see what type of object it is
    // 2. do the if statement for if it's an array
    if (Array.isArray(obj)) {
      for (var i = 0, l = obj.length; i < l; i++){
        iterator(obj[i], i, obj);
      }
    }
    // 3. else statement will handle object
    else {
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
    // 1. make a variable for the output []
    var resultArray = [];
    // 2. use each and pass in array and iterator 
    _.each(array, function(value, index, array) {
      if (Array.isArray(array)) {
        resultArray[index] = iterator(value);
      }
      else { resultArray.push(iterator(value)); }
    });
    // 3. return the resulting array
    return resultArray;
  };


  //write resuing each
  // Return all elements of an array that pass a truth test.
  _.filter = function(obj, evaluator) {
    // 1. declare variable for the output array
    var resultArray = [];
    // 2. use each to pass each value into the evaluator
      // a. if the evaluator returns true, add that value to the new results array
      // b. if it doesn't, do nothing
    _.each(obj, function(value, index, obj) {
      if (evaluator(value)) {
        resultArray.push(value);
      }
    });
    // 3. return the resulting new array
    return resultArray;
  }


  //write resusing map, and filter
  // Determine if the array or object contains a given value (using `===`).
  _.contains = function(obj, testValue) {
    
    // 1. call map 
      // resutling array will be true/false for each value (did it equal the testValue)
      // [false, false, true, false]
      var isEqual = function(value) {
        return (value === testValue);        
      };

    var arrayPostMap = _.map(obj, isEqual);

    // 2. call filter using the new array and an evaluator (is true in here?)
      //  [true]
      // if length of new array is grater than 0, voila
    var evaluate = function(value) {
      if (value === true) {
        return true;
      }
    };  

    var arrayPostFilter = _.filter(arrayPostMap, evaluate);
    if (arrayPostFilter.length > 0) {
      return true;
    }  else {return false;}  
    
    // return ((_.filter(arrayPostMap, evaluate)).length > 0);
  };


  //write resuing each
  // Determine whether all of the elements match a truth test.
  _.every = function(obj, iterator) {
    var newArray = []
    _.each(obj, function(value, index, obj){      
      if (iterator(value)) {
        newArray.push(value);
      }           
    });
    return (newArray.length == obj.length);
  };

  // Determine whether any of the elements pass a truth test. If no iterator is
  // provided, provide a default one
  //write using map and contains
  _.any = function(obj, iterator) {
    
    var array2 = _.map(obj, iterator);
    // [false, false, false]

    return _.contains(array2, true);
  };

}).call(this);
