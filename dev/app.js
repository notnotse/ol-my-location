import 'ol/ol.css'
import Map from 'ol/Map'
import TileLayer from 'ol/layer/Tile'
import OSM from 'ol/source/OSM'
import View from 'ol/View'
import OLMyLocation from '../src/index'

document.addEventListener('DOMContentLoaded', () => {
  var map = new Map({
    layers: [
      new TileLayer({
        source: new OSM()
      })
    ],
    target: 'map',
    view: new View({
      center: [100, 0],
      zoom: 2
    })
  })

  const location = OLMyLocation(map, {
    onChange: (e) => {
      console.log('change', e)
    }
  })

  document.getElementById('toggle').addEventListener('click', () => {
    location.toggle()
  })

  location.start()
})
