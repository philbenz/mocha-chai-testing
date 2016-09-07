
/*
 * These solutions may be incorrect.
 *
 * Your goal is to write tests to prove each one is either correct
 * or incorrect.
 *
 * If you find bugs in the functions below, you should
 * refactor the function to be correct. Feel free to change
 * anything at all in this file except the function names!
 *
 */
module.exports = {

  // Should return a new array where the order of arr have been reversed
  reverseArray: function (arr){
    if(Array.isArray(arr)) {
      var newArr = [];
      for (var i=arr.length-1; i>=0; i--){
          newArr.push(arr[i]);
      }
      return newArr;
    }
    return "not an array";
  },

  // Should return undefined and modify the input arr to be in reversed order
  reverseInPlace: function (arr) {
      var mid = arr.length/2;
      for (var i=0; i<mid; i++){
        var temp = arr[i];
        arr[i] = arr[arr.length-i-1];
        arr[arr.length-i-1] = temp;
      }
      return arr;
  },

  // Should report true if n is a prime number, false otherwise.
  isPrime: function (n)  {

    if(Number.isInteger(n)) {

    for(var i = 2; i < n; i++) {
        if(n % i === 0) {
            return false;
        }
    }
    return true;
    }
    return false;
  },

};
