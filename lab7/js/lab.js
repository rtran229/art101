// Lab07.js - Functions
// Author: Julie Tran
// Date: Nay 1 2025

//Variables


//Username Function              
function sortUserName(){
  userName = window.prompt("Enter your username.");
  console.log('Name: ', userName);
  nameArray = userName.split('');
  console.log('Name: ', nameArray);
  arraySort = nameArray.sort();
  console.log('Name: ', arraySort);
  sortedName = arraySort.join();
  console.log('Name: ', sortedName);
  return sortedName
}

// Output on HTML
document.writeln("Your name is: " + sortUserName() + '</br>');