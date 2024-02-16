const user = {
  username: "Jay",
  loginCount: 8,
  signedIn: true,

  getUserDetails: function(){
    // console.log("Got user detail from Database")
    // console.log(`Username:- ${this.username}`)
    console.log(this)
  }
}

// console.log(user.username)
// console.log(user.getUserDetails())


function User(username, loginCount, isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn

    // return this
}

const userOne =new User("jay", 12, true)
const userTwo =new User("Isha", 13, true)
console.log(userOne)
console.log(userTwo)
