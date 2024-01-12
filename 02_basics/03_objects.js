//singleton:- if we make an object from any constructor that time this object is only one not object is like this object


// 1st method making an object 
Object.create //this is the way making an object by the constructor mehtod

//object literals(In object thter is a key and their values)

const mysym = Symbol("key1")

const Jsuser = {
    name: "Jay",
    "fullname": "RakholiyaJay",
    [mysym]: "symbolmethod1",
    age: 23,
    location: "Ahmedabad",
    email: "rakholiyajay147@gmail.com",
    isLoggedIn: false,
    lastLoginDay: ["monday", "saturday"]
}

//How to access the key of the object

// 1st type 
console.log(Jsuser.location)
//2nd way
console.log(Jsuser["lastLoginDay"])//we use string on the location because the key of the object it take the string behind the case
console.log(Jsuser["fullname"])

// symbol add in the object and print them 
console.log(Jsuser[mysym])


//change the value of the key of the object

Jsuser.email = "Admin@dmail.com"
console.log(Jsuser.email)

//how to lock the obj or any value of the particular key so any person can't change the value of obj or any value of key of in the object

Object.freeze(Jsuser)
Jsuser.email = "Ishagober@gmail.com"
console.log(Jsuser)


// function use in object 
Jsuser.greeting = function() {
    console.log("Hello Js User")
}

// target and print with the help of string interpolation 
Jsuser.greeting2 = function() {
    console.log(`Hello Js User, ${this.name}`)
}//when we reference the same object that time we use this notation


console.log(Jsuser.greeting())
console.log(Jsuser.greeting2())