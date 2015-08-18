var _ = {};

(function() {

  // Return an array of the last n elements of an array. If n is undefined,
  // return just the last element.
  _.last = function(array, n) {
  if(n == undefined){
	  var newt1 = array.pop();
	  return newt1;
  }
  if(n == 0){
  	  var p = new Array(); 
	  return p;
  }
  if (n > array.length){
  	  	return array;
  	  	}
  else{
  	  var nums = new Array()
  	  var i = 1;
  	  var y = array.length - n;
	  while(i <= n){
		  var z = array[y];
		  nums.push(z);
		  y += 1;
		  i ++;
	  }
	  return nums;
	  }
  };


  // Like last, but for the first elements
  _.first = function(array, n) {
    if(n > array.length){
  	  	return array;
  	}if(n == undefined){
  	console.log(array[0]);
	  	return array[0];
  	}
    else{
    	var i = 0;
    	var nums = new Array()
	    while(i < n){
	      var t = array[i];
	      nums.push(t);
	      i ++;
	    }
	    return(nums);  
    }
    // TIP: you can often re-use similar functions in clever ways, like so:
    if(n == 0){
    return _.last(array.reverse(), n);
    }

  };


  // Call iterator(value, key, collection) for each element of collection
_.each = function(obj, iterator) {
  if (Array.isArray(obj)) {
    for(var i = 0; i < obj.length; i++){
	  iterator.call(context, obj[i], i, obj);
    };
  } else {
    for (prop in obj) {
      iterator.call(context, obj[prop], prop, obj);
    }
  } 
};



  /*
   * TIP: Here's an example of a function that needs to iterate, which we've
   * implemented for you. Instead of using a standard `for` loop, though,
   * it uses the iteration helper `each`, which you will need to write.
   */

  // Returns the index at which value can be found in the array, or -1 if value
  // is not present in the array.
  _.indexOf = function(array, target){
    var result = -1;

    _.each(array, function(item, index) {
      if (item === target && result === -1) {
        result = index;
      }
    });

    return result;
  };

  // Return all elements of an array that pass a truth test.
_.filter = function(obj, evaluator) {
  // 1. declare resultArray as a variable
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
  // Return all elements of an array that don't pass a truth test.
  _.reject = function(collections, iterator) {
  console.log(collections)
  	var arrr = new Array();
  	for(var i in collections){
	  	if(iterator(i) === true){
		  	arrr.push(collections[i]);
	  	}
  	}
  	//console.log(arrr);
  	return arrr;
  };
    // TIP: see if you can re-use _.select() here, without simply
    // copying code in and modifying it

  // Produce a duplicate-free version of the array.
  _.uniq = function(array) {
  			var uniquevalues = new Array();
  			for(var i in array)
  			if(uniquevalues.indexOf(array[i]) >= 0){}
		  	else{
		  	 uniquevalues.push(array[i]);
		  	 }
	  	
	  	return uniquevalues;
};

  /*
   * map() is a useful primitive iteration function that works a lot
   * like each(), but in addition to running the operation on all
   * the members, it also maintains an array of results.
   */

  // Return the results of applying an iterator to each element.
  _.map = function(array, iterator) {
  		var newt = new Array();
  		for(var i in array){
	  		var t = iterator(array[i])
	  		newt.push(t);
	  		
  		}
  		//console.log(newt)
  		return newt
  		
  };

  /*
   * TIP: map is really handy when you want to transform an array of
   * values into a new array of values. _.pluck() is solved for you
   * as an example of this.
   */

  // Takes an array of objects and returns and array of the values of
  // a certain property in it. E.g. take an array of people and return
  // an array of just their ages
  _.pluck = function(obj, propertyName) {
    return _.map(obj, function(value){
      return value[propertyName];
    });
  };

  // Calls the method named by methodName on each value in the list.
  _.invoke = function(list, methodName) {
  		var transformed = new Array();
  		for(var i in list){
	  		if(methodName === "sort"){
		  		var t = list[i].sort();
		  		transformed.push(t);
	  		}
	  		if(typeof(methodName) == "function"){
		  		var z = list[i].methodName();
		  		transformed.push(t);
	  		}
	  		
  		}
  		return transformed;
  };

  // Reduces an array or object to a single value by repetitively calling
  // iterator(previousValue, item) for each item. previousValue should be
  // the return value of the previous iterator call.
  //
  // You can pass in an initialValue that is passed to the first iterator
  // call. Defaults to 0.
  //
  // Example:
  //   var numbers = [1,2,3];
  //   var sum = _.reduce(numbers, function(total, number){
  //     return total + number;
  //   }, 0); // should be 6
  //
  _.reduce = function(obj, iterator, initialValue) {
    // 1. make a variable to keep track of the total
      var total;
    // 2. check if there is an initialValue, 
      if (initialValue) 
    // 3. if there is, make that the total
      { total = initialValue;}
    // 4. if there isn't, make total 0
      else {total = 0;}
    // 3. pass the value at each array index into the iterator function, += total as you add them
      _.each(obj, function(value, index, obj) {
        total = iterator(total, value);
      });
    // 4. return the total
      return total;
  };
  		// if(initialValue == undefined){
	  	// 	var num = 0;
  		// }
  		// else{
	  	// 	var num = initialValue;
  		// }
  		// var sum = 0;
  		// for(var x in obj){
	  	// 	var sump = iterator(num, obj[x]) 
	  	// 	sum += sump
  		// }
  		// return sum;
  /*
var numbers = [1, 2, 3, 4];
  _.reduce(numbers, function(total, current){
    return total + current;
  }, 2);
*/

  // Determine if the array or object contains a given value (using `===`).
  _.contains = function(obj, testValue) {
  //1. create variable called result for whether the testValue, initiate at 'false'
    // var result = false;
  // 2. use reduce, passing in result and current value 
    return _.reduce(obj, function(value, index, obj){
      if (value === testValue) {
        return true;
      } else {
        return false;
      }
    });
  // 3. check if the current value is equal to the testValue
    // return result;
  // 4. if it is, change result to true

  // 5. if not, keep going
  };

  // Determine whether all of the elements match a truth test.
  _.every = function(obj, iterator) {
  		var count = true;
	 	for(var x in obj){
		 	var t = iterator(obj[x])
		 		if(t == false){
			 		count = false;
		 		}if(t == undefined){
			 		count = false;
		 		}
	 	}
  	return count;
  	
  };

  // Determine whether any of the elements pass a truth test. If no iterator is
  // provided, provide a default one

_.any = function(obj, iterator) {
  var anyTrue = false;
  if(!iterator){
	  iterator = function(i){
	  return i;
  };
  }
  _.each(obj, function(value, index, obj){
    if(iterator.call(context, value, index, obj)){
	    anyTrue = true;
    }
    });
    return anyTrue;
};



  /*
   * These are a couple of helpers for merging objects
   */

  // Extend a given object with all the properties of the passed in
  // object(s).
  //
  // Example:
  //   var obj1 = {key1: "something"};
  //   _.extend(obj1, {
  //     key2: "something new",
  //     key3: "something else new"
  //   }, {
  //     bla: "even more stuff"
  //   }); // obj1 now contains key1, key2, key3 and bla
  //
  //steps
  // assign first element to variable
  // delete first element from obj
  // loop through obj and add each value to obj 1
  /*_.extend = function() {
  	var nelement = arguments[0];
  	//console.log(arguments[0]);
  	for(var i = 1; i < arguments.length; i++){
  		
	  	console.log(Object.keys(arguments[i]));
	  	var t = Object.keys(arguments[i]);
	  	console.log(arguments[i].t);
  	}*/
  	
  	
	//console.log(nelement)	
	_.extend = function() {
	var obj = {};
	for(var i = 0; i < arguments.length; i++){
		var obj1 = arguments[i];
	
  for (var x in obj1)
    if (obj1.hasOwnProperty(x))
      obj[x] = obj1[x];

  }

  return obj;
	};
  

  // Like extend, but doesn't ever overwrite a key that already
  // exists in obj
  _.defaults = function(obj) {
    var original = arguments[0];
    for(var i = 1; i < arguments.length; i++){
      var current = arguments[i];
      console.log(current);
      for(var x in current){
        var checkValue = x
        console.log(checkValue);
        var check = original.hasOwnProperty(checkValue);
	    if(!check){
		  original[checkValue] = current[checkValue];    
	    }
	    //console.log(original);    
      }
    }
  };



  /*
   * Now we're getting into function decorators, which take in any function
   * and return out a new version of the function that works somewhat differently
   */

  // Return a function that can be called at most one time. Subsequent calls
  // should return the previously returned value.
  _.once = function(func) {
    // TIP: These variables are stored in a `closure scope` (worth researching),
    // so that they'll remain available to the newly-generated function every
    // time it's called.
    
    var alreadyCalled = false;
    var result;
    // TIP: We'll return a new function that delegates to the old one, but only
    // if it hasn't been called before.
    return function(){
      if(!alreadyCalled){
        // TIP: .apply(this, arguments) is the standard way to pass on all of the
        // infromation from one function call to another.
        result = func.apply(this, arguments);
        alreadyCalled = true;
      }
      // The new function always returns the originally computed result.
      return result;
    };
  };

  // Memoize an expensive function by storing its results. You may assume
  // that the function takes only one argument and that it is a primitive.
  //
  // Memoize should return a function that when called, will check if it has
  // already computed the result for the given argument and return that value
  // instead if possible.
  _.memoize = function(func) {
    var passedResults = {};
    var alreadyCalled = passedResults.hasOwnProperty(func);
    return function(){
    if(!alreadyCalled){
	  passedResults[func] = func.apply(this, arguments);      
    }
    return passedResults[func];
    };
  };
    
    //var execute = function(){func();}
    //return _.once(execute);


  // Delays a function for the given number of milliseconds, and then calls
  // it with the arguments supplied.
  //
  // The arguments for the original function are passed after the wait
  // parameter. For example _.delay(someFunction, 500, 'a', 'b') will
  // call someFunction('a', 'b') after 500ms
  _.delay = function(func, wait) {
  var now = function(){
	  return func(1, 2);
  }
  setTimeout(now, wait)
  };


  /*
   * Advanced collection operations
   */

  // Shuffle an array.
     _.range = function(range) {
    var nums = [];
    for(var i = 0; i< range ; i++)
    {
      nums.push(i);
    }
    return nums;

   }
  
  
  _.shuffle = function(obj) {
  for (var n = 0; n < obj.length - 1; n++) {
        var i = obj.length;
  if ( i == 0 ) return false;
  while ( --i ) {
     var j = Math.floor( Math.random() * ( i + 1 ) );
     var tempi = obj[i];
     var tempj = obj[j];
     obj[i] = tempj;
     obj[j] = tempi;
   }
}
return obj;
};

  /* (End of pre-course curriculum) */

  // Sort the object's values by a criterion produced by an iterator.
  // If iterator is a string, sort objects by that property with the name
  // of that string. For example, _.sortBy(people, 'name') should sort
  // an array of people by their name.
  _.sortBy = function(collection, iterator) {
  };

  // Zip together two or more arrays with elements of the same index
  // going together.
  //
  // Example:
  // _.zip(['a','b','c','d'], [1,2,3]) returns [['a',1], ['b',2], ['c',3]]
  _.zip = function() {
  };

  // Flattens a multidimensional array to a one-dimensional array that
  // contains all the elements of all the nested arrays.
  //
  // Hints: Use Array.isArray to check if something is an array
  //
  _.flatten = function(nestedArray, result) {
  };

  // Produce an array that contains every item shared between all the
  // passed-in arrays.
  _.intersection = function(array) {
  };

  // Take the difference between one array and a number of other arrays.
  // Only the elements present in just the first array will remain.
  _.difference = function(array) {
  };


  /*
   * Offroad
   */

  // EXTRA CREDIT:
  // Return an object that responds to chainable function calls for
  // map, pluck, select, etc
  //
  // See README for details
  _.chain = function(obj) {
  };

  // EXTRA CREDIT:
  // Returns a function, that, when invoked, will only be triggered at most once
  // during a given window of time.
  //
  // See README for details
  _.throttle = function(func, wait) {
  };

}).call(this);
