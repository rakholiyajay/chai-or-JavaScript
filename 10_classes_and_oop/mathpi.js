const descriptor = Object.getOwnPropertyDescriptor(Math, "PI")
// console.log(descriptor);

// console.log(Math.PI);
// Math.PI = 5
// console.log(Math.PI);


const chai = {
    name: "chai",
    price: 250,
    isAvailable: true,

    orderChai: function(){
        console.log("code phat gaya");
    }
}

console.log(Object.getOwnPropertyDescriptor(chai, "name"));

// decrypt the properties means we can't change anything properties means like  we not change the properties of PI 

Object.defineProperty(chai, "name", {
    writable: false,
    enumerable: false,
    configurable: false
})
console.log(Object.getOwnPropertyDescriptor(chai, "name"));

// we test the enumerable is false or not or we can change or not by doing the loop upon chai object \
// for (let [key, value] of Object.entries(chai)) {
//     if (typeof value !== 'function') {
//         console.log(`${key} : ${value}`);
//     }
// }