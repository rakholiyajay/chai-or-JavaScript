//History:- when the promise is not available in the Direct in the javascript that time the asyncronize promize is ruined by the use of Q or BlurBird That both the library gives the access or use the primises now then node gave the directly support then we use the promises directly 

const promiseOne = new Promise(function(resolve, reject){
    //Do an Async Task
    //DB calls, cryptography, network 
    setTimeout(function(){
        console.log('Async Task is Complete')
        resolve()
    },1000)
})

promiseOne.then(function(){
    console.log("Promised consuumed")
})

//without store the  promise in the any variable

new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log('Async Task 2')
        resolve()
    }, 1000)
}).then(function(){
    console.log('Async Task 2 is Completed')
})


// passed the parameter 

const promiseThree = new Promise(function(resolve, reject){
   setTimeout(function(){
    resolve({username: "Rakholiya Jay", email: "jay@gmail.com"})
   })
})

promiseThree.then(function(user){
    console.log(user)
})

// 4th promise example (Promise chaining : means we use the .then and . catch so many times in the one promise )
const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        if (!error) {
            resolve({username: 'Jay', password: '1234'})
        }else{
            reject('ERROR: Something Went Wrong')
        }
    })
})
//in the 1st .then we use return to print an username is in user then we return them then then return value is available on the 2nd .then so we can directly access to that value
promiseFour.then((user) => {
    console.log(user)
    return user.username
}).then((username) => {
    console.log(username)
}).catch(function(error){
    console.log(error)
}).finally(() => console.log("The promise is either resolved or rejected"))

//we use the finally that is means it is default we said that when the promise was fullfilled by resolve or reject that time the finally will automatically show 


// 5th promise example use the async await in the promise

const promiseFive = new Promise(function(resolve, reject){
    setTimeout(function() {
        let error = true
        if (!error) {
            resolve({username: 'JavaScript', password: '123'})
        }else{
            reject('ERROR: Js went Wrong')
        }
    }, 1000);
})

async function consumePromiseFive(){
    try {
        const responce = await promiseFive
       console.log(responce)
    } catch (error) {
        console.log(error)
    }
}

consumePromiseFive()

/*
async function getAllUsers(){
   try {
    const responce =  await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await responce.json()
    console.log(data)
   } catch (error) {
     console.log("ERROR :", error)
   }
}

getAllUsers()
*/
//same upper method of async await with the use of .then .catch method

fetch('https://jsonplaceholder.typicode.com/users')
.then((responce) => {
    return responce.json()
})
.then((data) => {
   console.log(data)
})
.catch((error) => console.log(error))