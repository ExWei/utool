var should = require('should');

var u = require("../lib/index.js");

describe("Strings", function () {
    describe("#capitalize()", function () {
        it("Should return capitalized string", function () {
            u.capitalize("test").should.be.equal("Test");
            u.capitalize("code").should.be.equal("Code");
            u.capitalize("with space").should.be.equal("With space");
            u.capitalize("Already").should.be.equal("Already");
        });
    });
    describe("#uncapitalize()", function () {
        it("Should return uncapitalized string", function () {
            u.uncapitalize("Test").should.be.equal("test");
            u.uncapitalize("Code").should.be.equal("code");
            u.uncapitalize("With space").should.be.equal("with space");
            u.uncapitalize("Already").should.be.equal("already");
        });
    });
    describe("#uppercase()", function () {
        it("Should return upper-case string", function () {
            u.uppercase("Test").should.be.equal("TEST");
            u.uppercase("code").should.be.equal("CODE");
            u.uppercase("PrOgRaM").should.be.equal("PROGRAM");
            u.uppercase("With space").should.be.equal("WITH SPACE");
            u.uppercase("ALREADY").should.be.equal("ALREADY");
        });
    });
    describe("#lowercase()", function () {
        it("Should return lower-case string", function () {
            u.lowercase("Test").should.be.equal("test");
            u.lowercase("code").should.be.equal("code");
            u.lowercase("PrOgRaM").should.be.equal("program");
            u.lowercase("With space").should.be.equal("with space");
            u.lowercase("already").should.be.equal("already");
        });
    });
});