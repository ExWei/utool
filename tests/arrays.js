var should = require('should');

var u = require("../lib/index.js");

describe("Arrays", function () {
    describe("#last()", function () {
        it("Should return last element in array", function () {
            u.last([1, 2, 3]).should.be.equal(3);
            u.last(["a", "b", "c"]).should.be.equal("c");
            u.last(["d"]).should.be.equal("d");
            u.last([]).should.be.equal(undefined);
        });
    });
});