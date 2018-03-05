function createCSVContent () {
  var fullName = $(".full-name").text();
  var title = $(".title").text();
  var location = $(".locality").text();
  var industry = $(".industry").text();

  var data = [["Full name", "Title", "Location", "Industry"], [fullName, title, location, industry]];
  var csvContent = "data:text/csv;charset=utf-8,";
  data.forEach(function(infoArray, index){
    dataString = infoArray.join(",");
    csvContent += index < data.length ? dataString+ "\n" : dataString;
  });

  return csvContent;
}

function addCSVbutton () {
  var csvContent = createCSVContent();
  var encodedUri = encodeURI(csvContent);
  var link = document.createElement("a");
  link.className = "button-primary";
  link.textContent = "Download CSV";
  link.setAttribute("href", encodedUri);
  link.setAttribute("download", "my_data.csv");

  // check if there is a button-group-primary
  if ( $(".button-group-primary").length ) {
    $(".button-group-primary:first-child").append(link);
    console.log("button-group-primary exists");
  } else {
    // add the link to the button-group-secondary
    $(".button-primary[data-action-name='add-to-network']").after(link);
    console.log("button-group-secondary exists");
  }

}

$(document).ready(addCSVbutton);
