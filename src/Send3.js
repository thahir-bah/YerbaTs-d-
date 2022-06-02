import React, { Component } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    Dimensions,
    StyleSheet,
    StatusBar,
    BackHandler,
    Image,
    ScrollView,
    SafeAreaView,
    Button
} from 'react-native';
import BottomNavigator from "./BottomNavigator.js";
import * as Animatable from 'react-native-animatable';
import LinearGradient from 'react-native-linear-gradient';
import AsyncStorage from '@react-native-async-storage/async-storage';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';



const getData = async (id) => {
    try {
        const value = await AsyncStorage.getItem(id)
        return value
    } catch (e) {
        console.log(e)
    }
};


export default class Send3 extends Component {
    constructor(props) {
        super();
        this.state = {
            nom: '',
            prenom: '',
            mail: '',
            id_util:'',
            numero: '',
            code_parr: '',
            montant_envoye: 0,
            montant_code_parr: 0,
        }
    }




    componentWillMount() {
        BackHandler.addEventListener('hardwareBackPress', function () {
            return true;
        });

        getData('id_util').then(result => { this.setState({id_util: result }) })
        getData('nom').then(result => { this.setState({ nom: result }) });
        getData('prenom').then(result => { this.setState({ prenom: result }) });
        getData('mail').then(result => { this.setState({ mail: result }) });
        getData('numero').then(result => { this.setState({ numero: result }) });
        getData('code').then(result => { this.setState({ code_parr: result }) });

    }


    priseinfo = () => {

        var Data = {
            id_util: this.state.id_util,
            code_parr: this.state.code_parr
        }
        

        fetch("https://yerbatsede.ml/get_transaction_code.php", {
            method: 'POST',
            mode: 'no-cors',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(Data)
        }).then((response) => response.json())
            .then((responseJson) => {
                // Showing response message coming from server after inserting records.
                
                this.setState({ montant_envoye: responseJson[0].MontantEnvoye})
                this.setState({ montant_code_parr: responseJson[0].MontantParr})
                
            }).catch((error) => {
                console.error(error);
            });

    }



