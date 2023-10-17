var spec = "life_expectancy.vega.json"; 
  vegaEmbed('#life_expectancy', spec).then(function(result) {
    // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
  }).catch(console.error);

var spec1 = "infant_mortality.vega.json"; 
  vegaEmbed('#infant_mortality', spec1).then(function(result) {
    // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
  }).catch(console.error);

  var spec2 = "fertility_rate.vega.json"; 
  vegaEmbed('#fertility_rate', spec2).then(function(result) {
    // Access the Vega view instance for co_region chart
  }).catch(console.error);

  var spec3 = "maternal_mortality.vega.json"; // Specify the URL or file path for your humidity chart specification
  vegaEmbed('#maternal_mortality', spec3).then(function(result) {
    // Access the Vega view instance for the co_temp chart
  }).catch(console.error);

  var spec4 = "birth_fertility.vega.json"; // Specify the URL or file path for your humidity chart specification
  vegaEmbed('#birth_fertility', spec4).then(function(result) {
    // Access the Vega view instance for the heatmap chart
  }).catch(console.error);

  var spec5 = "infant_life.vega.json"; // Specify the URL or file path for your humidity chart specification
  vegaEmbed('#infant_life', spec5).then(function(result) {
    // Access the Vega view instance for the heatmap chart
  }).catch(console.error);

  var spec6 = "unemployment_rate.vega.json"; // Specify the URL or file path for your humidity chart specification
  vegaEmbed('#unemployment_rate', spec6).then(function(result) {
    // Access the Vega view instance for the humidity chart
  }).catch(console.error);

  var spec7 = "stacked.vega.json"; // Specify the URL or file path for your humidity chart specification
  vegaEmbed('#stacked', spec7).then(function(result) {
    // Access the Vega view instance for the heatmap chart
  }).catch(console.error);

  

  
