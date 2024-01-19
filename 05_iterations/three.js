// This all are the array specific loop 

// for of loop (in this loop we cannot give an increment  value means i++)

const arr = [1, 2, 3, 4, 5]

for (const num of arr) {
    //console.log(num)
}

// for of loop apply on the strings 
const greetings = "Hello World!"

for (const greet of greetings) {
    //console.log(`Each character is ${greet}`)
}


//Maps
// basic of set the value in the map 
// it ignore the duplicate key value pair when we inser the india repeat that time it does not print india twise it print the india key value pair only one time and also set the value unique it doesn't change the key value pair orders

const map = new Map()
//set the value in map
map.set('IN', "India")
map.set('USA', "United State of America")
map.set('UK', "United Kingdom")

//console.log(map)

// apply the forof loop in this map method
for (const [key, value] of map) {
    console.log(key , ":-", value )
}


// for of loop apply in object (No for of loop is not applicble in the object they have their other loop formation to loop on the object)