import React, { Component } from 'react';
import { View, 
    Text, 
    TouchableOpacity, 
    Dimensions,
    StyleSheet,
    StatusBar,
    BackHandler,
    Image } from 'react-native';
import BottomNavigator from "./BottomNavigator.js";
import * as Animatable from 'react-native-animatable';
import LinearGradient from 'react-native-linear-gradient';
import styled from 'styled-components'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const Keypad = styled.View`
    flex-direction: row;
    flex-wrap: wrap;
    align-content: center;
    justify-content: center;
    margin-top: 40px;
`;

const buttons = [
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "0",
    <MaterialIcons name="keyboard-backspace" size={24} />
];

const Number = styled.TouchableOpacity`
    width: 73px;
    height: 73px;
    border-radius: 40px;
    align-items: center;
    justify-content: center;
    margin: 10px 20px;
    border-width: 1px;
    border-color: #ffffff;
`;

export default  NumberPad = ({onPress}) => {

        return (
            <Keypad>
                {buttons.map((item, index) => {

            return (

            <Number key={index} onPress={() => onPress(item, index)} delayPressIn={0}>
                <Text style={[{justifyContent: 'center', fontSize: 22, color: '#ffffff'}]}>
                    {item}
                </Text>    
            </Number>
)

})}
                 
            </Keypad>
          )
    
}

const {height} = Dimensions.get("screen");
const height_logo = height * 0.35;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
      flex: 2,
      justifyContent: 'center',
      alignItems: 'center'
  },
  footer: {
      flex: 1,
      backgroundColor: '#fff',
      borderTopLeftRadius: 30,
      borderTopRightRadius: 30,
      paddingVertical: 50,
      paddingHorizontal: 30
  },
  logo: {
      width: height_logo,
      height: height_logo
  },
  title: {
      color: '#ffffff',
      fontSize: 30,
      fontWeight: 'bold'
  },
  text: {
      color: 'grey',
      marginTop:5
  },
  button: {
      alignItems: 'flex-end',
      marginTop: 30
  },
  signIn: {
      width: 150,
      height: 40,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 50,
      flexDirection: 'row'
  },
  textSign: {
      color: 'white',
      fontSize: 17,
      fontWeight: 'bold'
  }
});