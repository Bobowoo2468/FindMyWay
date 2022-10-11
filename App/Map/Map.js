import React, { Component, setState } from 'react';
import {SafeAreaView, StyleSheet, View, PermissionsAndroid,} from 'react-native';
import MapView, {Marker, Polyline} from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';

const GOOGLE_MAPS_APIKEY = 'AIzaSyC_HK66GfUOAGcqWnjXCNLMEuptcZrP5nE';

const myOrigin = {latitude: 37.4, longitude:  -121.983922}
const myDestination = {latitude: 37.5, longitude:  -121.983922}

const requestLocationPermission = async () => {
  try {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
      {
        title: "Cool Location Permission",
        message:
          "Cool Photo App needs access to your camera " +
          "so you can take awesome pictures.",
        buttonNeutral: "Ask Me Later",
        buttonNegative: "Cancel",
        buttonPositive: "OK"
      }
    );
    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
      console.log("You can use geolocation");
    } else {
      console.log("Permission denied");
    }
  } catch (err) {
    console.warn(err);
  }
};


export default class Map extends Component {
    componentDidMount() {
        requestLocationPermission();
    }

    INITIAL_REGION = {
        latitude: 37.4,
        longitude:  -121.983922,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
    };
    origin = {latitude: 37.4, longitude:  -121.983922};
    destination = {latitude: 37.45,
    longitude: -121.983922,}
    coordinates = [this.origin, this.destination];

render(){
  return (
      <View style={styles.container}>
        <MapView
          style={styles.mapStyle}
          initialRegion={this.INITIAL_REGION}
          customMapStyle={mapStyle}>
        <MapViewDirections
          origin={myOrigin}
          destination={myDestination}
          apikey="AIzaSyC_HK66GfUOAGcqWnjXCNLMEuptcZrP5nE"
          strokeWidth={5}
          strokeColor="hotpink"
        />
        </MapView>
      </View>
  );
  }
};

const mapStyle = [
  {elementType: 'geometry', stylers: [{color: '#242f3e'}]},
  {elementType: 'labels.text.fill', stylers: [{color: '#746855'}]},
  {elementType: 'labels.text.stroke', stylers: [{color: '#242f3e'}]},
  {
    featureType: 'administrative.locality',
    elementType: 'labels.text.fill',
    stylers: [{color: '#d59563'}],
  },
  {
    featureType: 'poi',
    elementType: 'labels.text.fill',
    stylers: [{color: '#d59563'}],
  },
  {
    featureType: 'poi.park',
    elementType: 'geometry',
    stylers: [{color: '#263c3f'}],
  },
  {
    featureType: 'poi.park',
    elementType: 'labels.text.fill',
    stylers: [{color: '#6b9a76'}],
  },
  {
    featureType: 'road',
    elementType: 'geometry',
    stylers: [{color: '#38414e'}],
  },
  {
    featureType: 'road',
    elementType: 'geometry.stroke',
    stylers: [{color: '#212a37'}],
  },
  {
    featureType: 'road',
    elementType: 'labels.text.fill',
    stylers: [{color: '#9ca5b3'}],
  },
  {
    featureType: 'road.highway',
    elementType: 'geometry',
    stylers: [{color: '#746855'}],
  },
  {
    featureType: 'road.highway',
    elementType: 'geometry.stroke',
    stylers: [{color: '#1f2835'}],
  },
  {
    featureType: 'road.highway',
    elementType: 'labels.text.fill',
    stylers: [{color: '#f3d19c'}],
  },
  {
    featureType: 'transit',
    elementType: 'geometry',
    stylers: [{color: '#2f3948'}],
  },
  {
    featureType: 'transit.station',
    elementType: 'labels.text.fill',
    stylers: [{color: '#d59563'}],
  },
  {
    featureType: 'water',
    elementType: 'geometry',
    stylers: [{color: '#17263c'}],
  },
  {
    featureType: 'water',
    elementType: 'labels.text.fill',
    stylers: [{color: '#515c6d'}],
  },
  {
    featureType: 'water',
    elementType: 'labels.text.stroke',
    stylers: [{color: '#17263c'}],
  },
];

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  mapStyle: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
});