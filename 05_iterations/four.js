const myObj = {
    js: "Javascript",
    cpp: "C++",
    rb: "ruby",
    swift: "swift by apple"
}

// try to apply the forin loop in above object 

for (const key in myObj) {
    //console.log(`${key} :- ${myObj[key]}`)
}


//for in loop is applicable in the array or not 
const programming = ["Js", "rb", "py", "java", "cpp"]

for (const arr in programming) {
    //console.log(programming[arr])
}

//apply for in loop in map method 

const map = new Map()
//set the value in map
map.set('IN', "India")
map.set('USA', "United State of America")
map.set('UK', "United Kingdom")

// for (const key in map) {
//     console.log(key)
// } map is not an iteratable that why we don't apply the for in loop method in the map method 

