//reduce method
// acc = accumulator
// currVal = currentValue
// when the scope end then we give where the accumulator start with  

const myNums = [1, 2, 3]


const myTotal = myNums.reduce( function (acc, currVal) {
    console.log(`acc:- ${acc} and the currentValue:- ${currVal}`)
    return acc + currVal
},0)

console.log(myTotal)


//by arrow function
const myTotals = myNums.reduce((acc, currVal) => 
(acc + currVal),0)
console.log(myTotals)


// another example of reduce method

const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "Data science course",
        price: 12999
    },
]

const Totalshop = shoppingCart.reduce((acc, item) => 
        acc + item.price
,0)
console.log(Totalshop)