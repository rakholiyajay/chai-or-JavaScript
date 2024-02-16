class User{
    constructor(username){
      this.username = username
    }

    logMe(){
        console.log(`USERNAME: ${this.username}`);
    }

    static createId(){
        return `123`
    }
}

//when we dont give the access alll the instance object of the User that time we use the static keyword before the method

const jay = new User("Jay")
// console.log(jay.createId());


class Teacher extends User {
    constructor(username, email){
        super(username)
        this.email = email
    }
}

const iphone = new Teacher("iphone", "i@phone.com")
console.log(iphone.createId());