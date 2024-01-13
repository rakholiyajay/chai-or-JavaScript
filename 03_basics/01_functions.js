
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
}

const result = addTwoNum(6,5)
console.log("result :",result)