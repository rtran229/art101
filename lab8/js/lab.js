// Lab07.js - Anon Functions and Callbacks
// Author: Julie Tran
// Date: May 8 2025

//Variables


//Function              
function isEven(x){
  return (x % 2 ==0);
};

//The rest of them
console.log("Is 1 even? ", isEven(1));
console.log("Is 2 even? ", isEven(2));

array = [100, 200, 303, 412, 567, 609, 744];
console.log("My array:", array);

var results = array.map(isEven);
console.log("Test evenness of array: ", results);

var results = array.map(function(x){
  return x-1000
})
console.log("Array minus 1,000: ", results);
