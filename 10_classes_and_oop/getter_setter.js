// many situation we dont allow to access password and many other things that time we use to show our message or other we use custoomize code for that time we use the getter_setter 

// we apply thwe getters and setters upon any variable or properties easily 

class User {
    constructor(email, password){
       this.email = email;
       this.password = password
    }
   //for email
   get email(){
     return this._email.toUpperCase()
   }
   set email(value){
       this._email = value
   }

    //for password
    get password(){
      return `${this._password}jay`
    }
    set password(value){
        this._password = value
    }
}

const jay = new User("Jay@gmail.com", "123456")
console.log(jay.password);
console.log(jay.email);