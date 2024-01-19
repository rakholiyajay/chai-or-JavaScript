//for each loop 

//**************basic variation************** 

const coading = ["Js", "ruby", "java", "python", "cpp"]

//call back fn means they doesn't have an function name 
coading.forEach( function (language) {
    //console.log(language)
})
//by arrow function
coading.forEach((language) => {
   //console.log("language", language)
} )
 
//***************another variation********************** 
// pass the function on the forEach loop 
// pass a function name as an parameter in the for Each loop 

function printMe(item){
    //console.log(item)
}

coading.forEach(printMe)


//*********another variation*********
coading.forEach( (item, index, arr) => {
    //console.log(item, index, arr)
} )


//*********another secionary*********
//[{}, {}, {}]

const myCoading = [
    {
        languagename: "javascript",
        languageFileName: "js"
    },
    {
        languagename: "java",
        languageFileName: "java"
    },
    {
        languagename: "python",
        languageFileName: "py"
    },
]

myCoading.forEach( (item) => {
     console.log(item.languagename)
} )