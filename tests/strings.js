var u = require("../lib/index.js");

describe("Strings", function () {
    describe("#capitalize()", function () {
        it("Should return capitalized string", function () {
            u.capitalize("test").should.be("Test");
            u.capitalize("code").should.be("Code");
            u.capitalize("with space").should.be("With space");
            u.capitalize("Already").should.be("Already");
        });
    });
    describe("#uncapitalize()", function () {
        it("Should return uncapitalized string", function () {
            u.uncapitalize("Test").should.be("test");
            u.uncapitalize("Code").should.be("code");
            u.uncapitalize("With space").should.be("with space");
            u.uncapitalize("Already").should.be("already");
        });
    });
    describe("#uppercase()", function () {
        it("Should return upper-case string", function () {
            u.uppercase("Test").should.be("TEST");
            u.uppercase("code").should.be("CODE");
            u.uppercase("PrOgRaM").should.be("PROGRAM");
            u.uppercase("With space").should.be("WITH SPACE");
            u.uppercase("ALREADY").should.be("ALREADY");
        });
    });
    describe("#lowercase()", function () {
        it("Should return lower-case string", function () {
            u.lowercase("Test").should.be("test");
            u.lowercase("code").should.be("code");
            u.lowercase("PrOgRaM").should.be("program");
            u.lowercase("With space").should.be("with space");
            u.lowercase("already").should.be("already");
        });
    });
});