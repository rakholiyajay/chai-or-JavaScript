class User{
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`USERNAME is ${this.username}`);
    }
}

class Teacher extends User{
    constructor(username, email, password){
        //super keyword is take directly access and refer they see which class is extend then then thwey  goes to thew user class then goes to the constructor and it automatically set the this keyword use behind the schene and set the user name and then we get the directly access of the upper  class username in our Teacher class (by the use of call an then we define a this we can use the super keyword it automatically do all the work)
        super(username)
        this.email = email;
        this.password = password;
    }    

        addCourse(){
            console.log(`A new course was added by ${this.username}`);
        }
    
}

const chai =new Teacher("Jay", "Jay@gmail.com", "123456")

chai.addCourse()
chai.logMe()


const masalaChai = new User("Isha")

masalaChai.logMe()

// if we ask the question the CHai is instance of techer 
console.log(chai instanceof Teacher);
console.log(chai instanceof User);