const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const newNums = myNumbers.map( (num) => num + 10) 
//console.log(newNums)


// by for each method 
 myNumbers.forEach( (num) => {
    // console.log(num + 10)
} )


// ***********Chaining Methods *********** 
// chaining means we use the 2 3 methios on one example means .map().filter 
//in chaining the first method value will be automatically pass to the second method 


const newNumbers = myNumbers
            .map( (num) => num * 10)
            .map( (num) => num + 1)
            .filter( (num) => num >= 40 )

console.log(newNumbers)