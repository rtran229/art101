// Lab15.js - AJAX
// Author: Julie Tran
// Date: June 2 2025

//Doc ready
$(document).ready(function() {
  //Clicking button
  $("#activate").click(function() {
    //API call
    $.ajax({
      url: "https://pokeapi.co/api/v2/pokedex/2/",
      type: "GET",
      dataType: "json",

      success: function(data) {
        console.log(data);
        //Display Pokedex
        $("#output").html("<p>" + data.value + "</p>");
      },

      error: function(jqXHR, textStatus, errorThrown) {
        console.log("Error:", textStatus, errorThrown);
        $("#output").append("<p class='error'> Looks like something is wrong.</p>");
      }
    });
  });
});