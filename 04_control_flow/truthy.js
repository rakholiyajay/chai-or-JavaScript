//Truthy values and Falsy Values

const userEmail = "Jay@jay.ai"

if (userEmail) {
    console.log("Got the userEmail")
}else{
    console.log("Doesn't have an userEmail")
}

//falsy values
/*
false,
 0,
-0,
 BigInt(0n)//on is also an falsy values,
 "",
 null,
 undefined,
 NaN
 (This all are the Falsy Values)
 */

//  Truthy Values 

/*
"0",
'false',
" ",
[],
{},
function(){}//if the function was declare by this type so this function is also an truthy values
*/

// if array and object comes empty how can i check 
//Array example
const emptyArr = []
if (emptyArr.length === 0) {
    console.log("Arr is empty")
}

//Array example
const emptyObj = {}
if (Object.keys(emptyObj).length === 0) {
    console.log("Obj is empty")
}


// Truthy values and Falsy Values we should definitely focus on the null & Undefined

let val1;
// val1 = 5 ?? 10//it choose 1 value
// val1 = null ?? 20// In this case it always choose first value
//val1 = undefined ?? 25//In this case it always choose first value
val1 = null ?? 25 ?? undefined ?? 50//it choose 1 value


console.log(val1)


// Ternary Operator

// syntex 
// condition ? true : false 

//example
let iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("Less than 80") : console.log("Greater than 80")