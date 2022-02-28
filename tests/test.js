const assert = require('assert')
var sinon = require("sinon");
var expect = require('chai').expect;
var should = require('chai').should();
const getToday = require('../assignment_8/one')
const modifyArray = require('../assignment_8/two')
const pushArray = require('../assignment_8/three')
const modifyString = require('../assignment_8/four')
const personObj = require('../assignment_8/five')
const myClass = require('../assignment_7/three')
const proc = require("../assignment_9/third")
const exp = require('constants');
const week = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday']
const arr = [
    'I am a String',
    3.14,
    [ 'a', 'e', 'i', 'o', 'u' ],
    { fname: 'Valliyapan', lname: 'SM', age: 21 }
]
const replace_string = "Hello! can you  with empty space when you find the text  or  ?"
const person_detail = '{"fname":"Valliyapan","lname":"SM","age":21,"fav_colour":["blue","pink"],"grades":{"DS":"A+","CPP":"S","M1":"A","DSD":"S"}}'
const addMul = {add: 30,mul: 300}
const addMul2 = {add: 120,mul: 1200}
const myObj = new myClass()
const myObj2 = new pushArray()
const spy = sinon.spy(myObj, "multTwoNos")


describe('Test for assignments', function() {
    describe('Test for assignment 8', function() {
        describe('Check correct day is returned or not', function(){
            it('should return Friday', function(){
                assert.equal(getToday(),'Monday')
            })
        })
        describe('Check if splice method returns correct weekdays', function(){
            it('should return array from sunday to saturday',function(){
                assert.deepEqual(modifyArray(), week)
            })
        })
        describe('Check array contains', function(){
            it('should return array arr',function(){
                assert.deepEqual(myObj2.getArray(), arr)
            })
        })
        describe('Check if string is modified correctly', function(){
            it('should return modifiedString', function(){
                assert.equal(modifyString(),replace_string)
            })
        })
        describe('Check if object is converted to JSON', function(){
            it('should return valid JSON object', function(){
                assert.equal(personObj(),person_detail)
            })
        })
    })
    describe('Test for assignment 7', function() {
        describe('check call back function using sinon', function(){
            it('should call multTwoNos once',function(){
                myObj.addTwoNos(10,20,myObj.multTwoNos)
                //myObj.addTwoNos(10,20,myObj.multTwoNos)
                sinon.assert.calledOnceWithExactly(spy,undefined,30)
            })
            it('should call callback once',function(){
                let callback = sinon.spy()
                myObj.addTwoNos(10,20,callback)
                expect(callback.calledOnce).to.be.true;
            })
            it('should return addMul object', function(){
                var stub = sinon.stub()
                stub.withArgs(1,2).onFirstCall().returns(addMul).onSecondCall().returns(addMul2)
                expect(myObj.addTwoNos(10,20,myObj.multTwoNos)).to.be.deep.equal(addMul)
                expect(myObj.addTwoNos(100,20,myObj.multTwoNos)).to.be.deep.equal(addMul2)
            })
        })
        describe('check call back working using assert', function(){
            it('should return object addMul',function(done){
                assert.deepEqual(myObj.addTwoNos(10,20,myObj.multTwoNos),addMul)
                done()
            })
        })
        describe('check call back working using chai', function(){
            it('should return object addMul',function(){
                expect(myObj.addTwoNos(10,20,myObj.multTwoNos)).to.deep.include(addMul)
            })
            it('should return object addMul',function(){
                myObj.addTwoNos(10,20,myObj.multTwoNos).should.deep.equal(addMul)
            })
        })
        describe('check promise working', function (){
            it('should return addMul', function(done){
                myObj.myPromise(10,20).then(
                    (value) => {
                        expect(value).to.be.deep.equal(addMul)
                        done()
                    }
                )
            })
        })
    })
    describe("Test for assignment 8 using mock", function() {
        describe("Test for child process", function(){
            it("mock execFile method", function(){
                let mock = sinon.mock(myObj2)
                let expectation = mock.expects("pushString")
                expectation.exactly(1)
                //expectation.withArgs("test")
                myObj2.getArray()
                mock.verify()
            })
        })
    })
})
