import React, { Component } from 'react';
import { 
    View, 
    Text, 
    TouchableOpacity, 
    TextInput,
    Platform,
    StyleSheet ,
    StatusBar,
    ScrollView,
    Modal,
    Dimensions,
    Alert
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import LinearGradient from 'react-native-linear-gradient';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import PhoneInput from 'react-native-phone-number-input';
//import SQLite from 'react-native-sqlite-storage';



export default class SignUp extends Component {
    constructor(props) {
        super();
        this.state= {
            nom: '',
            erreur:'',
            prenom: '',
            password2: '',
            phoneNumber: '',
            showWarning: false
        }
        
    }

    validatenumber = (p) =>
     {
        var phoneRe = /^\$/;
        return phoneRe.test(p);
      }

    InsertRecord = () => 
    {

        var nom= this.state.nom;
        var prenom= this.state.prenom;
        var phoneNumber= this.state.phoneNumber;
    

        if(nom.length==0 || prenom.length==0 )
        {
            this.setState({erreur: 'Un champs manque'})
            this.setState({showWarning: true})
        }
        else if(phoneNumber.length == 2){

            this.setState({erreur: 'Le numéro manque'})
            this.setState({showWarning: true})
        }
        else if(phoneNumber.length < 6){
            this.setState({erreur: 'Ce numéro est trop court'})
            this.setState({showWarning: true})
        }
        else
        {
            
        this.props.navigation.navigate('SignUpu', {nom: nom, prenom: prenom,phoneNumber: phoneNumber})
            
        }


    }
    

    render() {
        return (
            
            
            <View style={styles.container}>
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
                  source={require('../assets/Refus.png')}
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
                <View style={styles.header}>
            <Text style={styles.title}>Ouvre ton compte! 🏦</Text>
        </View>
                <Animatable.View 
            animation="fadeInUpBig"
            style={[styles.footer]}
        >
        <ScrollView>
        <Text style={[styles.text_footer]}>Ton nom</Text>
        <View style={styles.action}>
            <FontAwesome
                name="user-o"
                color="#3b5617"
                size={20}
            />
            <TextInput 
                placeholder="Par ici"
                placeholderTextColor="#666666"
                style={[styles.textInput]}
                autoCapitalize="none"
                onChangeText={nom => this.setState({nom})}
            />
            <Animatable.View
                animation="bounceIn"
            >
                
            </Animatable.View>

        </View>
        <Text style={[styles.text_footer, {
            marginTop: 35
        }]}>Ton prenom</Text>
        <View style={styles.action}>
        <FontAwesome
                name="user"
                color="#3b5617"
                size={20}
            />
            <TextInput {...this.props}
                placeholder="Toujours là"
                placeholderTextColor="#666666"
                style={[styles.textInput]}
                autoCapitalize="none"
                onChangeText={prenom => this.setState({prenom})}
            />
        </View>
        <View style={styles.phonePlace}>
        <PhoneInput defaultValue = {this.phoneNumber}
    
        placeholder="Ton numéro"
        defaultCode="FR"
         onChangeFormattedText={(phoneNumber) => {this.setState({phoneNumber})} }/>
         </View>
        </ScrollView>
            <View style={styles.button}>
                <TouchableOpacity
                    style={styles.signIn}
                    onPress={this.InsertRecord}
                >
                <LinearGradient
                    colors={['#707070', '#292929']}
                    style={styles.signIn}
                >
                    <Text style={[styles.textSign, {
                        color:'#fff'
                    }]}>On continue</Text>
                </LinearGradient>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={() => this.props.navigation.navigate('SignIn')}
                    style={[styles.signIn, {
                        borderColor: '#292929',
                        borderWidth: 1,
                        marginTop: 15
                    }]}
                >
                    <Text style={[styles.textSign, {
                        color: '#292929'
                    }]}> Déjà un compte ? Connecte-toi </Text>
                </TouchableOpacity>
            </View>
            </Animatable.View>
            </View>
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
        flex: 1,
        justifyContent: 'flex-end',
        paddingHorizontal: 20,
        paddingBottom: 50
    },
    title: {
        color: '#ffffff',
        fontSize: 30,
        fontWeight: 'bold'
    },
    footer: {
        flex: 3,
        backgroundColor: '#fff',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingHorizontal: 20,
        paddingVertical: 30
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
      },
    textInput: {
        flex: 1,
        marginTop: Platform.OS === 'ios' ? 0 : -12,
        paddingLeft: 10,
        color: '#3b5617',
        fontSize: 17,
    },
    errorMsg: {
        color: '#FF0000',
        fontSize: 14,
    },
    button: {
        alignItems: 'center',
        marginTop: 50
    },
    signIn: {
        width: '100%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10
    },
    textSign: {
        fontSize: 18,
        fontWeight: 'bold'
    }
});