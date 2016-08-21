var expect = require('chai').expect;
var isPrime = require('../script').isPrime;

// Create a test suite for isPrime

describe("isPrime()", function() {
    it("should return true for prime numbers", function(){
        expect(isPrime(7)).to.equal(true);
        expect(isPrime(97)).to.equal(true);
        expect(isPrime(13)).to.equal(true);
        expect(isPrime(29)).to.equal(true);
    });

    it("should return false for non-prime numbers", function() {
        expect(isPrime(4)).to.equal(false);
        expect(isPrime(10)).to.equal(false);
        expect(isPrime(22)).to.equal(false);
        expect(isPrime(49)).to.equal(false);
    });

    it("should return false for non-number inputs", function(){
        expect(isPrime("A")).to.equal(false);
        expect(isPrime("Mo")).to.equal(false);
        expect(isPrime("Bauhaus")).to.equal(false);
        expect(isPrime("Pud pooped on me")).to.equal(false);
    });
})
