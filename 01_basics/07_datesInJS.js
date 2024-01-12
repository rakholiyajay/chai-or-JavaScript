//Dates

let myDate = new Date()
//console.log(myDate)
//console.log(myDate.toString())//date sonverted into the string

//console.log(myDate.toDateString())
//console.log(myDate.toLocaleString())

//console.log(typeof myDate)//when we check the typeof of the date that time the output is the object 


//when i try to declare the specific Date
const createdDate = new Date(2023, 6, 23)
//console.log(createdDate.toDateString())

//2nd method to declare the date
const createdDate2 = new Date(2023, 6, 23, 6, 47)
//console.log(createdDate2.toLocaleString())

//3rd format to declare the date
const createdDate3 = new Date("2023-05-14")// we use (YY_MM_DD) method and the month start with the 01
//console.log(createdDate3.toLocaleString())

const createdDate4 = new Date("05-14-2023")// we also use the (mm-DD-YY)
//console.log(createdDate4.toLocaleString())


// the time stamp is also available on the Date .This thing is usefull when we created the quiz or the poll which person will be first press or give the answer
const timeStamp = Date.now()
//console.log(timeStamp) 
//console.log(createdDate4.getTime()) //then compare both

//converted into the seconds
//console.log(Math.floor(Date.now()/1000))

let newDate = new Date()
console.log(newDate)
console.log(newDate.getMonth()) //fetch partucular day or we need anything else we get getmonth

//when we costimaze the toLocalString
newDate.toLocaleString('default', {
    weekday: "short",
})
