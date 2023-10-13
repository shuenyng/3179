var spec1 = "air_quality_map.json"; 
  vegaEmbed('#air_quality_map', spec2).then(function(result) {
    // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
  }).catch(console.error);

var spec2 = "uv_index_map.json"; 
  vegaEmbed('#uv_index_map', spec2).then(function(result) {
    // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
  }).catch(console.error);

  var spec3 = "co_region.json"; 
  vegaEmbed('#co_region', spec3).then(function(result) {
    // Access the Vega view instance for co_region chart
  }).catch(console.error);

  var spec4 = "humidity.vega.json"; // Specify the URL or file path for your humidity chart specification
  vegaEmbed('#humidity', spec4).then(function(result) {
    // Access the Vega view instance for the humidity chart
  }).catch(console.error);

  var spec5 = "co_temp.vega.json"; // Specify the URL or file path for your humidity chart specification
  vegaEmbed('#co_temp', spec5).then(function(result) {
    // Access the Vega view instance for the co_temp chart
  }).catch(console.error);

  var spec6 = "heatmap.vega.json"; // Specify the URL or file path for your humidity chart specification
  vegaEmbed('#heatmap', spec6).then(function(result) {
    // Access the Vega view instance for the heatmap chart
  }).catch(console.error);



  
