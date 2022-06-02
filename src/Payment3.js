import React, { Component } from 'react';
import { View, 
    Text, 
    TouchableOpacity, 
    Dimensions,
    StyleSheet,
    StatusBar,
    BackHandler,
    Clipboard,
    ScrollView,
    ToastAndroid,
    ToastAndroidStatic,
    SafeAreaView,
    Modal,
    Image } from 'react-native';
import BottomNavigator from "./BottomNavigator.js";
import * as Animatable from 'react-native-animatable';
import LinearGradient from 'react-native-linear-gradient';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Feather from 'react-native-vector-icons/Feather';

const IBAN= "LT573250085691798989"
const banque= "Revolut"
const reference= "Nom ou Prénom"
const nom_compte= "NTOUDA Gerard Stéphane"

export default class Payment3 extends Component {
    constructor(props) {
        super();
        this.state=
        {
         showWarning: true,
        }
    }

    copytext = (text) =>
    {
        Clipboard.setString(text);
        ToastAndroid.showWithGravity("Copié avec succès", 50, ToastAndroid.TOP)
    }
    
    closeandgoback= () =>
    {
        this.setState({showWarning: false})
        this.props.navigation.goBack()

    }


    render() {
        return (
            <SafeAreaView style={styles.container}>
                <StatusBar backgroundColor='#292929' barStyle="light-content"/>
                <Modal
            visible={this.state.showWarning}
            transparent
            animationType='fade'
            hardwareAccelerated
            >
        <View style={styles.centered_view}>
          <View style={styles.warning_modal}>
            <View style={styles.warning_body}>
            <Animatable.Image 
                      animation="bounceIn"
                      duraton="1500"
                  source={require('../assets/Wait.png')}
                  style={[styles.logo,{marginTop:45, marginBottom:15}]}
                  resizeMode="stretch"
                  />
              <Text style={[styles.title,{fontSize: 20,paddingBottom:20}]}>Cette manière de payer sera bientôt disponible</Text>
              <TouchableOpacity
              onPress={this.closeandgoback}
              style={[styles.signIn, {
                
                width: '90%',
                height: 32,
                color: "#3b5617",
                borderColor: '#292929',
                borderWidth: 1,
                marginTop: 0,
                borderRadius: 30
            }]}
              android_ripple={{color:'#fff'}}
            >
              <LinearGradient
                    colors={['#3b5617', '#3b5617']}
                    style={[styles.signIn, {height: 32,}]}
                >
                    <Text style={[styles.textSign, {
                        color:'#fff'
                    }]}>OK</Text>
                </LinearGradient>
            </TouchableOpacity>
            </View>
            
                    </View>
                </View>
            </Modal>
                <View style={styles.arrow}>
                <TouchableOpacity onPress={this.back}>
                <Feather
                name="arrow-left"
                color="#ffffff"
                size={20}
                    />
                </TouchableOpacity>
                </View>
                
                <View style={styles.halfcontainer}>
                <View style={styles.titleblock}>
                 <Text style={styles.title}>
                     Déposer EUR (Visa/Maestro)
                    </Text>
                </View>
                
                
                
                </View>
                <ScrollView>
              <View style={styles.halfcontainer2}>
                    
                <View style={[{width: '100%', justifyContent: 'center', 
                alignItems: 'center', marginTop: 10}]}>
                    <View style={styles.infobox}>
                    <View style={[{width: '48%', justifyContent: 'center', 
                 height: '80%'}]}>
                        <Text style={[styles.text2, {marginBottom: 10, marginTop: 6}]}>
                            Montant dépôt:
                        </Text>
                        <Text style={[styles.text2, {marginBottom: 10}]}>
                            Temps de traitement
                        </Text>
                        <Text style={[styles.text2, {marginBottom: 10}]}>
                            Temps d'arrivée:
                        </Text>
                 </View>
                 <View style={[{width: '48%', justifyContent: 'center', 
                alignItems: 'flex-end', height: '80%'}]}>
                        <Text style={[styles.text2, {marginBottom: 10, marginTop: 6, color: '#ffffff'}]}>
                        0€
                        </Text>
                        <Text style={[styles.text2, {marginBottom: 10, color: '#ffffff'}]}>
                            5Min-1h
                        </Text>
                        <Text style={[styles.text2, {marginBottom: 10, color: '#ffffff'}]}>
                            5Min-1h
                        </Text>
                 </View>
                    </View>
                </View>
                
              </View>
              </ScrollView>
              <View style={[{width: '100%', justifyContent: 'center', 
                alignItems: 'center', height: 50, backgroundColor: '#292929',}]}>
                 <TouchableOpacity style={[{width: '40%', justifyContent: 'center', 
                alignItems: 'center', height: 35, backgroundColor: '#3b5617', borderRadius: 8}]}>
                    <Text style={styles.text4}> Payer </Text>
                 </TouchableOpacity>
              </View>
            </SafeAreaView>
            
          )
    }
}

