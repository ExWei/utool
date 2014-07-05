var should = require('should');

var u = require("../lib/index.js");

describe("Arrays", function () {
    describe("#last()", function () {
        it("Should return first element in array", function () {
            u.first([1, 2, 3]).should.be.equal(1);
            u.first(["a", "b", "c"]).should.be.equal("a");
            u.first(["d"]).should.be.equal("d");
            u.first([]).should.be.equal(undefined);
        });
        it("Should return last element in array", function () {
            u.last([1, 2, 3]).should.be.equal(3);
            u.last(["a", "b", "c"]).should.be.equal("c");
            u.last(["d"]).should.be.equal("d");
            u.last([]).should.be.equal(undefined);
        });
        it("Should return reversed array", function () {
            u.reverse([1, 2, 3]).should.be.eql([3, 2, 1]);
            u.reverse(["a", "b", "c"]).should.be.eql(["c", "b", "a"]);
            u.reverse(["d"]).should.be.eql(["d"]);
            u.reverse([]).should.be.equal([]);
        });
        it("Should rest of array array", function () {
            u.rest([1, 2, 3]).should.be.eql([2, 3]);
            u.rest([1, 2, 3], 2).should.be.eql([3]);
            u.rest(["a", "b", "c"]).should.be.eql(["b", "c"]);
            u.rest(["d"]).should.be.eql([]);
            u.rest([]).should.be.eql([]);
        });
    });
});