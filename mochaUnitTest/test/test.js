var expect = require('chai').expect;
var addTwoNumbers = require('../addTwoNumbers')

describe('addTwoNumbers()', function (){
    it('should add two numbers', function(){
         // 1. Arrange
        var x = 5;
        var y = 2;
        var sum1 = x + y;

        // 2. Act
        var sum2 = addTwoNumbers(x,y);

        // 3. Assert
        expect(sum2).to.be.equal(sum1);
    });

    it('Should throw an error', function(){
        // 1. Arrange
       var x = "en streng";
       var y = "endnu en streng";
       var result1 = "please enter two integers";

       // 2. Act
       var result2 = addTwoNumbers(x,y);

       // 3. Assert
       expect(result2).to.be.equal(result1);
   });

});