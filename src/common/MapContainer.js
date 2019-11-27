import React from 'react';
import ReactDOM from 'react-dom';
import { Map, GoogleApiWrapper, Marker, InfoWindow} from 'google-maps-react';

import {GOOGLE_MAPS_API_KEY} from '../variables.js';


export class MapContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showingInfoWindow: false,
      activeMarker: {},
      selectedPlace: {}, 
      markers: [
        {
          name: "Initial position",
          position: {
            lat: 47.6062,
            lng: -122.3321
          }
        }
      ],  
 
    };
    

    this.onMarkerClick = this.onMarkerClick.bind(this);
    this.onMapClicked = this.onMapClicked.bind(this);
  }

  // When viewing, clicking a marker shows an InfoWindow
  onMarkerClick = (props, marker, e) => {
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    })
  };

  // When viewing, clicking the map removes the InfoWindow
  onMapClicked = (props) => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      })
    }
  };
  
  // Upon dragging the marker, perform onMapMarkerPlace (passed in props)
  onMarkerDragEnd = (coord, index) => {
    const { latLng } = coord;
    const lat = latLng.lat();
    const long = latLng.lng();

    // return onMarkerDragEnd passed from props  
    return this.props.onMapMarkerPlace({lat,long});

  };

  // display all map markers, and provide a link to the marker's individual page
  displayMarkers = () => {
    return this.props.hydrantList.map((hydrant, index) => {
      return (
        <Marker 
          key={index}
          id={index}
          position={{lat: hydrant.lat, lng: hydrant.long}}
          description={hydrant.name}
          onClick={this.onMarkerClick}
        />
      );
    })
  }

  // google-maps-react library has a limitation - it doesnt allow events to fire from within InfoWindow. 
  // We circumvent this issue by creating a dummy div, then replacing it with our Link button
  onInfoWindowOpen(props, e) {
    const button = (<button className="btn btn-primary" onClick={() => this.props.history.push("/hydrant/1")}>View Hydrant</button>);
    ReactDOM.render(React.Children.only(button), document.getElementById("link"));
  }
  
  render() {
    const {editing, hydrantList} = this.props;

    if (editing) { // conditionally render a map with one moveable marker when editing prop is passed
      return (
        <Map
          google={this.props.google}
          zoom={8}
          initialCenter={{ lat: 47.444, lng: -122.176}} //default is Seattle
        >
          {this.state.markers.map((marker, index) => (
          <Marker
            position={marker.position}
            draggable={true}
            onDragend={(t, map, coord) => this.onMarkerDragEnd(coord, index)}
            name={marker.name}
          >
          </Marker>
        ))}
        </Map>
      );
    } else { // we are viewing predefined markers
      return (
        <Map
          google={this.props.google}
          onClick={this.onMapClicked}
          zoom={8}
          initialCenter={{ lat: hydrantList[0].lat, lng: hydrantList[0].long}} 
        >
          {this.displayMarkers()}
          <InfoWindow marker={this.state.activeMarker} visible={this.state.showingInfoWindow} onOpen={e => {this.onInfoWindowOpen(this.props, e)}}>
            <React.Fragment>
              <h4>{this.state.selectedPlace.description}</h4>
              <div id="link" /> {/* dummy div for the link url button, as InfoWindow is incompatible with events*/}
            </React.Fragment>
          </InfoWindow>
        </Map>
    );
    }
  }
}

export default GoogleApiWrapper({
  apiKey: GOOGLE_MAPS_API_KEY
})(MapContainer);
 