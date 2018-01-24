

import React from "react"
import { compose, withProps } from "recompose"
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"





const MyMapComponent = compose(
  withProps({
    googleMapURL: "https://maps.googleapis.com/maps/api/js?key=AIzaSyAlQxc9ffXAI1u7GffGKDFSeo6b6HOIDPE&v=3.exp&libraries=geometry,drawing,places",
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `400px` }} />,
    mapElement: <div style={{ height: `100%` }} />,
  }),
  withScriptjs,
  withGoogleMap
)((props) =>
  <GoogleMap
    defaultZoom={8}
    defaultCenter={{ lat: 28.5383, lng: -81.3792 }}
  >
    {props.isMarkerShown && <Marker position={{ lat: 28.5383, lng: -81.3792 }} onClick={props.onMarkerClick} />}
    {props.isMarkerShown && <Marker position={{ lat: 27.9506, lng: -82.4572 }} onClick={props.onMarkerClick} />}
    {props.isMarkerShown && <Marker position={{ lat: 33.520661, lng: -86.80249 }} onClick={props.onMarkerClick} />}
    {props.isMarkerShown && <Marker position={{ lat: 33.448377, lng: -112.074037 }} onClick={props.onMarkerClick} />}
    {props.isMarkerShown && <Marker position={{ lat: 34.052234, lng: -118.243685 }} onClick={props.onMarkerClick} />}
    {props.isMarkerShown && <Marker position={{ lat: 33.830296, lng: -116.545292 }} onClick={props.onMarkerClick} />}
    {props.isMarkerShown && <Marker position={{ lat: 38.911633, lng: -123.011048 }} onClick={props.onMarkerClick} />}
    {props.isMarkerShown && <Marker position={{ lat: 38.581572, lng: -121.4944 }} onClick={props.onMarkerClick} />}
    {props.isMarkerShown && <Marker position={{ lat: 38.907192, lng: -77.036871 }} onClick={props.onMarkerClick} />}
    {props.isMarkerShown && <Marker position={{ lat: 30.332184, lng: -81.655651 }} onClick={props.onMarkerClick} />}
    {props.isMarkerShown && <Marker position={{ lat: 38.581572, lng: -121.4944 }} onClick={props.onMarkerClick} />}
    {props.isMarkerShown && <Marker position={{ lat: 26.122439, lng: -80.137317 }} onClick={props.onMarkerClick} />}
    {props.isMarkerShown && <Marker position={{ lat: 32.715738, lng: -117.161084 }} onClick={props.onMarkerClick} />}
    {props.isMarkerShown && <Marker position={{ lat: 41.878114, lng: -87.629798 }} onClick={props.onMarkerClick} />}
    {props.isMarkerShown && <Marker position={{ lat: 38.252665, lng: -85.758456 }} onClick={props.onMarkerClick} />}
    {props.isMarkerShown && <Marker position={{ lat: 29.951066, lng: 29.951066 }} onClick={props.onMarkerClick} />}
    {props.isMarkerShown && <Marker position={{ lat: 42.360083, lng: -71.05888 }} onClick={props.onMarkerClick} />}
    {props.isMarkerShown && <Marker position={{ lat: 36.169941, lng: -115.13983 }} onClick={props.onMarkerClick} />}
    {props.isMarkerShown && <Marker position={{ lat: 39.529633, lng: -119.813803 }} onClick={props.onMarkerClick} />}
    {props.isMarkerShown && <Marker position={{ lat: 40.712775, lng: -74.005973 }} onClick={props.onMarkerClick} />}
    {props.isMarkerShown && <Marker position={{ lat: 38.627002, lng: -90.199404 }} onClick={props.onMarkerClick} />}
    {props.isMarkerShown && <Marker position={{ lat: 36.072635, lng: -79.791975  }} onClick={props.onMarkerClick} />}
    {props.isMarkerShown && <Marker position={{ lat: 41.49932, lng: -81.694361 }} onClick={props.onMarkerClick} />}
    {props.isMarkerShown && <Marker position={{ lat: 35.46756, lng: -97.516428 }} onClick={props.onMarkerClick} />}
    {props.isMarkerShown && <Marker position={{ lat: 36.153982, lng: -95.992775 }} onClick={props.onMarkerClick} />}
    {props.isMarkerShown && <Marker position={{ lat: 45.523062, lng: -122.676482  }} onClick={props.onMarkerClick} />}
    {props.isMarkerShown && <Marker position={{ lat: 36.162664, lng: -86.781602 }} onClick={props.onMarkerClick} />}
    {props.isMarkerShown && <Marker position={{ lat: 30.267153, lng: -97.743061 }} onClick={props.onMarkerClick} />}
    {props.isMarkerShown && <Marker position={{ lat: 32.776664, lng: -96.796988 }} onClick={props.onMarkerClick} />}
    {props.isMarkerShown && <Marker position={{ lat: 40.760779, lng: -111.891047 }} onClick={props.onMarkerClick} />}
    {props.isMarkerShown && <Marker position={{ lat: 47.60621, lng: -122.332071 }} onClick={props.onMarkerClick} />}
    {props.isMarkerShown && <Marker position={{ lat: 43.073052, lng: -89.40123 }} onClick={props.onMarkerClick} />}
    {props.isMarkerShown && <Marker position={{ lat: 43.038903, lng: -87.906474 }} onClick={props.onMarkerClick} />}
    {props.isMarkerShown && <Marker position={{ lat:-33.93109, lng: 150.79361 }} onClick={props.onMarkerClick} />}
    {props.isMarkerShown && <Marker position={{ lat: -31.950527, lng: 115.860457 }} onClick={props.onMarkerClick} />}
    {props.isMarkerShown && <Marker position={{ lat: -34.928499, lng: 138.600746 }} onClick={props.onMarkerClick} />}
    {props.isMarkerShown && <Marker position={{ lat: 49.282729, lng: -123.120738  }} onClick={props.onMarkerClick} />}
    {props.isMarkerShown && <Marker position={{ lat: 5.98806, lng: -73.80718 }} onClick={props.onMarkerClick} />}
    {props.isMarkerShown && <Marker position={{ lat:  48.856614, lng: 2.352222  }} onClick={props.onMarkerClick} />}
    {props.isMarkerShown && <Marker position={{ lat: 52.520007, lng: 13.404954}} onClick={props.onMarkerClick} />}
    {props.isMarkerShown && <Marker position={{ lat: 53.551085, lng: .993682 }} onClick={props.onMarkerClick} />}
    {props.isMarkerShown && <Marker position={{ lat: 50.899376, lng: 6.776658  }} onClick={props.onMarkerClick} />}
    {props.isMarkerShown && <Marker position={{ lat: 47.376887, lng: 8.541694 }} onClick={props.onMarkerClick} />}
    {props.isMarkerShown && <Marker position={{ lat: 51.507351, lng:0.127758 }} onClick={props.onMarkerClick} />}
    {props.isMarkerShown && <Marker position={{ lat: 53.480759, lng: -2.242631 }} onClick={props.onMarkerClick} />}
    {props.isMarkerShown && <Marker position={{ lat: 51.752021, lng: -1.257726 }} onClick={props.onMarkerClick} />}
    {props.isMarkerShown && <Marker position={{ lat: 51.571148, lng: 0.673547 }} onClick={props.onMarkerClick} />}
    {props.isMarkerShown && <Marker position={{ lat: 55.953252, lng: -3.188267 }} onClick={props.onMarkerClick} />}
    {props.isMarkerShown && <Marker position={{ lat: 57.649454, lng: -3.318485 }} onClick={props.onMarkerClick} />}
    {props.isMarkerShown && <Marker position={{ lat: -32.522779,vlng: -55.765835 }} onClick={props.onMarkerClick} />}

  </GoogleMap>
);

class MyFancyComponent extends React.PureComponent {
  state = {
    isMarkerShown: false,
  }

  componentDidMount() {
    this.delayedShowMarker()
  }

  delayedShowMarker = () => {
    setTimeout(() => {
      this.setState({ isMarkerShown: true })
    }, 3000)
  }

  handleMarkerClick = () => {
    this.setState({ isMarkerShown: false })
    this.delayedShowMarker()
  }

  render() {
    return (
      <MyMapComponent
        isMarkerShown={this.state.isMarkerShown}
        onMarkerClick={this.handleMarkerClick}
      />
    )
  }
}




export default MyFancyComponent;

  
