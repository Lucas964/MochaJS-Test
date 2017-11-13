const assert = require('chai').assert;
// const sayGoodbye = require('../app').sayGoodbye;
// const addNumbers = require('../app').addNumbers;
const app = require('../app');

// Results
var sayGoodbyeResult = app.sayGoodbye();
var addNumbersResult = app.addNumbers(5, 5);

describe('App', function(){
    describe('sayGoodbye()', function(){
        it('sayGoodbye should return goodbye', function(){
            // let result = app.sayGoodbye();
            assert.equal(sayGoodbyeResult, 'goodbye');
        });
    
        it('sayGoodbye should return a String', function(){
            // let result = app.sayGoodbye();
            assert.typeOf(sayGoodbyeResult, 'string');
        });
    });

    describe('addNumbers()', function(){
        it('addNumbers should be above 5', function(){
            // let result = app.addNumbers(5, 5);
            assert.isAbove(addNumbersResult, 5);
        });
    
        it('addNumbers should return a number', function(){
            // let result = app.addNumbers(5, 5);
            assert.typeOf(addNumbersResult, 'number');
        });
    });
});