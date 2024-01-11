// console.log(2 > 1)
// console.log(2 >= 1)
// console.log(2 < 1)
// console.log(2 == 1)
// console.log(2 != 1)


// we dont compare same Datatypes(types script is doesn't allowed the comparision between 2 different types)
// console.log("2" > 1)
// console.log("02" > 1)


console.log(null > 0)//null is not greater then 0 because null is an empty value
console.log(null == 0)
console.log(null >= 0)

//Notes:The reason is that an equality check == and comparision > < >= <= work differently
//Comparision convert null to the number,treating it as 0 That's why (3)null >= 0 is true (1) null > is false 


//in the undefined with the comparision it always gives false result 
// console.log(undefined == 0)
// console.log(undefined > 0)
// console.log(undefined < 0)
// console.log(undefined >= 0)
// console.log(undefined <= 0)


// difference between == & ===
console.log("2" == 2)//it gives true because it "2"convert into the number 
console.log("2" === 2)//It gives false it not only check the value it also check the datatypes of the value 