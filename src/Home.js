import React, { Component } from 'react';
import { View, 
    Text, 
    TouchableOpacity, 
    Dimensions,
    StyleSheet,
    StatusBar,
    BackHandler,
    Image } from 'react-native';
import * as Animatable from 'react-native-animatable';
import LinearGradient from 'react-native-linear-gradient';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
//import { useTheme } from '@react-navigation/native';

export default class Home extends Component {
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
              <View style={styles.header}>
                  <Animatable.Image 
                      animation="bounceIn"
                      duraton="1500"
                  source={require('../assets/logo.png')}
                  style={styles.logo}
                  resizeMode="stretch"
                  />
              </View>
              <Animatable.View 
                  style={[styles.footer, {
                      
                  }]}
                  animation="fadeInUpBig"
              >
                  <Text style={[styles.title]}>Tu veux send le 💸 au Cameroun ? </Text>
                  <Text style={styles.text}>Commences d'abord par te connecter</Text>
                  <View style={styles.button}>
                  <TouchableOpacity onPress={()=>this.props.navigation.navigate('SignIn')}>
                      <LinearGradient
                          colors={['#707070', '#292929']}
                          style={styles.signIn}
                      >
                          <Text style={styles.textSign}>On y va  </Text>

                          <MaterialIcons 
                        name="navigate-next"
                        color="#fff"
                        size={30}
                    />
                          
                          
                      </LinearGradient>
                  </TouchableOpacity>
                  </View>
              </Animatable.View>
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
      color: '#3b5617',
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