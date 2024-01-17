//Switch Case

//Switch Case basic syntex
// switch (key) {
//     case value:
        
//         break;

//     default:
//         break;
// }


// example of switch case 
//we use break in the swithc case because if the break is not present that time it should be completely executely expext the default case so that why we use the break keyword
const month = 3

switch (month) {
    case 1:
        console.log("January")
        break;
    case 2:
        console.log("Febuary")
        break;
    case 3:
        console.log("March")
        break;
    case 4:
        console.log("April")
        break;

    default:
        console.log("Defaule case will be executed")
        break;
}
