import React, { Component } from 'react';
import {
    View,
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
    Image,
    SafeAreaView,
    Modal
} from 'react-native';
import BottomNavigator from "./BottomNavigator.js";
import * as Animatable from 'react-native-animatable';
import LinearGradient from 'react-native-linear-gradient';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Feather from 'react-native-vector-icons/Feather';
import LottieView from 'lottie-react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const getData = async (id) => {
    try {
        const value = await AsyncStorage.getItem(id)
        return value
    } catch (e) {
        console.log(e)
    }
};

const adress = "TM37PZMTi3r9rw3NfhEY5UgD4KoukXXvn5"

export default class Payment extends Component {
    constructor(props) {
        super();
        this.state = {
            id_util: '',
            message: '',
            path: '',
            showWarning2: false,
            showWarning: false
        }
    }

    componentWillMount() {

        getData('id_util').then(result => { this.setState({ id_util: result }) })

    }


    copytext = (text) => {
        Clipboard.setString(text);
        ToastAndroid.showWithGravity("Adresse copiée", 50, ToastAndroid.TOP)
    }

    back = () => {
        this.props.navigation.goBack()

    }

    redirection = () => {

        this.props.navigation.navigate('Send')
        this.setState({ showWarning: false })


    }

    InsertRecord = () => {


        this.setState({ showWarning2: true })
        var id_util = this.state.id_util;

        var headers = {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        };

        var Data = {
            id_util: id_util,
            nom_compte: this.props.navigation.state.params.nom_compte,
            numero_compte: this.props.navigation.state.params.numero_compte,
            motif_transfert: this.props.navigation.state.params.motif_transfert,
            montant_transfert: this.props.navigation.state.params.montant_transfert + '€ (USDT)',
            operateur: this.props.navigation.state.params.operateur,
            code_parr: this.props.navigation.state.params.code_parr
        }



        fetch("https://yerbatsede.ml/insert2.php", {
            method: 'POST',
            mode: 'no-cors',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(Data)
        }).then((response) => response.text())
            .then((responseJson) => {


                if (responseJson[0].Verificateur == 1) {
                    this.setState({ message: responseJson[0].Message })
                    this.setState({ showWarning2: false })
                    this.setState({ path: true })
                    this.setState({ showWarning: true })
                }
                else {
                    this.setState({ showWarning2: false })
                    this.setState({ path: false })
                    this.setState({ showWarning: true })
                }



            }).catch((error) => {
                console.error(error);
            });




    }


