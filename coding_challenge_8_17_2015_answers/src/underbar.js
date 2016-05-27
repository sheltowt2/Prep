var _ = {};

(function() {


  // Call iterator(value, key, collection) for each element of collection
  _.each = function(obj, callback) {
  if (Array.isArray(obj)) {
    for(var i = 0; i < obj.length; i++){
      callback(obj[i]);
    };
  } else {
    var prop
    for (prop in obj) {
      callback(obj[i]);
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

      _.each(array, function(value) {
        var transformed = iterator(value);
        returnArray.push(transformed);
      });

      return returnArray;
  };

  // Return all elements of an array that pass a truth test.
_.filter = function(obj, evaluator) {
  var resultArray = [];
  _.each(obj, function(value) {
    if (evaluator(value)) {
      resultArray.push(value);
    }
  });
  return resultArray;
}


  // Determine whether all of the elements match a truth test.
  _.every = function(obj, iterator) {
    var everyTrue = true;
    _.each(obj, function(value) {
      var t = iterator(value);
      if(t == false){
        everyTrue = false;
      }if(t == undefined){
        everyTrue = false;
      }
    });

    return everyTrue;
    
  };

  // Determine whether any of the elements pass a truth test. If no iterator is
  // provided, provide a default one


}).call(this);
