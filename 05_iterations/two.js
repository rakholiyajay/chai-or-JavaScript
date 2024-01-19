// while loop and do while loop 

//while loop is just like for loop but we define the variable outside the loop 
let index = 0

while (index <= 10) {
    //console.log(`value of index is ${index}`);
    index = index + 2 
}

// while loop using the Array 
let myarr = ["Ironman", "Superman", "Spiderman"]

let arr = 0
while (arr < myarr.length) {
    //console.log(`value is ${myarr[arr]}`)
    arr = arr + 1
}


//*****************do while loop*******************************
let score = 1
do {
    //console.log(`Your score is ${score}`)
    score++
} while (score <= 10);


//do while loop special if the condition is small and your value is big that time they print because in the do while loop first they do work and then they check the condition 
let scoree = 11
do {
    console.log(`Your score is ${score}`)
    scoree++
} while (scoree <= 10);
