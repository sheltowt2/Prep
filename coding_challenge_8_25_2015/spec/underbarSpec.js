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

describe("indexOf", function() {

  it("should be able to compute indexOf even when the native function is undefined", function() {
    var numbers = [1, 2, 3];
    numbers.indexOf = null;
    expect(_.indexOf(numbers, 2)).to.be(1);
  });

  it("should work on an arguments object", function() {
    var args = returnArguments(1,2,3);
    expect(_.indexOf(args, 2)).to.be(1);
  });

  it("should not have 35 in the list", function() {
    var numbers = [10, 20, 30, 40, 50];
    expect(_.indexOf(numbers, 35, true)).to.be(-1);
  });

  it("should have 40 in the list", function() {
    var numbers = [10, 20, 30, 40, 50];
    expect(_.indexOf(numbers, 40, true)).to.be(3);
  });

  it("should have 40 in the list even when there are duplicates", function() {
    var numbers = [1, 40, 40, 40, 40, 40, 40, 40, 50, 60, 70];
    expect(_.indexOf(numbers, 40, true)).to.be(1);
  });
});

describe("uniq", function() {
  it("should return all unique values contained in an unsorted array", function() {
    var list = [1, 2, 1, 3, 1, 4];
    expect(_.uniq(list)).to.eql([1, 2, 3, 4]);
  });

  it("should handle iterators that work with a sorted array", function() {
    var iterator = function(value) { return value +1; };
    var list = [1, 2, 2, 3, 4, 4];
    expect(_.uniq(list, true, iterator)).to.eql([1, 2, 3, 4]);
  });

  it("should work on an arguments object", function() {
    var args = returnArguments(1, 2, 1, 3, 1, 4);
    expect(_.uniq(args)).to.eql([1, 2, 3, 4]);
  });
});


describe("contains", function() {
  it("should return true if a collection contains a user-specified value", function() {
    expect(_.contains([1,2,3], 2)).to.equal(true);
    // expect(_.contains({moe:1, larry:3, curly:9}, 3)).to.equal(true);
  });

  it("should return false if a collection does not contain a user-specified value", function() {
    expect(_.contains([1,3,9], 2)).to.equal(false);
  });
});


describe("flatten", function() {
  it("can flatten nested arrays", function() {
    var nestedArray = [1, [2], [3, [[[4]]]]];
    expect(_.flatten(nestedArray)).to.eql([1,2,3,4]);
  });

  it("works on an arguments object", function() {
    var args = returnArguments(1, [2], [3, [[[4]]]]);
    expect(_.flatten(args)).to.eql([1,2,3,4]);
  });
});

describe("intersection", function() {
  it("should take the set intersection of two arrays", function() {
    var stooges = ['moe', 'curly', 'larry'];
    var leaders = ['moe', 'groucho'];
    expect(_.intersection(stooges, leaders)).to.eql(['moe']);
  });

  it("should work on an arguments object", function() {
    var args = ['moe', 'curly', 'larry'];
    var leaders = ['moe', 'groucho'];
    expect(_.intersection(args, leaders)).to.eql(['moe']);
  });
});

describe("difference", function() {
  it("should return the difference between two arrays", function() {
    var diff = _.difference([1,2,3], [2,30,40]);
    expect(diff).to.eql([1,3]);
  });

  it("should return the difference between three arrays", function() {
    var result = _.difference([1, 2, 3, 4], [2, 30, 40], [1, 11, 111]);
    expect(result).to.eql([3, 4]);
  });
});


// */
