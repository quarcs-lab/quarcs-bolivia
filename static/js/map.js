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

const getColor = d => {
  return d > 1000 ? '#800026' :
         d > 500  ? '#BD0026' :
         d > 200  ? '#E31A1C' :
         d > 100  ? '#FC4E2A' :
         d > 50   ? '#FD8D3C' :
         d > 20   ? '#FEB24C' :
         d > 10   ? '#FED976' :
                    '#FFEDA0';
};

const map = L.map("map", {
  center: L.latLng(lat, lng),
  zoom: zoom,
  layers: [L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '© OpenStreetMap'
  })]
});

const info = (() => {
  const control = L.control();
  const div = L.DomUtil.create('div', 'info');

  control.onAdd = () => {
    control.update();
    return div;
  };
  
  control.update = (props) => {
    console.table(props);
    div.innerHTML = '<h4>View information</h4>' +  (props ?
        '<b>' + props.shapeName + '</b><br />' + props.density + ' people / mi<sup>2</sup>'
        : 'Hover over a state');
  };

  control.addTo(map);

  return control;
})();

const legend = (() => {
  const control = L.control({position: 'bottomright'});

  control.onAdd = () => {
      const div = L.DomUtil.create('div', 'info legend');
      const grades = [0, 10, 20, 50, 100, 200, 500, 1000];
  
      // loop through our density intervals and generate a label with a colored square for each interval
      for (var i = 0; i < grades.length; i++) {
          div.innerHTML +=
              '<i style="background:' + getColor(grades[i] + 1) + '"></i> ' +
              grades[i] + (grades[i + 1] ? '&ndash;' + grades[i + 1] + '<br>' : '+');
      }
  
      return div;
  };
  
  control.addTo(map);
})();

fetch(dataPath)
  .then(response => response.json())
  .then(data => {
    let geoJson;

    const style = feature => {
        return {
            fillColor: getColor(feature.properties.density),
            weight: 2,
            opacity: 1,
            color: 'white',
            dashArray: '3',
            fillOpacity: 0.7
        };
    }

    const onEachFeature = (feature, layer) => {
      const resetHighlight = e => {
        geoJson.resetStyle(e.target);
        info.update();
      }
    
      const highlightFeature = e => {
        var layer = e.target;
    
        layer.setStyle({
            weight: 5,
            color: '#666',
            dashArray: '',
            fillOpacity: 0.7
        });
    
        layer.bringToFront();
        info.update(layer.feature.properties);
      }
    
      const zoomToFeature = e => {
        map.fitBounds(e.target.getBounds());
      }
    
      layer.on({
          mouseover: highlightFeature,
          mouseout: resetHighlight,
          click: zoomToFeature
      });
    }
    
    geoJson = L.geoJson(data, {
      style: style,
      onEachFeature: onEachFeature
    }).addTo(map);
  });
