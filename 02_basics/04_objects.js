const tinderUser = new Object()//this is the first method output is empty object
const tinderUser2 = {}


console.log(tinderUser)
console.log(tinderUser2)

// giving the value in the tinderUser2 object 
tinderUser2.id = "123abc"
tinderUser2.name = "Jay"
tinderUser2.isLoggedIn = false

console.log(tinderUser2)

// giving the 1 object in the another object 

const regularUser = {
    email: "Admin@gmail.com",
    fullname: {
        userfullname: {
            firstname: "Jay",
            lastname: "Rakholiya"
        }
    }
}

// how to access the value in upper scenario

// console.log(regularUser.fullname.userfullname.firstname)

// combine the objects 
const obj1 = {
    name: "Jay",
    age: 22
}
const obj2 = {
    name2: "Isha",
    age2: 22
}
const obj4 = {
    name3: "Disha",
    age3: 22
}

// 2 ways both the way is same only ad the empty object just before we assign object name  to the in this method 

const obj3 = Object.assign(obj1, obj2)
const obj333 = Object.assign({},obj1, obj2, obj4) // we use this because it should be gaurentee that first one will the target and other will be the source that in case we use more than 3 or 4 object and sombien them  

console.log(obj333)

// 3 simple way to combine the object 
const obj33 = {...obj1, ...obj2, ...obj3}
console.log("obj33",obj33)



// when we get value from the database that time how can we access and get 
const Users = [
    {
        id: 1,
        email: "j@gmail.com"
    },
    {
        id: 1,
        email: "j2@gmail.com"
    },
    {
        id: 1,
        email: "j3@gmail.com"
    }
]

Users[1].email //access the key of the object when it comes from database

console.log(tinderUser2)

// get the object keys or values
 console.log(Object.keys(tinderUser2))
 console.log(Object.values(tinderUser2))
 console.log(Object.entries(tinderUser2))//it gives the key and value in particualr different different arrays


 //ask the object this value is present on your object or not the result is in comes in the boolean 
 console.log(tinderUser2.hasOwnProperty('isLoggedIn'))