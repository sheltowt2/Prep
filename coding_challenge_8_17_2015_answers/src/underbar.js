var _ = {};

(function() {


  // Call iterator(value, key, collection) for each element of collection
  _.each = function(obj, iterator) {
  if (Array.isArray(obj)) {
    for(var i = 0; i < obj.length; i++){
    iterator.call(context, obj[i], i, obj);
    };
  } else {
    var prop
    for (prop in obj) {
      iterator.call(context, obj[prop], prop, obj);
    }
  } 
  };


  /*
   * map() is a useful primitive iteration function that works a lot
   * like each(), but in addition to running the operation on all
   * the members, it also maintains an array of results.
   */
  _.map = function(array, iterator) {
      var returnArray = new Array();

      _.each(array, function(value, index, array) {
        var transformed = iterator(value);
        returnArray.push(transformed)
      });

      return returnArray
  };

  // Return all elements of an array that pass a truth test.
_.filter = function(obj, evaluator) {
  var resultArray = [];
  // 2. use _.each to loop throught the array and run the evaluator on each one
  _.each(obj, function(value, index, obj) {
    if (evaluator(value)) {
      resultArray.push(value);
    }
    // 3. if the eavaluator returns true, i want to push the value at that index into the resultArray
      // if it's false, nothing
  });
  return resultArray;
}






  // Determine if the array or object contains a given value (using `===`).
  _.contains = function(obj, testValue) {
    var evaluator = function(value, checkvalue) {
      if (value === testValue) {
        return value
      } else {
        return null
      }
    }
    var result1 = _.map(obj, evaluator)

    var notnull = function(value) {
      if (value === null) {
        return false
      } else {
        return true
      }
    }
    var result = _.filter(result1, notnull)

    if (result.length >= 1) {
      return true
    } else {
      return false
    }
  };

  // Determine whether all of the elements match a truth test.
  _.every = function(obj, iterator) {
    var count = true;
    _.each(obj, function(value, index, obj) {
      var t = iterator(value);
      if(t == false){
        count = false;
      }if(t == undefined){
        count = false;
      }
    });

    return count;
    
  };

  // Determine whether any of the elements pass a truth test. If no iterator is
  // provided, provide a default one

_.any = function(obj, iterator) {
  if (!iterator){
    iterator = function(i){
      return i
    }
  }
  var result1 = _.map(obj, iterator)
  var result2 = _.contains(result1, true)
  console.log(result2)
  if (result2 >= 1) {
    return true
  } else {
    return false
  }
};



  // Produce an array that contains every item shared between all the
  // passed-in arrays.
  _.intersection = function(array) {
    //for each element in one array
    //contains element in another array
    // if true add to another array
  };

}).call(this);
