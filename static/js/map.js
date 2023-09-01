/**
 * map.js uses leaflet to render the geojson file.
 * Hooks into a div with id "map" to render the map.
 * Leaflet is currently brought in from the headers in the layout in the extraheaders section.
 * 
 * Use attributes [lat, lng, zoom, dataPath] to customize map
 * Ex: <div id="map" lat="-16.2902" lng="-63.5887" zoom="6" dataPath="/data/GeoDS4Bolivia.geojson"></div>
 */

const mapElement = document.getElementById("map");

const lat = Number(mapElement.getAttribute("lat"));
const lng = Number(mapElement.getAttribute("lng"));
const zoom = parseInt(mapElement.getAttribute("zoom"));
const dataPath = mapElement.getAttribute("dataPath");

const map = L.map("map", {
  center: L.latLng(lat, lng),
  zoom: zoom,
  layers: [L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '© OpenStreetMap'
  })]
});


fetch(dataPath)
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