    render() {
        return (

            <SafeAreaView style={styles.container}>
                <StatusBar backgroundColor='#292929' barStyle="light-content" />
                <View style={styles.header}>

                    <Text style={[styles.title, { justifyContent: 'center', alignItems: 'center' }]}>Profil</Text>
                </View>
                <Animatable.View
                    animation="fadeInUpBig"
                    style={[styles.footer]}>
                    <ScrollView style={[{ height: 2000 }]}>
                        <View style={styles.header}>
                            <Text style={[styles.title2, { justifyContent: 'center', alignItems: 'center', fontSize: 20, fontWeight: 'bold', marginTop: 20 }]}>I N F O S</Text>
                        </View>
                        <View style={[{
                            width: '100%', justifyContent: 'center',
                            alignItems: 'center', marginBottom: 5
                        }]}>
                            <View style={styles.infobox}>
                            <View style={[{
                                    width: '48%', justifyContent: 'center',
                                     height: '80%'
                                }]}>
                                    <View style={[{
                                        width: '100%', height: 62.5, justifyContent: 'center', marginTop: 0,
                                         borderBottomWidth: 2, borderBottomColor: '#ccccc9', paddingLeft: 20 
                                    }]}>
                                        <Text style={[styles.text3]}>
                                            Nom:
                                        </Text>
                                    </View>
                                    <View style={[{
                                        width: '100%', height: 62.5, justifyContent: 'center', marginTop: 0,
                                         borderBottomWidth: 2, borderBottomColor: '#ccccc9', paddingLeft: 20 
                                    }]}>
                                        <Text style={[styles.text3]}>
                                            Prénom:
                                        </Text>
                                    </View>
                                    <View style={[{
                                        width: '100%', height: 62.5, justifyContent: 'center',
                                         borderBottomWidth: 2, borderBottomColor: '#ccccc9', paddingLeft: 20 
                                    }]}>
                                        <Text style={[styles.text3]}>
                                            Adresse:
                                        </Text>
                                    </View>
                                    <View style={[{
                                        width: '100%', height: 62.5, justifyContent: 'center', marginTop: 0, paddingLeft: 20 
                                        
                                    }]}>
                                        <Text style={[styles.text3]}>
                                            Numéro:
                                        </Text>
                                    </View>
                                </View>
                                <View style={[{
                                    width: '48%', justifyContent: 'center',
                                    alignItems: 'center', height: '80%'
                                }]}>
                                    <View style={[{
                                        width: '100%', height: 62.5, justifyContent: 'center', marginTop: 0,
                                        alignItems: 'center', borderBottomWidth: 2, borderBottomColor: '#ccccc9'
                                    }]}>
                                        <Text style={[styles.text3, { color: '#3b5617', fontWeight: 'bold' }]}>
                                            {this.state.nom}
                                        </Text>
                                    </View>
                                    <View style={[{
                                        width: '100%', height: 62.5, justifyContent: 'center', marginTop: 0,
                                        alignItems: 'center', borderBottomWidth: 2, borderBottomColor: '#ccccc9',
                                    }]}>
                                        <Text style={[styles.text3, { color: '#3b5617', fontWeight: 'bold' }]}>
                                            {this.state.prenom}
                                        </Text>
                                    </View>
                                    <View style={[{
                                        width: '100%', height: 62.5, justifyContent: 'center',
                                        alignItems: 'center', borderBottomWidth: 2, borderBottomColor: '#ccccc9',
                                    }]}>
                                        <Text style={[styles.text3, { color: '#3b5617', fontWeight: 'bold' }]}>
                                            {this.state.mail}
                                        </Text>
                                    </View>
                                    <View style={[{
                                        width: '100%', height: 62.5, justifyContent: 'center', marginTop: 0,
                                        alignItems: 'center'
                                    }]}>
                                        <Text style={[styles.text3, { color: '#3b5617', fontWeight: 'bold' }]}>
                                            {this.state.numero}
                                        </Text>
                                    </View>
                                </View>
                            </View>
                        </View>

                        <View style={styles.header}>
                            <Text style={[styles.title2, { justifyContent: 'center', alignItems: 'center', fontSize: 20, fontWeight: 'bold' }]}>M O N T A N T S   E T   C O D E S </Text>
                        </View>
                        <View style={[{
                            width: '100%', justifyContent: 'center',
                            alignItems: 'center', marginBottom: 5
                        }]}>
                            <View style={styles.infobox2}>
                                <View style={[{
                                    width: '48%', justifyContent: 'center',
                                    height: '80%'
                                }]}>
                                    <View style={[{
                                        width: '100%', height: 62.5, justifyContent: 'center', marginTop: 0,
                                         borderBottomWidth: 2, borderBottomColor: '#ccccc9', paddingLeft: 20 
                                    }]}>
                                        <Text style={[styles.text3]}>
                                            Montant envoyé:
                                        </Text>
                                    </View>
                                    <View style={[{
                                        width: '100%', height: 62.5, justifyContent: 'center', marginTop: 0,
                                         borderBottomWidth: 2, borderBottomColor: '#ccccc9', paddingLeft: 20 
                                    }]}>
                                        <Text style={[styles.text3]}>
                                            Montant parrainage:
                                        </Text>
                                    </View>
                                    <View style={[{
                                        width: '100%', height: 62.5, justifyContent: 'center', paddingLeft: 20 
                                    }]}>
                                        <Text style={[styles.text3]}>
                                            Code parrainage:
                                        </Text>
                                    </View>

                                </View>
                                {this.priseinfo()}
                                <View style={[{
                                    width: '48%', justifyContent: 'center',
                                    alignItems: 'flex-end', height: '80%'
                                }]}> 
                                    <View style={[{
                                        width: '100%', height: 62.5, justifyContent: 'center', marginTop: 0,
                                         borderBottomWidth: 2, borderBottomColor: '#ccccc9',alignItems: 'flex-end', paddingRight: 20 
                                    }]}>
                                        <Text style={[styles.text3, { color: '#3b5617', fontWeight: 'bold' }]}>
                                            {this.state.montant_envoye}
                                        </Text>
                                    </View>
                                    <View style={[{
                                        width: '100%', height: 62.5, justifyContent: 'center', marginTop: 0,
                                         borderBottomWidth: 2, borderBottomColor: '#ccccc9',alignItems: 'flex-end', paddingRight: 20 
                                    }]}>
                                        <Text style={[styles.text3, { color: '#3b5617', fontWeight: 'bold' }]}>
                                        {this.state.montant_code_parr}
                                        </Text>
                                    </View>
                                    <View style={[{
                                        width: '100%', height: 62.5, justifyContent: 'center',alignItems: 'flex-end', paddingRight: 20 
                                    }]}>
                                        <Text style={[styles.text3, { color: '#3b5617', fontWeight: 'bold' }]}>
                                        {this.state.code_parr}
                                        </Text>
                                    </View>
                                   
                                </View>
                            </View>
                        </View>
                    </ScrollView>
                </Animatable.View>
            </SafeAreaView>
        )
    }
}

const { height } = Dimensions.get("screen");
const height_logo = height * 0.35;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#292929'
    },
    header: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    footer: {
        flex: 7,
        backgroundColor: '#fff',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingTop: 5,
        paddingBottom: 1,
        paddingHorizontal: 10
    },
    logo: {
        width: height_logo,
        height: height_logo
    },
    title: {
        color: '#ffffff',
        fontSize: 20,
        fontWeight: 'bold'
    },
    title2: {
        color: '#292929',
        fontSize: 15,
        borderBottomColor: '#292929',
        borderBottomWidth: 3,
        fontWeight: ''
    },
    text2: {
        color: 'grey',
        justifyContent: 'center',
        borderBottomWidth: 2,
        borderBottomColor: '#ccccc9',
        fontSize: 14
    },
    text3: {
        color: 'grey',
        fontSize: 14,
        
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

    infobox: {
        width: '99%',
        paddingLeft: 5,
        paddingRight: 5,
        paddingBottom: 15,
        marginBottom: 40,
        marginTop: 35,
        paddingTop: 10,
        height: 300,
        backgroundColor: '#dbdbd8',
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row'
    },
    infobox2: {
        width: '99%',
        paddingLeft: 5,
        paddingRight: 5,
        paddingBottom: 15,
        marginBottom: 40,
        marginTop: 35,
        paddingTop: 0,
        height: 250,
        backgroundColor: '#dbdbd8',
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row'
    }

});