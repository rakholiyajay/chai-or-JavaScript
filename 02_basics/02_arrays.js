const marvel_heros = ["Ironman", "Thor", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

marvel_heros.push(dc_heros)//push method is push the whole array on that main array it push this array on the existing array
 console.log(marvel_heros)
console.log(marvel_heros[3])
 console.log(marvel_heros[3][1])

const concat = marvel_heros.concat(dc_heros)//concat method is use to combine the 2nd array on 1 but it doesn't change on the existing array it return a new array
 console.log(concat)

 //spread operator

 const all_new_arr = [...marvel_heros, ...dc_heros]//this spread operator method is use because we give the value limit less 
 console.log(all_new_arr)

 const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]//in this type of situation we use flat method it convert this array into array into array convert into a single array
 
 const real_another_array = another_array.flat(Infinity)//we also give depth we go to (2) depth and also give a (Infinity) depth means it solve array into array and into the another array
 console.log(real_another_array)


 //make an any other datatypes to the array

 console.log(Array.isArray("RakholiyaJay"))//ask it is an array it gives false because it is not an array but then we convert is into the array
 console.log(Array.from("RakholiyaJay"))//.form convert in into the array we given anything like objects, strings also

 //ex1:-
 console.log(Array.from({name : "Jay"}))//it is an interesting case when this didn't convert anything into array that time they only gives an empty array

 //ex2:- making an array from the variable or any types
  let score1 = 100
  let score2 = 200
  let score3 = 300
  console.log(Array.of(score1, score2, score3))