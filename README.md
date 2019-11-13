# ol-my-location

Uses [OpenLayers](http://openlayers.org) geolocation API to display current location and heading.

![screenshot](https://cloud.githubusercontent.com/assets/5778239/13088053/fd539ae0-d4ea-11e5-8fed-7c4d80aa9aa0.png)

## Installation

`npm install notnotse/ol-my-location`

## Example usage

```javascript
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

  location.start()
})
```

## API

### .start()

Activates geolocation tracking and centers the map on the first location change.

### .stop()

Stop geolocation tracking and removes marker overlay.

### .toggle()

Toggles geolocation tracking.

## Options

| Name               | Type                        | Default                                   | Description                                                                             |
| ------------------ | --------------------------- | ----------------------------------------- | --------------------------------------------------------------------------------------- |
| trackingOptions    | <code>object</code>         | <code>{ enableHighAccuracy: true }</code> | Tracking options. See http://www.w3.org/TR/geolocation-API/#position_options_interface. |
| size               | <code>number</code>         | <code>20</code>                           | Size of the location marker in pixels.                                                  |
| color              | <code>rgb</code>            | <code>rgb(241, 22, 210)</code>            | Color for the location marker.                                                          |
| accuracyLayerStyle | <code>ol.style.Style</code> |                                           | ol style object.                                                                       |
| onChange           | <code>function</code>       | <code>null</code>                         | Fires on location change.                                                               |

## Development

* `npm start` - Spins up webpack-dev-server server to serve your app at `localhost:9000`.
* `npm run deploy`- Runs linter, tests, and then, on success, compiles your application to disk.

## Quick Start using Parcel web application bundler

[Parcel web application bundler](https://parceljs.org)

* `npm install -g parcel-bundler`
* `npm init -y`
* `npm install ol`
* `npm install ol-my-location`
* Create an index.html file

```html
<html>
<body>
  <div id="map" />
  <script src="./index.js"></script>
</body>
</html>
```

* Create an index.js file

```javascript
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

  location.start()
})
```

* `parcel index.html --https`
