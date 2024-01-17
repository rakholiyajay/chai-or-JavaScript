//if else condition 

const isUserLoggedIn = true
const temperature = 41

if ( temperature < 50 ) {
    //console.log("Temperature is less than 50")
}else{
    //console.log("Temperature is greater than 50")
}

// Comparision Operator : the compirision operator is used in the condition of the if condition
// <, >, <=, >=, ==, !=, ===


//if condition with block scope
const score = 200

if (score > 100) {
    const power = "fly"
    //console.log(`Your Power: ${power}`)
}

//shorthand notation uses the implecit scope
let balance = 1000

// if (balance > 500) console.log("Yes your balance is greater then 500") 


// nesting 

let balancee = 1000
if (balancee < 500) {
    console.log("Less than 500")
}else if (balancee < 750) {
    console.log("Less than 750")
}else if (balancee < 900) {
    console.log("Less than 900")
}else{
    console.log("Less than 1200")
}

//Logical Operator

// && = And condition this condition check both side if both are true is going on the if condition and if any statement is false that time it automatically thow error and goes into the else condition 

const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if (userLoggedIn && debitCard) {
    console.log("You should by a courses")
}

// || :- OR condition it test the multipls condition if the one condition is true that they true or they goes to if condition in OR condition any one statement is true it goes

if (loggedInFromGoogle || loggedInFromEmail) {
    console.log("User will be login")
}