var expect = require('chai').expect;
var reverseArray = require('../script').reverseArray;

// Create a test suite for reverseArray
describe("reverseArray()", function() {
    it("should return the reverse array", function(){
        var array = ['a','b','c'];
        expect(reverseArray(array)).to.eql(['c','b','a']);
        //holy crap - had to look that up in the docs on eql vs equal!
    });

    it("should return error message for non-array", function() {
        var notArray = 8;
        console.log('notArray: ', reverseArray(notArray));
        expect(reverseArray(notArray)).to.equal("not an array");
    });
});
