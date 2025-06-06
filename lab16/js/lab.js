// Lab16.js - AJAX
// Author: Julie Tran
// Date: June 5 2025

// Getting doc ready
$(document).ready(function() {
  // Button label
  $("#activate").text("Load XKCD Comic");

  // Button click
  $("#activate").click(function() {
    $.ajax({
      url: "https://cors-anywhere.herokuapp.com/https://xkcd.com/info.0.json",
      type: "GET",
      dataType: "JSON",
      success: function(comicObj) {
        // Clear content
        $("#output").empty();

        // Comic section
        var section = $("<section></section>");
        // Make title
        var title = $("<h2></h2>").text(comicObj.title);

        // Create img
        var image = $("<img>")
          .attr("src", comicObj.img)  // <-- corrected "src"
          .attr("alt", comicObj.alt)
          .attr("title", comicObj.alt);

        // Append
        section.append(image);
        section.append(title);

        // Append section (output)
        $("#output").append(section);  
      },

      error: function(jqXHR, textStatus, errorThrown) {
        console.log("Error", textStatus, errorThrown);
        $("#output").text("Failed to load content.");
      }
    });
  });
});
