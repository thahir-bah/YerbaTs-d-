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
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';



export default class Payment3 extends Component {
    constructor(props) {
        super();
    }
    componentWillMount()
        {
            BackHandler.addEventListener('hardwareBackPress', function () {           
                return true;
              });
        }

    render() {
        return (
            <View style={styles.container}>
                <StatusBar backgroundColor='#292929' barStyle="light-content"/>
                 <Text style={styles.title}>
                     Payment 3
                 </Text>
                 
            </View>
          )
    }
}

const {height} = Dimensions.get("screen");
const height_logo = height * 0.35;

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    backgroundColor: '#292929'
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