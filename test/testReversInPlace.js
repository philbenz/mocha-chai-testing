var expect = require('chai').expect;
var reverseInPlace = require('../script').reverseInPlace;

// Create a test suite for reverseInPlace
// Create a test suite for reverseArray
describe("reverseInPlace()", function() {
    it("should return the reverse array", function(){
        var array = ['a','b','c', 'd','e'];
        expect(reverseInPlace(array)).to.eql(['e','d','c','b','a']);
    });

    it("should return undefined", function() {
        var notArray = 8;
        expect(reverseArray(notArray)).to.equal("reverseArray is not defined");
    });
});
