//Immediately Invoked Function Expression(IIFE)

// IIFE = iife means that when we write any function is immediately invoked that function 

function chai(){
    console.log("Database is connected")
}
 chai();

//IIFE example: many tymes we are facing the problem in front of the global scope pollution that why we use the iife . And the syntex is simple (function)()

(function chai2(){
    //this iife is the named IIFE because this iife has name
    console.log(`Database 2 is connected`)
})();//we apply the semicolon because is invoked but they don't know where they stop the context that so we apply semicolon to end the invoking

//iife with the arrow function 
(() => {
    console.log(`Database 3 is connected`)
})();

//pass the variable in the iife
((name) => {
   console.log(`${name} your Database 3 is connected `)
})("Jay");