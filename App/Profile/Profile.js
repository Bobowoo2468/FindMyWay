import React, { Component, setState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ImageBackground,
  Pressable,
  PermissionsAndroid,
} from 'react-native';
import Geolocation from 'react-native-geolocation-service';

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

var latitude;
var longitude;

const getCurrentLocation = () => {
        Geolocation.getCurrentPosition(
            (position) => {
               latitude = position.coords.latitude;
               longitude = position.coords.longitude;
            },
        (error) => {
          console.log(error.code, error.message);
        },
        { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
        );
    }

export default class Profile extends Component {
    componentDidMount() {
        requestLocationPermission();
        getCurrentLocation();
    }

    state = {
          likes: Number(this.props.likes),
          latitude: 37.4220936,
          longitude: -122.083922,
    }

    _updatePosition = () => {
        this.setState({latitude: latitude});
        this.setState({longitude: longitude});
    }

    _incrementLike = () => {
        this.setState({likes: this.state.likes + 1})
    }
  render() {
    return (
      <View>
          <ImageBackground style={styles.header} source = {require('./Assets/GivingBackground.jpg')}></ImageBackground>
          <Image style={styles.avatar} source={ require('./Assets/Portraitpic.jpg')}/>
          <TouchableOpacity
          style={styles.likeButton}
          onPress = {this._incrementLike}>
              <Image
               source={ require('./Assets/Heart.png')}
               style={styles.likeButtonImage}
              />
            <Text style={styles.likeButtonText}>Like</Text>
          </TouchableOpacity>

          <View style={styles.body}>
            <Text style={styles.likeCount}>Likes: {this.state.likes}</Text>
            <View style={styles.bodyContent}>
              <Text style={styles.name}>{this.props.name}</Text>
              <Text style={styles.occupation}>{this.props.occupation}</Text>
              <View style={styles.horizontalRule}></View>
              <Text style={styles.description}> {this.props.description} </Text>
              <View style={styles.horizontalRule}></View>
              <Text style={styles.description}> Hobbies: {this.props.hobbies} </Text>
              <View style={styles.horizontalRule}></View>
              <Text style={styles.description}> Languages: {this.props.languages} </Text>
              <View style = {styles.whiteSpace}></View>
              <View style = {styles.flexContainer}>
                  <TouchableOpacity style={styles.buttonContainer} onPress = {() => this.props.navigation.navigate('Map', {name: 'Map', latitude: latitude, longitude: longitude,})}>
                    <Text style={styles.buttonText}>Accept</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.buttonContainer} onPress = {this._updatePosition}>
                    <Text style={styles.buttonText}>Decline</Text>
                  </TouchableOpacity>
              </View>
            </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  header:{
    height:200,
  },
  avatar: {
    width: 130,
    height: 130,
    borderRadius: 63,
    borderWidth: 4,
    borderColor: "white",
    marginBottom:10,
    alignSelf:'center',
    position: 'absolute',
    marginTop:130
  },
  name:{
    fontSize:22,
    color:"#FFFFFF",
    fontWeight:'600',
  },
  body:{
    marginTop: 10,
  },
  bodyContent: {
    flex: 1,
    alignItems: 'center',
    padding:30,
  },
  name:{
    fontSize:28,
    color: "#696969",
    fontWeight: "600"
  },
  occupation:{
    fontSize:18,
    color: "blue",
    fontWeight: "bold",
    marginTop:10,
    marginBottom: 10,
  },
  description:{
    fontSize:18,
    color: "#696969",
    marginTop: 10,
    marginBottom: 10,
    textAlign: 'center'
  },
  whiteSpace:{
    marginTop: 25,
    marginBottom: 25,
    alignSelf: 'stretch',
  },
  buttonContainer: {
    marginTop:10,
    height:45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom:20,
    width: 100,
    borderRadius:30,
    backgroundColor: "#00BFFF",
  },
  flexContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    width: 400,
  },
  horizontalRule: {
    borderBottomColor: 'black',
    borderBottomWidth: StyleSheet.hairlineWidth,
    alignSelf: 'stretch',
  },
  buttonText: {
    fontSize: 14,
    fontWeight: "bold",
  },
  likeButton: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 50,
    elevation: 3,
    width: 40,
    height: 40,
    backgroundColor: 'purple',
    position: 'relative',
    alignSelf:'center',
    left: 60,
  },
  likeButtonText: {
    fontSize: 7,
    fontWeight: "bold",
    color: "purple",
    position: 'absolute',
  },
  likeCount: {
    fontSize: 15,
    fontWeight: "bold",
    position: 'absolute',
    alignSelf: 'center',
    marginTop: 5,
  },
  likeButtonImage: {
    width: 40,
    height: 40,
    borderRadius: 50,
  },
});
