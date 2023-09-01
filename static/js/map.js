/**
 * map.js uses leaflet to render the geojson file.
 * Hooks into a div with id "map" to render the map.
 * Leaflet is currently brought in from the headers in the layout in the extraheaders section.
 */

const bolivia_coordinates = L.latLng(-16.2902, -63.5887);
const zoom = 6;
const osm = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
  maxZoom: 19,
  attribution: '© OpenStreetMap'
});

const map = L.map('map', {
  center: bolivia_coordinates,
  zoom: zoom,
  layers: [osm]
});


fetch("https://raw.githubusercontent.com/DSSD-Madison/Nagoya/main/data/GeoDS4Bolivia.geojson")
    .then(response => response.json())
    .then(data => L.geoJson(data, {
        onEachFeature: function (feature, layer) {
            layer.bindPopup(' <b>Name: </b>' + feature.properties.shapeName + '\n <b> rank_imds: </b> ' + feature.properties.rank_imds)
        },
        style: {
            fillColor: 'red',
            fillOpacity: 0.2,
            color: '#c0c0c0',
        }
    })
    .addTo(map))
    .catch(e => console.error(e));