    render() {
        return (
            <SafeAreaView style={styles.container}>
                <StatusBar backgroundColor='#292929' barStyle="light-content" />
                <Modal
                    visible={this.state.showWarning2}
                    transparent
                    animationType='fade'
                    hardwareAccelerated
                >
                    <View style={styles.centered_view2}>
                        <View style={styles.animationcontainer}>
                            <LottieView
                                source={require('../assets/Loading.json')}
                                autoPlay
                                loop
                            />
                        </View>
                        
                    </View>
                </Modal>
                <Modal
                    visible={this.state.showWarning}
                    transparent
                    animationType='fade'
                    hardwareAccelerated
                >
                    <View style={styles.centered_view}>
                        <View style={styles.warning_modal}>
                            <View style={styles.warning_body2}>

                                {this.state.path ?
                                    <Animatable.Image
                                        animation="bounceIn"
                                        duraton="1500"
                                        source={require('../assets/Validation.png')}
                                        style={[styles.logo, { marginTop: 25, marginBottom: 15 }]}
                                        resizeMode="stretch"
                                    />

                                    :
                                    <Animatable.Image
                                        animation="bounceIn"
                                        duraton="1500"
                                        source={require('../assets/Refus.png')}
                                        style={[styles.logo, { marginTop: 25, marginBottom: 15 }]}
                                        resizeMode="stretch"
                                    />
                                }

                                <Text style={[styles.title, { fontSize: 15, paddingBottom: 20 }]}>{this.state.message}</Text>
                                <TouchableOpacity
                                    onPress={this.redirection}
                                    style={[styles.signIn2, {

                                        width: '90%',
                                        height: 30,
                                        color: "#3b5617",
                                        borderColor: '#292929',
                                        borderWidth: 1,
                                        marginTop: 0,
                                        borderRadius: 20
                                    }]}
                                    android_ripple={{ color: '#fff' }}
                                >
                                    <LinearGradient
                                        colors={['#3b5617', '#3b5617']}
                                        style={[styles.signIn2, { height: 32, }]}
                                    >
                                        <Text style={[styles.textSign, {
                                            color: '#fff'
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
                <ScrollView>
                    <View style={styles.halfcontainer}>
                        <View style={styles.titleblock}>
                            <Text style={styles.title}>
                                Déposer USDT
                            </Text>
                        </View>
                        <View style={styles.qrcodeblock}>
                            <Image
                                source={require('../assets/QRCODE.jpg')}
                                style={[styles.logo]}
                            />
                        </View>
                        <View style={styles.notification}>
                            <Text style={styles.text}>
                                Scannez pour déposer
                            </Text>
                        </View>
                        <View style={styles.notification2}>
                            <Text style={styles.text}>
                                Envoyez seulement des USDT à cette adresse
                            </Text>
                        </View>
                        <View style={styles.notification2}>
                            <Text style={styles.text}>
                                Sinon toute autre crypto sera perdue
                            </Text>
                        </View>
                    </View>
                    <View style={styles.halfcontainer2}>
                        <View style={styles.adress_network}>
                            <View style={[{ width: '80%' }]}>
                                <Text style={styles.text2}>
                                    Adresse de dépôt USDT
                                </Text>
                                <Text style={styles.text3}>
                                    {adress}
                                </Text>
                            </View>
                            <TouchableOpacity style={styles.copybutton} onPress={() => this.copytext(adress)}>
                                <Feather
                                    name="copy"
                                    color="#ffffff"
                                    size={20}
                                />
                            </TouchableOpacity>
                            <View style={[{ marginTop: 30 }]}>
                                <Text style={styles.text2}>
                                    Réseau
                                </Text>
                                <Text style={styles.text3}>
                                    Tron (TRC20)
                                </Text>
                            </View>

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
                                    <Text style={[styles.text2, { marginBottom: 10, marginTop: 6 }]}>
                                        Montant dépôt:
                                    </Text>
                                    <Text style={[styles.text2, { marginBottom: 10, marginTop: 6 }]}>
                                        Montant à payer:
                                    </Text>
                                    <Text style={[styles.text2, { marginBottom: 10 }]}>
                                        Temps de traitement
                                    </Text>
                                    <Text style={[styles.text2, { marginBottom: 10 }]}>
                                        Temps d'arrivée:
                                    </Text>
                                </View>
                                <View style={[{
                                    width: '48%', justifyContent: 'center',
                                    alignItems: 'flex-end', height: '80%'
                                }]}>
                                    <Text style={[styles.text2, { marginBottom: 10, marginTop: 6, color: '#ffffff' }]}>
                                        {this.props.navigation.state.params.montant_transfert * 1.05} USDT
                                    </Text>
                                    <Text style={[styles.text2, { marginBottom: 10, marginTop: 6, color: '#ffffff' }]}>
                                        {this.props.navigation.state.params.montant_transfert * 659} FCFA
                                    </Text>
                                    <Text style={[styles.text2, { marginBottom: 10, color: '#ffffff' }]}>
                                        5Min-1h
                                    </Text>
                                    <Text style={[styles.text2, { marginBottom: 10, color: '#ffffff' }]}>
                                        5Min-1h
                                    </Text>
                                </View>
                            </View>
                        </View>
                        <View style={styles.notification2}>
                            <Text style={styles.text}>
                                Si le montant déposé est inférieur
                            </Text>
                        </View>
                        <View style={styles.notification2}>
                            <Text style={styles.text}>
                                au montant affiché, la somme sera perdue.
                            </Text>
                        </View>

                    </View>
                </ScrollView>
                <View style={[{
                    width: '100%', justifyContent: 'center',
                    alignItems: 'center', height: 50, backgroundColor: '#292929',
                }]}>
                    <TouchableOpacity style={[{
                        width: '40%', justifyContent: 'center',
                        alignItems: 'center', height: 35, backgroundColor: '#3b5617', borderRadius: 8
                    }]}>
                        <Text style={styles.text4} onPress={this.InsertRecord}> Prouver </Text>
                    </TouchableOpacity>
                </View>
            </SafeAreaView>

        )
    }
}

const { height } = Dimensions.get("screen");
const { width } = Dimensions.get("screen");
const height_logo = height * 0.35;
const height_container2 = height * 0.55;
const height_container = height * 0.4;
const width_cus = width * 0.95;
const padding_modal = height - 600;
const padding_modal2 = height - 600
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
        height: height_container2,
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
        width: 100,
        height: 100
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
        left: '90%',
        bottom: '20%'
    },

    infobox: {
        width: '95%',
        height: 150,
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
        marginTop: 0,
        fontSize: 12
    },
    text2: {
        color: 'grey',
        fontSize: 14
    },
    text3: {
        color: '#ffffff',
        marginTop: 0,
        fontSize: 17,
        width: '95%',
        fontWeight: 'bold'
    },
    text4: {
        color: '#ffffff',
        marginTop: 0,
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
    animationcontainer: {
        height: 100,
        width: 100,
        alignItems: 'center',
        justifyContent:'center',
    },
    centered_view2: {
        flex: 1,
        height: '100%',
        width: '100%',
        alignItems: 'center',
        justifyContent:'center',
        backgroundColor: '#00000099'
    },
    payment_view: {
        flex: 1,
        paddingTop: padding_modal2,
        alignItems: 'center',
        backgroundColor: '#00000099'
    },
    centered_view: {
        flex: 1,
        paddingTop: padding_modal,
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
    warning_button: {
        backgroundColor: '#00ffff',
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
    }
});