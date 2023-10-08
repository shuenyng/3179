var spec2 = "uv_index_map.json"; 
  vegaEmbed('#uv_index_map', spec2).then(function(result) {
    // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
  }).catch(console.error);

  var spec4 = "co_region.json"; 
  vegaEmbed('#co_region', spec4).then(function(result) {
    // Access the Vega view instance for co_region chart
  }).catch(console.error);

  var spec3 = "temp.json"; // Specify the URL or file path for your humidity chart specification
  vegaEmbed('#temp', spec3).then(function(result) {
    // Access the Vega view instance for the humidity chart
  }).catch(console.error);