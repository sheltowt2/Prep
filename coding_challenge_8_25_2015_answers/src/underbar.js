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

  //using each
  _.indexOf = function(array, target) {
    var result = -1
    _.each(array, function(value, index, array){
      if (value === target) {
        if (result == -1) {
         result = index         
        }
      }
    })
    return parseInt(result)
  }



  //using indexOf
  _.contains = function(obj, target) {
    var first = _.indexOf(obj, target)
    if (first != -1) {
      return true
    } else {
      return false
    }
  }

  //produce a duplicate free version of the array
  //use indexOf, contains
  _.uniq = function(list) {
    var arrayIndexes = []
    _.each(list, function(value, index, obj){
      if (_.contains(arrayIndexes, value) == false) {
        arrayIndexes.push(value)
      }
    })
    return arrayIndexes
  }

  //using recursion
  //The concat() method returns a new array comprised of the array on which it is called joined with the array(s) and/or value(s) provided as arguments.
  _.flatten = function(array) {
    var returnArray = [];
    for(var i = 0; i < array.length; i++) {
        if(Array.isArray(array[i])) {
            returnArray = returnArray.concat(_.flatten(array[i]));
        } else {
            returnArray.push(array[i]);
        }
    }
    return returnArray;
  }

  //assumption, there are no duplicates within any of the arrays

  //every item shared between all passed in arrays
  _.intersection = function(array) {

  }

  //take the difference between one array and a number of other arrays
  _.difference = function(array) {
    var flatArray = _.flatten(arguments)
    var uniqueValues = _.uniq(flatArray)
    return uniqueValues
  }







}).call(this);
