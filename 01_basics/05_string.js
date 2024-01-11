const firstName = "Jay"
const lastName = "Rakholiya"
const age = 22

console.log("my name is " + firstName + " " + lastName)//mordern day we couldn't write by this type 
console.log(`Hello my name is ${firstName} ${lastName} and my age is ${age}`)//This is the new method we write the variable name in between template backtick. It is also called the string interpolation we also use the method like toUppercase and toLowercase like ${firstName.toUppercase}


//2nd way to declare the string
const gameName = new String ("RakholiyaJay")

// methods with the string we can use 
//console.log(gameName[0])//(access the 0th value of this string)

//console.log(gameName.__proto__)

//console.log(gameName.length)

//console.log(gameName.toUpperCase())//(to uppercase)

//console.log(gameName.charAt(6))//(to find the position of the character by simple write no. of position) 
//console.log(gameName.indexOf('J')) // (to find the position of the particular character)

const name = "Rakholiya-Jay"

const newstring = name.substring(0, 6)//output is Rakhol it cannot take negative value it is use 0 bydefault
console.log(newstring)

const anotherstring = name.slice(0, 9)//we also give a negative value so tehy start from the last (-12, 6) output is akhol
console.log(anotherstring)

//Trim & replace method

//Trim:- Trim is known by remove the unusual spaces from Top & Bottom
const newStringOne = "    Jay    "
console.log(newStringOne)
console.log(newStringOne.trim())

//rakholiyaReplace Method :-
const url = "https://Jay.com/jay%20rakholiya"
console.log(url.replace('%20', '-'))//what we can search and which thing i will be replaces
console.log(url.includes('Jay'))//we ask that this word is present or not on the above string

console.log(gameName.split('-'))
