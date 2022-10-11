import React, { useState, useEffect } from "react";
import { View, ScrollView, Text, TouchableOpacity, StyleSheet } from "react-native";
import Sound from 'react-native-sound'

const styles = StyleSheet.create({
  flexContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    width: 400,
  },
  buttonText: {
    fontSize: 23,
    fontWeight: "800",
    color: "black",
    fontFamily: "Arial",
  },
  selectedButtonText: {
    fontWeight: "800",
    fontSize: 24,
    color: "blue",
  },
  continueText:{
    color: 'white',
  },
  selectContinueText:{
    color: 'black',
    fontSize: 24,
  },
  buttonContainer: {
    marginTop:10,
    height:'15%',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom:20,
    width: '90%',
    borderRadius: 40,
    borderColor: 'black',
    borderWidth: 2,
    backgroundColor: "#FFFFFF",
  },
  selectedButtonContainer: {
    borderColor: 'blue',
    borderWidth: 3,
  },
  continueButtonContainer: {
    height: '60%',
    justifyContent: 'center',
    alignItems: 'center',
    width: '90%',
    borderRadius: 40,
    borderColor: 'black',
    borderWidth: 2,
    backgroundColor: "grey",
  },
  selectContinueButtonContainer: {
    borderColor: 'white',
    borderWidth: 3,
    backgroundColor: "lightgreen",
  },
  continueButtonList: {
    height: '19%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    borderColor: 'black',
    borderWidth: 1,
  },
  elevation: {
    elevation: 10,
    shadowColor: '#000',
  },
  buttonList: {
    height: '80%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  shadowProp: {
      shadowColor: '#171717',
      shadowOffset: {width: 0, height: 4},
      shadowOpacity: 0.2,
      shadowRadius: 3,
    },
  empty:{
  },
});

Sound.setCategory('Playback');

/*
var audio_CONTINUE_CH = new Sound(require('./Assets/Continue-CH.mp3'), Sound.MAIN_BUNDLE, (error) => {
if (error) {
    console.log('failed to load the sound', error);
    return;
  }
});
var audio_CONTINUE_MY = new Sound(require('./Assets/Continue-MY.mp3'), Sound.MAIN_BUNDLE, (error) => {
if (error) {
    console.log('failed to load the sound', error);
    return;
  }
});
var audio_CONTINUE_GE = new Sound(require('./Assets/Continue-GE.mp3'), Sound.MAIN_BUNDLE, (error) => {
if (error) {
    console.log('failed to load the sound', error);
    return;
  }
});
var audio_CONTINUE_EN = new Sound(require('./Assets/Continue-EN.mp3'), Sound.MAIN_BUNDLE, (error) => {
if (error) {
    console.log('failed to load the sound', error);
    return;
  }
});

var audio_EN = new Sound(require('./Assets/EN.mp3'), Sound.MAIN_BUNDLE, (error) => {
if (error) {
    console.log('failed to load the sound', error);
    return;
  }
});
var audio_CH = new Sound(require('./Assets/CH.mp3'), Sound.MAIN_BUNDLE, (error) => {
if (error) {
    console.log('failed to load the sound', error);
    return;
  }
});
var audio_MY = new Sound(require('./Assets/MY.mp3'), Sound.MAIN_BUNDLE, (error) => {
if (error) {
    console.log('failed to load the sound', error);
    return;
  }
});
var audio_GE = new Sound(require('./Assets/GE.mp3'), Sound.MAIN_BUNDLE, (error) => {
if (error) {
    console.log('failed to load the sound', error);
    return;
  }
});
*/

const DestinationSelect = (props) => {
    const [language, setLanguage] = useState("");
    const [btnPressed, setBtnPressed] = useState(0);

    const langList_CONTINUE = ["CONTINUE", "CONTINUE", "继续", "TERUSKAN", "FORTSETZEN"];
    const langList = ["English", "English", "华语", "Bahasa Melayu", "Deutsch"];

    const handleSelect = (lang, btnP) => () => {
        setLanguage(lang);
        playLanguage(lang);
        setBtnPressed(btnP);
    };

     useEffect(() => {
        audio_CONTINUE_CH.setVolume(1);
        audio_CONTINUE_EN.setVolume(1);
        audio_CONTINUE_MY.setVolume(1);
        audio_CONTINUE_GE.setVolume(1);
        audio_EN.setVolume(1);
        audio_CH.setVolume(1);
        audio_MY.setVolume(1);
        audio_GE.setVolume(1);
        return () => {
          audio_CONTINUE_CH.release();
          audio_CONTINUE_MY.release();
          audio_CONTINUE_GE.release();
          audio_CONTINUE_EN.release();
          audio_EN.release();
          audio_CH.release();
          audio_MY.release();
          audio_GE.release();
        };
      }, []);

  const navToInputDestination = () => {
       playPause();
       props.navigation.navigate('DestinationSelect', {name: 'DestinationSelect', });
  }

  const playPause = () => {
    if (btnPressed == 1){
        audio_CONTINUE_EN.play();
    } else if (btnPressed == 2){
        audio_CONTINUE_CH.play();
    } else if (btnPressed == 3){
        audio_CONTINUE_MY.play();
    } else if (btnPressed == 4){
        audio_CONTINUE_GE.play();
    }
  };

  const playLanguage = (lang) => {
    if (lang == "EN"){
        audio_EN.play();
    } else if (lang == "CH"){
        audio_CH.play();
    } else if (lang == "MY"){
        audio_MY.play();
    } else if (lang == "GE"){
        audio_GE.play();
    }
  };

    return(
        <View>

          <View style = {styles.buttonList}>
            <TouchableOpacity style={[styles.buttonContainer, btnPressed == 1 ? styles.selectedButtonContainer : styles.empty]} onPress = {handleSelect("EN", 1)}>
                <Text style={[styles.buttonText, btnPressed == 1 ? styles.selectedButtonText : styles.empty]}>{langList[1]}</Text>
            </TouchableOpacity>

            <TouchableOpacity style={[styles.buttonContainer, btnPressed == 2 ? styles.selectedButtonContainer : styles.empty]} onPress = {handleSelect("CH", 2)}>
                <Text style={[styles.buttonText, btnPressed == 2 ? styles.selectedButtonText : styles.empty]}>{langList[2]}</Text>
            </TouchableOpacity>

            <TouchableOpacity style={[styles.buttonContainer, btnPressed == 3 ? styles.selectedButtonContainer : styles.empty]} onPress = {handleSelect("MY", 3)}>
                <Text style={[styles.buttonText, btnPressed == 3 ? styles.selectedButtonText : styles.empty]}>{langList[3]}</Text>
            </TouchableOpacity>

            <TouchableOpacity style={[styles.buttonContainer, btnPressed == 4 ? styles.selectedButtonContainer : styles.empty]} onPress = {handleSelect("GE", 4)}>
                <Text style={[styles.buttonText, btnPressed == 4 ? styles.selectedButtonText : styles.empty]}>{langList[4]}</Text>
            </TouchableOpacity>
          </View>

          <View style = {[styles.continueButtonList, styles.elevation, styles.shadowProp]}>
            <TouchableOpacity style={[styles.continueButtonContainer,
                                btnPressed == 0 ? styles.empty : styles.selectContinueButtonContainer, styles.elevation, styles.shadowProp]}
                                onPress = {navToInputDestination}>
                <Text style={[styles.buttonText, btnPressed == 0 ? styles.continueText : styles.selectContinueText]}>{langList_CONTINUE[btnPressed]}</Text>
            </TouchableOpacity>
          </View>

        </View>
         );
}

export default DestinationSelect;