const {height} = Dimensions.get("screen");
const {width} = Dimensions.get("screen");
const padding_modal2 = height - 600
const padding_modal = height - 600;
const width_cus = width*0.95;
const height_logo = height * 0.35;
const height_container = height * 0.1;
const height_container2 = height * 0.44;
const styles = StyleSheet.create({
  container: {
    flex: 1, 
    backgroundColor: '#292929',

  },
  halfcontainer: {
    height: height_container,
    borderBottomWidth: 0.2,
    borderBottomColor: 'grey' 
  },
  halfcontainer2: {
    
  },
  adress_network: {
    marginTop: 25,
    marginLeft: 30,
    marginRight: 30,
    marginBottom: 40
  },
  arrow: {
      justifyContent: 'center',
      paddingLeft: 10
  },
  titleblock: {
    paddingLeft: 10,
    paddingTop: 15
  },
  qrcodeblock: {
    width: '100%',
    paddingTop: 30,
    justifyContent: 'center',
    alignItems: 'center'
  },
  logo: {
    width: 125,
    height: 125
  },
  centered_view: {
    flex: 1,
    paddingTop:padding_modal,
    alignItems: 'center',
    backgroundColor: '#00000099'
  },
  warning_modal: {
    width: width_cus,
    height: 250,
    backgroundColor: '#292929',
    borderRadius: 30,
  },
  warning_body2: {
    height: 200,
    paddingTop: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  notification: {
    width: '100%',
    paddingTop: 15,
    justifyContent: 'center',
    alignItems: 'center'
  },
  notification2: {
    width: '100%',
    paddingTop: 0,
    justifyContent: 'center',
    alignItems: 'center'
  },
  copybutton: {
    left:'90%',
    bottom:'6.5%'
  },

  infobox: {
    width:'95%',
    height:100,
    backgroundColor: '#404040',
    borderRadius: 8,
    justifyContent: 'center', 
    alignItems: 'center',
    flexDirection: 'row'
  },

  title: {
      color: '#ffffff',
      fontSize: 25,
      fontWeight: 'bold'
  },
  text: {
      color: 'grey',
      marginTop:0,
      fontSize: 12
  },
  text2: {
    color: 'grey',
    fontSize: 14
},
text3: {
    color: '#ffffff',
    marginTop:0,
    fontSize: 17,
    width: '95%',
    fontWeight: 'bold'
},
text4: {
    color: '#ffffff',
    marginTop:0,
    fontSize: 17,
    fontWeight: 'bold'
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
  },
  middle: {
    width: '100%',
    height: '80%',
    flex: 1,
    position: 'absolute',
    zIndex: 2,
    backgroundColor: 'transparent',
    paddingLeft: 26.3,
    paddingRight: 26.3,
    alignContent:'center',
    justifyContent:'center'
    
  },
  bottom: {
    position: 'relative',
    height: '100%',
    paddingRight: 12.7,
    paddingLeft: 12.7,
    backgroundColor: '#292929',
  },
  textContainer: {
    color: '#FCFDFF',
    fontFamily: 'GoogleSans-Bold',
    fontSize: 24,
    marginBottom: 30,
    position: 'relative',
    alignSelf: 'center',
  },
  formArea: {
    alignSelf: 'center',
    width: '100%',
    backgroundColor: '#ffffff',
    borderRadius: 5,
    paddingBottom: 40,
  },
  signin: {
    top: 0,
    color: '#2D3057',
    marginTop: 15,
  },
  formItems: {
    marginTop: 15,
    alignItems:'center',
    paddingBottom: 20,
    borderBottomColor: '#2D3057',
  },
  Input: {
    marginTop: Platform.OS === 'ios' ? 0 : -12,
    width: '85%',
    paddingLeft:10,
    backgroundColor:'#dff7bf',
    color: '#9ec56a',
    fontSize: 15,
    fontWeight: "bold",
    borderWidth: 5,
    borderRadius: 1,
    borderColor: '#9ec56a',
  },
  Picker: {
    alignItems:'center',
    paddingBottom: 20,
    borderBottomColor: '#2D3057',
    marginTop: 15,
    width: '85%',
    backgroundColor:'#dff7bf',
    color: '#9ec56a',
    fontSize: 15,
    fontWeight: "bold",
    borderWidth: 5,
    borderRadius: 1,
    borderColor: '#9ec56a',
  },
  loginAs: {
    paddingLeft: 46.6,
    display: 'flex',
    flexDirection: 'row',
    marginTop: 15,
    marginBottom: 20,
    alignItems: 'center',
  },
  loginText: {
    color: '#2D3057',
    fontSize: 10,
    fontFamily: 'GoogleSans-Bold',
    fontWeight: 'bold',
  },
  cboxText: {
    fontFamily: 'GoogleSans-Medium',
    fontSize: 10,
  },
  Button: {
    padding: 30.8,
    borderRadius: 4,
  },
  mainBtn: {
    backgroundColor: '#3b5617',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnText: {
    color: '#ffffff',
    fontFamily: 'GoogleSans-Medium',
    fontSize: 20,
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

title: {
    color: '#ffffff',
    fontSize: 20,
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
signIn2: {
    width: '80%',
    height: 40,
    margin: 20,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
    flexDirection: 'row'
},
textSign: {
    color: 'white',
    fontSize: 17,
    fontWeight: 'bold'
},
logo: {
  width: 125,
  height: 125
},
text_header: {
  color: '#fff',
  fontWeight: 'bold',
  fontSize: 30
},
text_footer: {
  color: '#3b5617',
  fontSize: 18,
  fontWeight: 'bold'
},
action: {
  flexDirection: 'row',
  marginTop: 10,
  borderBottomWidth: 1,
  borderBottomColor: '#f2f2f2',
  paddingBottom: 5
},
actionError: {
  flexDirection: 'row',
  marginTop: 10,
  borderBottomWidth: 1,
  borderBottomColor: '#FF0000',
  paddingBottom: 5
},
phonePlace: {
  flex: 1,
  marginTop: 35,
  paddingLeft: 10,
  fontSize: 17,
},
payment_view: {
    flex: 1,
    paddingTop: padding_modal2,
    alignItems: 'center',
    backgroundColor: '#00000099'
  },
centered_view: {
  flex: 1,
  paddingTop:padding_modal,
  alignItems: 'center',
  backgroundColor: '#00000099'
},
warning_modal: {
  width: width_cus,
  height: 250,
  backgroundColor: '#292929',
  borderRadius: 30,
},
warning_title: {
  height: 50,
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: '#ff0',
  borderTopRightRadius: 20,
  borderTopLeftRadius: 20,
},
warning_body: {
  height: 200,
  justifyContent: 'center',
  alignItems: 'center',
},
warning_body2: {
    height: 200,
    paddingTop: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
warning_button:{
  backgroundColor:'#00ffff',
  borderBottomLeftRadius:20,
  borderBottomRightRadius:20,
}
});