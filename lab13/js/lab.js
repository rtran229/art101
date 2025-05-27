// Lab13.js - Loops
// Author: Julie Tran
// Date: May 26 2025

//Variables
let STR = "";

//Function
for (let i = 1; i <= 200; i++){
  let str = "";

//Calcs
  if ( i % 3 == 0) str += "Meow";
  if ( i % 5 == 0) str += "Woof";
  if ( i % 7 == 0) str += "Nyan";

//Formatting
  if (str == "") {
    str = i;
  } else {
    str = i + " " + str + "!";
  }

//Make Output
  STR += str + "<br>";
}

//Output
$("#output").html(oneLongString);