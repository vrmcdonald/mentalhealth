var mymap = L.map('mapid').setView([25.921, -3.615], 2);
L.tileLayer('https://api.mapbox.com/styles/v1/vrmcdonald/cjpj0nath40952smiirmmkz07/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoidnJtY2RvbmFsZCIsImEiOiJjanA0cnNoYTEwMG02M3dxc3ppaXlrZHB3In0.Ag2vI36B_m31ls99BSsofw', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18
}).addTo(mymap);

var places =
[{"country":"Colombia","prevalence":"17.80%","latitude":4.583333,"longitude":-74.066667},
{"country":"Mexico","prevalence":"12.20%","latitude":19.433333,"longitude":-99.133333},
{"country":"United States","prevalence":"26.40%","latitude":38.883333,"longitude":-77.016667},
{"country":"Belgium","prevalence":"12%","latitude":50.85,"longitude":4.35},
{"country":"France","prevalence":"18.40%","latitude":48.85,"longitude":2.35},
{"country":"Germany","prevalence":"9.10%","latitude":52.516667,"longitude":13.383333},
{"country":"Italy","prevalence":"8.20%","latitude":41.9,"longitude":12.483333},
{"country":"Netherlands","prevalence":"14.90%","latitude":52.366667,"longitude":4.883333},
{"country":"Spain","prevalence":"9.20%","latitude":40.433333,"longitude":-3.7},
{"country":"Ukraine","prevalence":"20.50%","latitude":50.45,"longitude":30.5},
{"country":"Lebanon","prevalence":"16.90%","latitude":33.9,"longitude":35.533333},
{"country":"Nigeria","prevalence":"4.70%","latitude":9.066667,"longitude":7.483333},
{"country":"Japan","prevalence":"8.80%","latitude":35.683333,"longitude":139.766667},
{"country":"Beijing","prevalence":"9.10%","latitude":39.916667,"longitude":116.383333},
{"country":"Shanghai","prevalence":"4.30%","latitude":31.228611,"longitude":121.474722}]

for ( let i = 0; i < places.length; i++ ) {
  L.marker( [ places[i].latitude, places[i].longitude ] )
  .bindPopup( '<h3>' + places[i].country + '</h3>' + '<p>' + places[i].prevalence + ' prevalence'+ '<p>')
  .addTo(mymap);
}
