// index.js - HTML & CSS Starter
// Author: Julie Tran
// Date: 4/14/2025

function send_Message(param1, param2) {
  return`
   <h1>Hello, World!<h1>
   <p>I've had Nick as a partner in a few other classes, and think we share the same great humor. I'm a bit confused but he has been helpful with his personal experience.</p>
  `;
}

function main() {
  console.log("Main function started.");
  const message = send_Message();
  document.getElementById("output").innerHTML =  message;
}

main();
  