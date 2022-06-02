import React, { Component } from 'react';
import { View,  
    TouchableOpacity, 
    Dimensions,
    StyleSheet,
    StatusBar,
    TextInput,
    Modal,
    Text,
    SafeAreaView,
    ScrollView
 } from 'react-native';
import {Picker} from '@react-native-picker/picker';
import BottomNavigator from "./BottomNavigator.js";
import * as Animatable from 'react-native-animatable';
import LinearGradient from 'react-native-linear-gradient';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Feather from 'react-native-vector-icons/Feather';

export default class Receptor extends Component {
    constructor(props) {
        super();
        this.state=
        {
         operateur:"Orange Money",
         erreur:'',
         nom_compte:'',
         numero_compte:'',
         motif_transfert:'',
         code_parr:'',
         showWarning: false,
         showPayment: false,
         index_payment:''
        }
    }

    updateOperator= (operator) =>
    {
        this.setState({operateur: operator})

    }

    back= () =>
    {
        this.props.navigation.goBack()

    }

    validatenumber = (p) =>
     {
        var phoneRe = /^\d{9}$/;
        return phoneRe.test(p);
      }

    paymentpages = (p) =>
    {   
        var nom_compte= this.state.nom_compte;
        var numero_compte= this.state.numero_compte;
        var motif_transfert= this.state.motif_transfert;
        var code_parr= this.state.code_parr
        var operateur= this.state.operateur;
        var montant_transfert= this.props.navigation.state.params.amount;
        
         if (p == 'cry') {
            this.setState({showPayment: false})
            this.props.navigation.navigate('Payment', {nom_compte: nom_compte, numero_compte: numero_compte, motif_transfert: motif_transfert, montant_transfert: montant_transfert, operateur: operateur, code_parr: code_parr})
         }
         if (p == 'vir') {
            this.setState({showPayment: false})
           this.props.navigation.navigate('Payment2', {nom_compte: nom_compte, numero_compte: numero_compte, motif_transfert: motif_transfert, montant_transfert: montant_transfert, operateur: operateur, code_parr: code_parr})
         }
         if (p == 'cdc') {
            this.setState({showPayment: false})
            this.props.navigation.navigate('Payment3', {nom_compte: nom_compte, numero_compte: numero_compte, motif_transfert: motif_transfert, montant_transfert: montant_transfert, operateur: operateur, code_parr: code_parr})
         }
    }  

    OpenPaymentOption = () => 
    {

        var nom_compte= this.state.nom_compte;
        var numero_compte= this.state.numero_compte;
        var motif_transfert= this.state.motif_transfert;
        var montant_transfert= this.props.navigation.state.params.amount;

        if(nom_compte.length==0 || numero_compte.length==0 )
        {
            this.setState({erreur: 'Un champs manque'})
            this.setState({showWarning: true})
        }
        else if(!this.validatenumber(numero_compte) )
        {
            this.setState({erreur: 'Le numero est incorrect'})
            this.setState({showWarning: true})
        }
        else
        {
        this.setState({showPayment: true})
        }


    }
    
