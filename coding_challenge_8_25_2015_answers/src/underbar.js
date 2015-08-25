var _ = {};

(function() {


  // Call iterator(value, key, collection) for each element of collection
  //support either an object or an array
  _.each = function(obj, iterator) {

  };


  /*
   * map() is a useful primitive iteration function that works a lot
   * like each(), but in addition to running the operation on all
   * the members, it also maintains an array of results.
   */
   //write reusing each
  _.map = function(array, iterator) {

  };

  //using each
  _.indexOf = function(array, target) {

  }

  //produce a duplicate free version of the array
  _.unique = function()

  //using indexOf
  _.contains = function(obj, truthTest) {

  }

  //using recursion
  _.flatten = function(array) {
    var retturnArray = [];
    for(var i = 0; i < array.length; i++) {
        if(Array.isArray(array[i])) {
            ret = ret.concat(_.flatten(array[i]));
        } else {
            ret.push(array[i]);
        }
    }
    return ret;
  }

  //every item shared between all passed in arrays
  _.intersection = function(array) {

  }

  //take the difference between one array and a number of other arrays
  _.difference = function(array) {
    
  }







}).call(this);
