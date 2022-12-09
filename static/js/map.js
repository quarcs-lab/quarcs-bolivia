
function helloWorld() {
    console.log("hello");
}
function loadMap() {
    console.log('Hello')

    var map = L.map('map').setView([-16.2902, -63.5887], 6);

    var osm = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    });
    osm.addTo(map);

    // var myIcon = L.icon({
    //       iconUrl: 'https://github.com/iamtekson/Leaflet-Basic/blob/master/Basic/img/red_marker.png?raw=true',
    //       iconSize: [40, 40],
    //   });
    // var singleMarker = L.marker([-16, -63]);
    // var popup = singleMarker.bindPopup('This is Bolivia. ' + singleMarker.getLatLng()).openPopup()
    //   singleMarker.addTo(map);

    //need to find a better way to get this variable from a different file
    //instead of just creating the data new here
    fetch("https://raw.githubusercontent.com/DSSD-Madison/Nagoya/main/data/GeoDS4Bolivia.geojson")
        .then(response => response.json())
        .then(data => L.geoJson(data, {
            onEachFeature: function (feature, layer) {
                layer.bindPopup(' <b>Name: </b>' + feature.properties.shapeName + '\n <b> rank_imds: </b> ' + feature.properties.rank_imds)
                //layer.fillColor(feature.properties.rank_imds)
                //layer.bindPopup(' <b>Name: </b>' + feature.properties.rank_imds)
            },
            style: {
                fillColor: 'red',
                fillOpacity: 0.2,
                color: '#c0c0c0',
            }
        }).addTo(map))
        // .then(data => { document.querySelector('#header').innerHTML = JSON.stringify(data)})
        .catch(e => console.error(e));
}