        render() {
            return (
            
            <SafeAreaView style={styles.container}>
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
                  source={require('../assets/Warning.png')}
                  style={[styles.logo,{marginTop:45, marginBottom:15}]}
                  resizeMode="stretch"
                  />
              <Text style={[styles.title,{fontSize: 20,paddingBottom:20}]}>{this.state.erreur}</Text>
              <TouchableOpacity
              onPress={() => this.setState({showWarning: false})}
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
            <Modal
            visible={this.state.showPayment}
            transparent
            animationType='fade'
            hardwareAccelerated
            >
        <View style={styles.payment_view}>
          <View style={styles.warning_modal}>
            <View style={styles.warning_body2}>
              <Text style={[styles.title,{fontSize: 20,paddingBottom:20}]}>Comment voulez-vous payer ? </Text>
              <TouchableOpacity
              onPress={() => this.paymentpages('cry')}
              style={[styles.signIn2, {
                
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
                    style={[styles.signIn2, {height: 32,}]}
                >
                    <Text style={[styles.textSign, {
                        color:'#fff'
                    }]}>Crypto(USDT)</Text>
                </LinearGradient>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => this.paymentpages('vir')}
              style={[styles.signIn2, {
                
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
                    style={[styles.signIn2, {height: 32,}]}
                >
                    <Text style={[styles.textSign, {
                        color:'#fff'
                    }]}>Virement SEPA/SEPA Inst</Text>
                </LinearGradient>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => this.paymentpages('cdc')}
              style={[styles.signIn2, {
                
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
                    style={[styles.signIn2, {height: 32,}]}
                >
                    <Text style={[styles.textSign, {
                        color:'#fff'
                    }]}>Carte de crédit/débit</Text>
                </LinearGradient>
            </TouchableOpacity>
            
            </View>
            
                    </View>
                </View>
            </Modal>
                
                <View style={styles.middle}>
                <TouchableOpacity style={styles.arrowback} onPress={this.back}>
                <Feather
                name="arrow-left"
                color="#ffffff"
                size={20}
                    />
                </TouchableOpacity>
        
          <Text style={styles.textContainer}>Vous envoyez {this.props.navigation.state.params.amount}€</Text>

          <View style={styles.formArea}>
            <Text style={[styles.textContainer, styles.signin]}>A qui 🤔 ?</Text>
            <View style={styles.mainForm}>
            <View style={{ height: 400 }}>
            <ScrollView>
            <View style={styles.formItems}>
                <TextInput placeholder="Nom du compte" placeholderTextColor="#505050" style={styles.Input} onChangeText={nom_compte => this.setState({nom_compte})}/>
              </View>
              <View style={styles.formItems}>
                <TextInput keyboardType='number-pad' placeholderTextColor="#505050" placeholder="Numéro du compte" style={styles.Input} onChangeText={numero_compte => this.setState({numero_compte})}/>
              </View>
              <Picker selectedValue= {this.state.operateur} onValueChange = {this.updateOperator}>
                <Picker.Item label="Orange Money" color="#fc7e02" value="Orange Money"/>
                <Picker.Item label="MTN Money" color="#ecfb02" value="MTN Money"/>  
              </Picker>   
              <View style={styles.formItems}>
                <TextInput placeholderTextColor="#505050" placeholder="Motif du transfert (Facultatif)" style={styles.Input} onChangeText={motif_transfert => this.setState({motif_transfert})}/>
              </View>
              <View style={styles.formItems}>
                <TextInput placeholderTextColor="#505050" placeholder="Code parrainage (Facultatif)" style={styles.Input} onChangeText={code_parr => this.setState({code_parr})}/>
              </View>
              
                
                </ScrollView>
             </View>
             
              <View style={styles.Button}>
                <TouchableOpacity style={styles.mainBtn} onPress={this.OpenPaymentOption}>
                  <Text style={styles.btnText}>Payer -></Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
          

        </View>
        
      </SafeAreaView>
      
              
            );
          }
}

const {height} = Dimensions.get("screen");
const {width} = Dimensions.get("screen");
const width_cus = width*0.95;
const padding_modal = height - 370;
const padding_modal2 = height - 600

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    backgroundColor: '#292929',
    alignContent:'center',
    justifyContent:'center'
    
  },
  arrowback: {
    justifyContent: 'center',
      left: -15,
      top: 7
},

  middle: {
    width: '100%',
    height: '100%',
    flex: 1,
    position: 'absolute',
    zIndex: 2,
    backgroundColor: 'transparent',
    paddingLeft: 26.3,
    paddingRight: 26.3,
    alignContent:'center',
    justifyContent: 'center'

    
    
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
    marginBottom: 26.3
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
    height: 50,
    paddingLeft:10,
    backgroundColor:'#909090',
    color: '#505050',
    fontSize: 15,
    fontWeight: "bold",
    borderWidth: 5,
    borderRadius: 1,
    borderColor: '#505050',
  },
  Picker: {
    alignItems:'center',
    paddingTop: 0,

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
    fontWeight: 'bold',
  },
  cboxText: {
    fontSize: 10,
  },
  Button: {
    padding: 30.8,
    paddingBottom: 0,
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