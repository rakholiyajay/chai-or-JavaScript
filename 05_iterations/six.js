// for Each loop  doesn't return any type of values 
//if we try to return the value by storing the for each in the variable

/*
const coading = ["Js", "ruby", "java", "python", "cpp"]

const value = coading.forEach( (item) => {
    console.log(item)
    return item
} )

console.log("value:-", value)//for Each loop doesn't return the values 
*/

// *******Filter operation *********
// filter operation is just like an for each it also take the callback function but they retun value 

const myNum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// arrow function methods 
//1:- when we use this method that time we use the return keyword
//  const newNums = myNum.filter( (num) => {
//     return num > 4
//  })
//2:-
// const newNums = myNum.filter( (num) => (num > 4) );
//3:-
//const newNums = myNum.filter( (num) => num > 4 )
// console.log(newNums)


// same above example with the for each 
const myNumber = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const MyNewNumber = []

myNumber.forEach( (num) => {
    if (num > 4) {
        MyNewNumber.push(num)
    }
} )
console.log(MyNewNumber)


const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

  //const userBooks = books.filter( (bk) => bk.genre === 'History' )
//   const userBooks = books.filter( (bk) => bk.publish > 2000 )
 const userBooks = books.filter( (bk) => {
     return bk.publish >= 1995 && bk.genre === "History"
 } )

  console.log(userBooks)