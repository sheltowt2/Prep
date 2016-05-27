var returnArguments = function(){ return arguments; };



describe("each", function() {
  it("should provide value and iteration count", function() {
    var letters = ['a', 'b', 'c'];
    var iterations = [];

    _.each(letters, function(letter) {
      iterations.push([letter]);
    });

    expect(iterations).to.eql(["a", "b", "c"]);
  });
});


describe("map", function() {
  it("should apply a function to every value in an array", function() {
    var doubled = _.map([1, 2, 3], function(num) { return num * 3; });
    expect(doubled).to.eql([3, 6, 9]);
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



describe("every", function() {
  var getValue = function(i) { return i; };
  var isEven = function(num) { return num % 2 === 0; };

  it("should handle a set that contains only true values", function() {
    expect(_.every([true, true, true], getValue)).to.equal(true);
  });

  it("should handle a set that contains one false value", function() {
    expect(_.every([true, false, true], getValue)).to.equal(false);
  });

  it("should handle a set that contains even numbers", function() {
    expect(_.every([0, 10, 28], isEven)).to.equal(true);
  });

  it("should handle a set that contains an odd number", function() {
    expect(_.every([0, 11, 28], isEven)).to.equal(false);
  });

  it("should cast to boolean true", function() {
    expect(_.every([1], getValue)).to.equal(true);
  });

  it("should cast to boolean false", function() {
    expect(_.every([0], getValue)).to.equal(false);
  });

  it("should work with an array that contains several undefined values", function() {
    expect(_.every([undefined, undefined, undefined], getValue)).to.equal(false);
  });
});



// */
