/* jshint devel:true */
console.log('Look at app/js/main.js');

var ourRequest = new XMLHttpRequest();
ourRequest.open('GET', 'data/result.json');
console.log(ourRequest);
ourRequest.onload = function () {
  if (ourRequest.status >= 200 && ourRequest.status < 400) {
    // retrieved data
    var data = JSON.parse(ourRequest.responseText);
    //console.log(data);
    createHTML(data);
  } else {
    console.log("an error.");
  }
};

ourRequest.onerror = function () {
  console.log("Connection error");
};

ourRequest.send();



function createHTML(flightResultData) {
	//console.log(flightResultData);
  var rawTemplate = document.getElementById('resultsTemplate').innerHTML;
  var compiledTemplate = Handlebars.compile(rawTemplate);
  var ourGeneratedHTML = compiledTemplate(flightResultData);

  var petsContainer = document.getElementById('flightResult');
  petsContainer.innerHTML = ourGeneratedHTML;
};





