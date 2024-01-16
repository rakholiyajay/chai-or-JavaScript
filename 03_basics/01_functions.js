
function sayMyName(){
    console.log("J")
    console.log("A")
    console.log("Y")
}

// sayMyName()

// function addTwoNum(number1, number2){
//     console.log(number1 + number2)
// }
function addTwoNum(number1, number2){
    let result = number1 + number2
    return result
    console.log("Jay") //it is unreachable because after the return statement it doesn't work
    //Note when we return any values that time we define that value in any variable other wise this value will be not define in any types of variable 

    // 2nd method to return the value directly 
    // return number1 + number2 (by this method we also save the memory and also write a new code)
}

const result = addTwoNum(6,5)
console.log("result :",result)



// different types od datatypes is used in the value of the function
function loginUserMessage(username){
     return `${username} Just Logged In`
}
  // also write directly console
  //console.log(loginUserMessage("Jay"))

 const loginMessage = loginUserMessage("Jay")
 console.log("loginMessage:",loginMessage)

 //in some case any person didn't pass the value 

 function loginUserMessage2(username2){
    if(!username2){
      console.log("Please Enter a user Name")
      return
    }
    return `${username2} Just Logged In`
}

 console.log(loginUserMessage2())


//  gives the default value when any person not gives a username

function loginUserMessage3(username3 = "RakholiyaJay"){
    return `${username3} Just Logged In`//we doesn't use the if statement because the username value not undefined any time because we gives a default value 
}

console.log(loginUserMessage3())
