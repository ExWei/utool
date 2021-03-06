var should = require('should');

var u = require("../lib/index.js");

describe("Arrays", function () {
    describe("#first()", function () {
        it("Should return first element in array", function () {
            u.first([1, 2, 3]).should.be.eql(1);
            u.first(["a", "b", "c"]).should.be.eql("a");
            u.first(["d"]).should.be.eql("d");
            u.first([]).should.be.eql("");
        });
    });
    describe("#last()", function () {
        it("Should return last element in array", function () {
            u.last([1, 2, 3]).should.be.eql(3);
            u.last(["a", "b", "c"]).should.be.equal("c");
            u.last(["d"]).should.be.equal("d");
            u.last([]).should.be.eql("");
        });
    });
    describe("#reverse()", function () {
        it("Should return reversed array", function () {
            u.reverse([1, 2, 3]).should.be.eql([3, 2, 1]);
            u.reverse(["a", "b", "c"]).should.be.eql(["c", "b", "a"]);
            u.reverse(["d"]).should.be.eql(["d"]);
            u.reverse([]).should.be.eql([]);
        });
    });
    describe("#rest()", function () {
        it("Should rest of array array", function () {
            u.rest([1, 2, 3]).should.be.eql([2, 3]);
            u.rest([1, 2, 3], 2).should.be.eql([3]);
            u.rest(["a", "b", "c"]).should.be.eql(["b", "c"]);
            u.rest(["d"]).should.be.eql([]);
            u.rest([]).should.be.eql([]);
        });
    });
});