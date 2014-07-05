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
            u.last([1, 2, 3]).should.be.eql([3, 2, 1]);
            u.last(["a", "b", "c"]).should.be.eql(["c", "b", "a"]);
            u.last(["d"]).should.be.eql(["d"]);
            u.last([]).should.be.equal([]);
        });
    });
});