// Datatypes

// Primitive datatypes
//7types: String, Number, Boolean, null, Undefined, BigInt, Symbol

const name = "jay"//string

const score = 456 //number
const scoreValue = 456.7878 //number

const isLoggedIn = false //Boolean
const outSideTemp = null //null
let userEmail;

//declare the symbol in primitive datatypes
const id = Symbol('123')
const anotherid = Symbol('123')
console.log(id === anotherid)

//notes: symbol  work is that if we pass the same value in id or another id but the result for id and another id is different

//BigInt example
const bigNumber = 566768945278957259635653
console.log(bigNumber)
const bigNumberr = 566768945278957259635653n //when i apply n on the last of the value that it make a bigint number
console.log(bigNumberr)


// Reference( NonPrimitive datatypes)
//Array, Object, Functions

const heros = ["superman", "shaktiman", "Thor"]//array example 
let myObj = {
    name: "Jay",
    age: 22
}//this is the example of the object the values is in {} is the Obj and the in the object the datatypes we can use any string, obj, fun also 
const myFun = function() {
    console.log("Rakholiya Jay")
}//this is the example of the function in the nonprimitive datatypes


//*****************************************************
//2 types of the memory
//1) Stack(Primitive)
//2) Heap(Non-Primitive)

//:- The stack memory is used in the all of the Primitive datatypes & Heap memory is used in the Non-Primitive datatypes

//stack:- when we use stack memory that time the it gives the copy of that value we should change on the copy
// example:-
 let myname = "Jay"
 let fullname = myname
 fullname = "Rakholiya Jay"
 console.log(myname) 
 console.log(fullname) 
//Heap:- when we use the Heap memory that time it gives a Reference that why it automatically change on the mainvalue
let userOne = {
    email: "jay@gmail.com",
    upi: "jay@ybl"
}
let userTwo = userOne
userTwo.email = "rakholiyajay147@gmail.com"

console.log(userOne.email)
console.log(userTwo.email)