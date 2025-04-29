// Lab06.js - Arrays and Objects
// Author: Julie Tran
// Date: April 28 2025

//Variables
var myTransport = [" walk", " bus", " car"];

//Car               
var myMainRide = {
    make: "Toyota",
    model: "C-HR",
    color: "white",
    year: "2022",
    //Age function
    age: function() {
      return 2025 - this.year;
    }
};

// Output on HTML
document.writeln("Types of transportation I use: ", myTransport, "</br>");
//meow
document.writeln("My main ride: <pre>",
  JSON.stringify(myMainRide, null, '\t'), "</pre>");