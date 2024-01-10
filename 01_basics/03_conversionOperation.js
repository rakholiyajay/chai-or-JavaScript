//conversion operation means we can convert one data types to the another data types
let marks = "89"

console.log(typeof marks)
console.log(typeof (marks))

// convert string into the number
let strIntoNum = Number(marks)
console.log(typeof strIntoNum)
console.log(strIntoNum)

//Notes
//"33" => 33
//"33abc" => NaN
//true => 1 /false => 0

//same as for when we convert any datatypes to any that time we use that converted data types keyword early to column we just check we we convert 1 it output is true or not & same as for false boolean datatypes
let isLoggedin = 1

let numIntoBool = Boolean(isLoggedin)
console.log(numIntoBool)
// console.log(typeof numIntoBool)

//Notes
//1 => true;
//0 => false;
//"" => false;
//"Jay" => true

// converted into string in different secionary
let someNumber = 60

let numIntoStr = String(someNumber)
console.log(numIntoStr)
// console.log(typeof numIntoStr)


//  ******************** operations ********************
let value = 33
let negvalue = -value
// console.log(negvalue)

//basic maths operation
/*
console.log(2+2)
console.log(2*2)
console.log(2-2)
console.log(2**3)
console.log(2/3)
console.log(2%3)
*/

let str1 = "Rakholiya"
let str2 = "Jay"

let str3 = str1 + " " + str2
console.log(str3)

//Basic conversion:- because we see the result if the first digit is in string it will convert all in the string if it is in the number that time it convert first number then concat with the string
console.log("1" + 2)
console.log(1 + "2")
console.log("1" + 2 + 2)
console.log(1 + 2 + "2")

//------special type conversion(tricky conversion)------

console.log(true)
console.log(+true)