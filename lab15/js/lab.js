// Lab15.js - AJAX
// Author: Julie Tran
// Date: June 2 2025

//Doc ready
$(document).ready(function () {
      $("#activate").click(function () {
        $.ajax({
          url: "https://pokeapi.co/api/v2/pokedex/2/",
          type: "GET",
          dataType: "json",

          success: function (data) {
            console.log(data); 
            // View full API data
            
            // List 10 pokemons
            if (data && data.pokemon_entries) {
              let outputHTML = "<ol>";
              for (let i = 0; i < 10; i++) {
                outputHTML += "<li>" + data.pokemon_entries[i].pokemon_species.name + "</li>";
              }
              outputHTML += "</ol>";
              $("#output").html(outputHTML);
            } else {
              $("#output").html("<p class='error'>Unexpected data format.</p>");
            }
          },

          error: function (jqXHR, textStatus, errorThrown) {
            console.log("Error:", textStatus, errorThrown);
            $("#output").append("<p class='error'>Looks like something is wrong.</p>");
          }
        });
      });
    });