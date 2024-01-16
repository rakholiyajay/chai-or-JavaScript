let a = 10
const b = 20
var c = 30

if (true) {
    let a = 100
    const b = 200
    console.log("Inner", a)
}

console.log("Outer a",a)
// console.log(b)
// console.log(c)


//Nested Scope
function one(){
    const username = "Jay"

    function two(){
        const website = "Youtube"
        console.log("username", username)
    }
    // console.log("website", website)//it gies error because the parent component has no right to access from the child function 

    two()
}

one()
//this means children function has to right to take icecream from the parent function but the parent function has not right to take a icecream from the child function 


// nested in the ifelse statement 
if (true) {
    const username = "Jay"

    if (username === "Jay") {
        const website = " Youtube"
        console.log(username + website)
    }
    // console.log(website) it gives error because we take access the username out of the scope
}

// console.log(username)// it gives error because we take access the username out of the scope

// +++++++++++++++++++intresting+++++++++++++++++++++++++++++ 