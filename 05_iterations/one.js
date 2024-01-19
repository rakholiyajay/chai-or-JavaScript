// iteration means loops 

//for loop 
for (let i = 0; i <= 10 ; i++) {
    const element = i;
    if (element == 5) {
        //console.log("5 is the best number")
    }
    //console.log(element)
}

//console.log(element)//it is not access outside the block scope


//Another example of the for loop 
for (let i = 1; i <= 10; i++) {
    //console.log(`Inner loop value: ${i}`)
     for (let j = 1; j <= 10; j++) {
        //console.log(`Outer loop value is ${j} and inner loop value is ${i}`)
        //console.log(`${i} * ${j} = ${i*j}`)//print the table 
     }    
}


//for loop using the Array
let myarr = ["Ironman", "superman", "spiderman"]

for (let index = 0; index < myarr.length; index++) {
    const element = myarr[index];
    //console.log(element)
}

//break and continue
//break :- break keyword is used to break the loop 
for (let i = 1; i <= 20; i++) {
    if (i == 14) {
        //console.log("14 is Dectected")
        break
    }
   //console.log(`value of i is ${i}`) 
}


//continue :- it is skip the condition and run it 
for (let i = 1; i <= 20; i++) {
    if (i == 14) {
        console.log("14 is Dectected")
        continue
    }
   console.log(`value of i is ${i}`) 
}