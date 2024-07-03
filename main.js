//1) function decloration:

// alert } = require("console");

// function myName(firstName) {
//   alert("salom" + firstName + " ishla qanaqa ");
// }

// myName(" jovo", "karom");

//2) function Exprission:

// const myName3 = (firstName) => {
//   function myName(firstName) {
//     alert("salom" + firstName + " ishla qanaqa ");
//   }
// };

let raqam1 = +prompt("birinchi sonni kiriting!");
let raqam2 = +prompt("ikkinchi sonni kiriting!");

function twoNum(num1, num2) {
  if (num1 > num2) {
    alert("kiritilgan sonlar ichida" + num1 + "soni katta");
  } else if (num1 < num2) {
    alert("kiritilgan sonlar ichida" + num2 + "soni katta");
  } else if (num1 === num2) {
    alert("kiritilgan sonlar barobar");
  }
}

twoNum(raqam1, raqam2);