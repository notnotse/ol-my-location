import { Fill, Stroke, Style } from 'ol/style'
import Geolocation from 'ol/Geolocation'
import utils from './utils'
import controls from './controls'

const OLShowLocation = (map, options) => {
  const defaults = {
    trackingOptions: {
      enableHighAccuracy: true
    },
    size: 20,
    color: 'rgb(241, 22, 210)',
    accuracyLayerStyle: new Style({
      fill: new Fill({
        color: 'rgba(241, 22, 210, 0.05)'
      }),
      stroke: new Stroke({
        color: 'rgba(241, 22, 210, 0.5)'
      })
    }),
    onChange: null
  }

  const config = Object.assign({}, defaults, options)

  const state = {
    map: map,
    config: config,
    geolocation: new Geolocation({
      projection: map.getView().getProjection(),
      trackingOptions: config.trackingOptions
    }),
    overlay: utils.createOverlay(),
    accuracyLayer: utils.createAccuracyLayer(config.accuracyLayerStyle)
  }

  return Object.assign(
    {},
    controls(state)
  )
}

export default OLShowLocation
