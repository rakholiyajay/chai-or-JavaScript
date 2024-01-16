const user = {
    username: "Jay",
    price: 999,

    welcomeMessage: function(){
        console.log(`${this.username}, welcome to the wonderfull website`)
        // console.log("welfunthis", this)
    }
}
// user.welcomeMessage()
// user.username = "Isha"
// user.welcomeMessage()

// console.log(this)



//function chai(){
    //let username = "Jay"
    // console.log(this.username)//this is not working because the this should be working on the only object not in the function by this type of method

//chai()

// *****************Arrow Function ********************** 
// declare the function through the Arrow function 

//simple method
// const chai = function(){
//     let username = "Jay"
//     console.log(this.username)
// }


//arrow function method
 const chai = () => {
     let username = "Jay"
     console.log(this.username)
}

//chai()

//Basic Arrow function syntex
const addTwo = (num1, num2) => {
   return num1 + num2
}
console.log(addTwo(25, 25))

// implicit return arrow function method : in this method we didn't  use the parenthesis and dont need to write an return word or write in one line 

//if we apply the curlybraces that time we use return keyword or when we use or not use the parenthesis that time we don't need to write the reutrn keyword

const addtwo = (num11, num22) => num11 + num22// first method 
const addtwoo = (num111, num222) => (num111 + num222) //second method 
// what was the use of parenthesis : when we need to inser the object that time we use curly braces that time it throw the undefined that why we "wrapped the object in the parenthesis"
const addTwoo = (num12, num22) => ({name: "Jay", age: 22})

console.log(addtwo(3, 4))
console.log(addtwoo(4, 5))
console.log(addTwoo())

