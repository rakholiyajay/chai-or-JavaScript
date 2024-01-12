//array

// in the array the Element will be any data types string also number . The value means Elements will be any Datatypes
const array = [0, 1, 2, 3, 4, 5]

console.log(array[0])//access the 0th element from the above array

//Declaring the array methods
const myheros = ["shaktiman", "Ironman"] //use string or other datatypes
const myarr2 = new Array (1, 2, 3, 4, 5) //use () it automatically converted in the square bracet


//Array methods
const newarray = [1,2,3,4,5]
newarray.push(6, 7)//it add the element on the last position of the array
console.log(newarray)

newarray.pop()//it remove the last element from the array we cannot give any value
console.log(newarray)

newarray.unshift(78)//it add or insert the particular element on the first
console.log(newarray)

newarray.shift()//it remove the first element from the Array
console.log(newarray)


//In the Array some method is like questionary array we only ask question to them it reply on true or false

console.log(newarray.includes(8))//we question them the particular element  is present on the array or not by using this method 

console.log(newarray.indexOf(4))// we simply ask the index value of the given particular number if the given number is present on that array that return their index number if the given number is not present on the array that times its return -1
//ex:- 
    console.log(newarray.indexOf(14))


const newarray22 = newarray.join()//join method is bind our array and also converted into the string
console.log(newarray)
console.log(newarray22)
console.log(typeof newarray22)//simple the array converted into the string and also bind


//slice & splice method
console.log("A", newarray)

const myn1 = newarray.slice(1,3)//slice method is use mention the start and end point and it cannot modified original Array
console.log(myn1)
console.log("slice", newarray)


const myn2 = newarray.splice(1,3)//splice method is use mention the start and end point and its modified original Array
console.log("splice", newarray)
console.log(myn2)
