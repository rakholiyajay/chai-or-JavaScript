let myName = "Jay"

console.log(myName)

let myHeros = ["Thor", "spiderman"]

let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function(){
        console.log(`spidey power is ${this.spiderman}`)
    }
}

Object.prototype.jay = function(){
    console.log(`jay is present in all the object`)
}

Array.prototype.heyJay = function(){
    console.log(`jay is present in array`)
}

// heroPower.jay()

myHeros.jay()
myHeros.heyJay()
//heroPower.heyJay()//(they doesn't have an access of heyJay because we define that methos in the array only)


// *****************Inheritance********************** 
// inheritance means how can we access the anothers property is called prototypeinheritance or inheritance 

const User = {
    name: 'chai',
    email: "chai@gmail.com"
}

const Teacher = {
   makeVideo: true
}

const TeachingSupport = {
   isAvailable: false
}

const TASupport = {
   makeAssignment: 'JS Assignment',
   fullTime: true,
   //if any situation they they share the information then we link the two object by __proto__
   __proto__: TeachingSupport
}

Teacher.__proto__ = User

//modern syntex
// we directly use the new methos and then do the inheritance 
//we only tell (which property is access by which object)

Object.setPrototypeOf(TeachingSupport, Teacher)


let anotherUsername = "Jay     "


String.prototype.trueLength = function(){
    console.log(`${this}`)
    console.log(`True length is: ${this.trim().length}`)
}

anotherUsername.trueLength()
"Jay".trueLength()
"Isha".trueLength()