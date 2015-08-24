var returnArguments = function(){ return arguments; };



describe("each", function() {
  it("should provide value and iteration count", function() {
    var letters = ['a', 'b', 'c'];
    var iterations = [];

    _.each(letters, function(letter, index, collection) {
      iterations.push([letter, index, collection]);
    });

    expect(iterations).to.eql([
      ['a', 0, letters],
      ['b', 1, letters],
      ['c', 2, letters]
    ]);
  });
});


describe("map", function() {
  it("should apply a function to every value in an array", function() {
    var doubled = _.map([1, 2, 3], function(num) { return num * 2; });
    expect(doubled).to.eql([2, 4, 6]);
  });
});


describe("filter", function() {
  it("should return all even numbers in an array", function() {
    var isEven = function(num) {
      return num % 2 === 0;
    };
    var evens = _.filter([1, 2, 3, 4, 5, 6], isEven);
    expect(evens).to.eql([2, 4, 6]);
  });

  it("should return all odd numbers in an array", function() {
    var isOdd = function(num) {
      return num % 2 !== 0;
    };
    var odds = _.filter([1, 2, 3, 4, 5, 6], isOdd);
    expect(odds).to.eql([1, 3, 5]);
  });
});



describe("contains", function() {
  it("should return true if a collection contains a user-specified value", function() {
    expect(_.contains([1,2,3], 2)).to.equal(true);
    expect(_.contains({moe:1, larry:3, curly:9}, 3)).to.equal(true);
  });

  it("should return false if a collection does not contain a user-specified value", function() {
    expect(_.contains([1,3,9], 2)).to.equal(false);
  });
});



describe("every", function() {
  var isEven = function(num) { return num % 2 === 0; };


  it("should handle a set that contains even numbers", function() {
    expect(_.every([0, 10, 28], isEven)).to.equal(true);
  });

  it("should handle a set that contains an odd number", function() {
    expect(_.every([0, 11, 28], isEven)).to.equal(false);
  });

});


describe("any", function() {

  var isEven = function(number){
    return number % 2 === 0;
  };


  it("should handle a set containing 'false' values", function() {
    expect(_.any([3, 3, 3], isEven)).to.equal(false);
  });


  it("should handle a set that contains all odd numbers", function() {
    expect(_.any([1, 11, 29], isEven)).to.equal(false);
  });

  it("should handle a set that contains an even number", function() {
    expect(_.any([1, 10, 29], isEven)).to.equal(true);
  });

});


// */
