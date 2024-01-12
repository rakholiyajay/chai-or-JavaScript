const score = 200
console.log(score)

//we dedicately define that we only need a number on the value
const Balance = new Number(436)
console.log(Balance)

//Properties use in the numbers
console.log(Balance.toString())
console.log(Balance.toString().length)//we use all the properties of the string because we already converted into the string like (Added a aditional properties)
console.log(Balance.toFixed(2)) //to add the zeroafter the decimal


const otherNumber = 79.0789

console.log(otherNumber.toPrecision(4))//toPrecision we get the presize value from thew value or on the result

const hundreds = 1000000
console.log(hundreds.toLocaleString('en-IN'))//by this method we cant count or see the zeros by this method our visisbility is increases by drfault it is convert in the US standard but we also change in the Indian by given ('en-IN') in the counce by this it  should put caumes by  the indian numbers


//****************maths**********************************/


console.log(Math)
console.log(Math.abs(-4))//this method is use to conver the negative value into the positive value, but it didn't convert the positive value into thw negative

console.log(Math.round(4.89))//when we doesn't need a decimal value that time we use this method and  roundoff the value 

console.log(Math.ceil(4.2))//this method we can use when we need a top roundoff value . the Output is 5 because it choose a top value 

console.log(Math.floor(4.978))//this method we can use when we need a lowest roundoff value . when we write the 4.9 but the output is 4 because it choose the lowest or the floor means the bottom value

//when we find the min or max value from the array directly that time we use this method
console.log(Math.min(3, 6, 2, 8))//it choose the minimum value 
console.log(Math.max(3, 6, 2, 8))//it choose the maximum value 

//some time use math.random method to generate the random value . the value of Math.random value is comes in between 0 to 1
console.log(Math.random())
console.log((Math.random()*10) + 1)

// set min or max  on the random value 
const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min) 