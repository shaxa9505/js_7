"use strict";

const age = +prompt("How old are you?", "");

// if(age > 18) {
//   console.log("Welcome");
// } else {
//   console.log("No entry");
// }

// if(age > 25) {
//   document.write("Ujas kino ko'rishingiz mumkin");
// } else if(age > 18 && age < 25) {
//   document.write("Bayvik kino ko'rishingiz mumkin")
// } else {
//   document.write("Multipikatsion kino ko'rishingiz mumkin")
// }

// Ternory operator
age > 25 ? document.write("Ujas kino ko'rishingiz mumkin") : document.write("Multipikatsion kino ko'rishingiz mumkin");



// Switch case
const color = "red";

switch(color) {
  case "red" :
    console.log("Stop !!!");
    break
  case "green" :
    console.log("Goo ");
    break
  case "yellow" :
    console.log("Slowly");
    break;
  default: 
    console.log("Traffic jam");
    break
}