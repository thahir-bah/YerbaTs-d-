import React, { Component } from 'react';
import { View, 
    Text, 
    TouchableOpacity, 
    Dimensions,
    StyleSheet,
    StatusBar,
    BackHandler,
    Modal,
    Image } from 'react-native';
import styled from 'styled-components'
import NumberPad from './NumPad.js';
import BottomNavigator from "./BottomNavigator.js";
import * as Animatable from 'react-native-animatable';
import LinearGradient from 'react-native-linear-gradient';
import AsyncStorage from '@react-native-async-storage/async-storage';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const Container = styled.SafeAreaView`
    flex:1;
    background-color: #292929;
`;

const Amount = styled.View`
    margin-top: 64px;
    align-items: center;
`;

const Keypad = styled.View`
    align-items: center;
    //justify-content: center;
    
`;

const Sendo = styled.TouchableOpacity`
    margin: 16px;
    background-color: #3b5617;
    padding: 16px 32px;
    align-items: center;
    border-radius: 12px;
`;
const Vehu = styled.View`
    align-items: center;
`;
export default class Send extends Component {
    constructor(props) {
        super();
        this.state=
        {
         amount:"0",
         erreur:'',
         showWarning: false    
        }
    }
    componentWillMount()
        {
            BackHandler.addEventListener('hardwareBackPress', function () {           
                return true;
              });

              
        }

        send = () =>
        {
           if (this.state.amount.length > 1) {
            this.props.navigation.navigate('Receptor', {amount: this.state.amount})
           }
           else {
            this.setState({showWarning: true})
            this.setState({erreur: 'Le montant doit être plus de 10€'})
           }
        }

        pressKey =(item, index) =>

        {
    
            if (index == 10) {
                var amount= "0";
            }
            else {
            if (this.state.amount.length < 4) {
                if (this.state.amount=="0") {
                    var amount = item;
                   }
                   else {
                   var amount = this.state.amount+item;
                   }
            }
            else
            {
                this.setState({showWarning: true})
                this.setState({erreur: 'Pas plus de 10000€/transfert'})
                var amount ="0"
            }
           
            }
            
        
        this.setState({amount: amount
        })
        }

    render() {
        return (            
            
            <Container>
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
                <StatusBar backgroundColor='#292929' barStyle="light-content"/>
                    <Vehu>    
             <Text style={[ styles.title, {justifyContent: 'center', alignItems: 'center'}]}>Envoi Tsédé</Text>  
                    </Vehu>
                 <Amount>
                    <Text style={[styles.title, {justifyContent: 'center', fontSize: 33}]}>€{this.state.amount}</Text>
                     <Text style={[{justifyContent: 'center', fontSize: 15, color: '#727479',}]}>Choisis la somme à envoyer</Text>
                 </Amount>

                 <Sendo onPress={this.send}>

                    <Text style={[{justifyContent: 'center', fontSize: 15, color: '#ffffff'}]}> Tchoko {this.state.amount}€</Text>

                 </Sendo>
                 <Keypad>
                 <NumberPad onPress={this.pressKey}/>
                 </Keypad>
            </Container>
            
          )
    }
}

const {height} = Dimensions.get("screen");
const {width} = Dimensions.get("screen");
const width_cus = width*0.95;
const padding_modal = height - 370

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
  warning_button:{
    backgroundColor:'#00ffff',
    borderBottomLeftRadius:20,
    borderBottomRightRadius:20,
  }
});