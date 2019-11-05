import React from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';

import {GOOGLE_MAPS_API_KEY} from '../variables.js';


export class MapContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      markers: [
        {
          name: "Current position",
          position: {
            lat: 47.6062,
            lng: -122.3321
          }
        }
      ],  
      coords: [ 
              {latitude: 47.359423, longitude: -122.021071},
              {latitude: 47.2052192687988, longitude: -121.988426208496},
              {latitude: 47.6307081, longitude: -122.1434325},
              {latitude: 47.3084488, longitude: -122.2140121},
              {latitude: 47.5524695, longitude: -122.0425407}]
    }
  }

  onMarkerDragEnd = (coord, index) => {
    const { latLng } = coord;
    const lat = latLng.lat();
    const long = latLng.lng();

    // return onMarkerDragEnd passed from props  
    return this.props.onMarkerDragEnd({lat,long});

  };

  displayMarkers = () => {
    // display all map markers, and provide a link to the marker's individual page
    return this.state.coords.map((store, index) => {
      return <Marker key={index} id={index} position={{
       lat: store.latitude,
       lng: store.longitude
     }}
     onClick={() => this.props.history.push("/hydrant/1")} />
    })
  }

  
  render() {
    const {editing} = this.props;

    if (editing) { // conditionally render a map with one moveable marker when editing prop is passed
      return (
        <Map
          google={this.props.google}
          zoom={8}
          initialCenter={{ lat: 47.444, lng: -122.176}}
          // const containerStyle = {{position: 'absolute', width: '50%', height:'50%'}}
          >
          {this.state.markers.map((marker, index) => (
          <Marker
            position={marker.position}
            draggable={true}
            onDragend={(t, map, coord) => this.onMarkerDragEnd(coord, index)}
            name={marker.name}
          />
        ))}
        </Map>
      );
    } else { // we are viewing predefined markers
      return (
        <Map
          google={this.props.google}
          zoom={8}
          initialCenter={{ lat: 47.444, lng: -122.176}}
          // const containerStyle = {{position: 'absolute', width: '50%', height:'50%'}}
        >
          {this.displayMarkers()}
        </Map>
    );
    }
  }
}

export default GoogleApiWrapper({
  apiKey: GOOGLE_MAPS_API_KEY
})(MapContainer);
