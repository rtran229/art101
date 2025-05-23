// Lab12.js - Conditionals
// Author: Julie Tran
// Date: May 22 2025

// Genshin Vision Function... hope this isn't against the rules
function visionSorter(str){
  let length = str.length;
  let mod = length % 7;

//Mod Results
   if (mod == 0){
    return "Anemo";
  } else if (mod == 1) {
    return "Geo";
  } else if (mod == 2) {
    return "Electro";
  } else if (mod == 3) { 
    return "Dendro";
  } else if (mod == 4) {
    return "Hydro";
  } else if (mod == 5) {
    return "Pyro";
  } else {
    return "Cryo";
  }
}

//Listener for sorting button
$("#button").click(function() {
  //Input value
  const name = $("#input").val();
  //Determines the vision
  const vision = visionSorter(name);

  //Cleans up previous results
  $("#output").find("#text").remove();
  //Append a new paragraph
  $("#output").append(
    '<div class = "text"><p>The Archons blessed you with a ' + vision + ' Vision!</p></div>'
  );
});