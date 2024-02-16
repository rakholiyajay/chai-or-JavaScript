//class in javascript

// when constructor calls whne the object is iniclize by the class like we use the new keyword that time the constructor call automatically 
class user {
   constructor(username, email, password){
    this.username = username;
    this.email = email;
    this.password = password;
   }

   encryptPassword(){
    return `${this.password}abc`
   }

   changeUserName(){
     return `${this.username.toUpperCase()}`
   }
}

const chai = new user("Jay", "Jay@gmail.com", "123")

console.log(chai.encryptPassword())
console.log(chai.changeUserName())

// firest we make a class and then we make a method 
//then we use that method in our new user and it working


//behind the schene 
//if we don't use an class then we make an simple function method 
function User(username, email, password){
    this.username = username;
    this.email = email;
    this.password = password;
}

User.prototype.encryptPassword = function(){
    return `${this.password}abcdef`
}

User.prototype.changeUserName = function(){
    return `${this.username.toUpperCase()}`
}

const chaii = new User("Isha", "isha@gmail.com", "123456")

console.log(chaii.encryptPassword())
console.log(chaii.changeUserName())
