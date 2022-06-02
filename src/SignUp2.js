import React, { Component } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    TextInput,
    Platform,
    StyleSheet,
    StatusBar,
    Modal,
    Dimensions,
    Alert
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import LinearGradient from 'react-native-linear-gradient';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import LottieView from 'lottie-react-native';




export default class SignUpu extends Component {
    constructor(props) {
        super();
        this.state = {
            id: '',
            path: false,
            erreur: '',
            password: '',
            password2: '',
            showWarning: false,
            showWarning2: false,
            secureTextEntry: true,

        }

    }

    validate = (value) => {
        const regx = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        return regx.test(value)
    }

    redirection = () => {

        this.props.navigation.navigate('SignIn')
        this.setState({ showWarning: false })


    }

    InsertRecord = () => {

        var email = this.state.id;
        var password = this.state.password;
        var password2 = this.state.password2;
        this.setState({ showWarning2: true })

        if (email.length == 0 || password.length == 0 || password2.length == 0) {
            this.setState({ erreur: 'Un champs manque' })
            this.setState({ showWarning: true })
            this.setState({ showWarning2: false })

        }
        else if (!this.validate(email)) {
            this.setState({ erreur: 'Ton E-mail n\'est pas correct! Réessaie' })
            this.setState({ showWarning: true })
            this.setState({ showWarning2: false })

        }
        else if (password.length < 8) {
            this.setState({ erreur: 'Ton MDP c\'est minimum 8 caractères' })
            this.setState({ showWarning: true })
            this.setState({ showWarning2: false })

        }
        else if (password != password2) {
            this.setState({ erreur: 'Les mots de passe sont différents' })
            this.setState({ showWarning: true })
            this.setState({ showWarning2: false })

        }
        else {
            var headers = {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            };

            var Data = {
                nom: this.props.navigation.state.params.nom,
                prenom: this.props.navigation.state.params.prenom,
                phoneNumber: this.props.navigation.state.params.phoneNumber,
                email: email,
                password: password
            }

            fetch("https://yerbatsede.ml/insert.php", {
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
                    this.setState({ erreur: responseJson[0].Message })
                    if (responseJson[0].Verificateur == 1) {
                        this.setState({ path: true })
                        this.setState({ showWarning2: false })
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


    }


    updateSecureTextEntry = () => {

        this.setState({ secureTextEntry: !this.state.secureTextEntry })
    }

    updateconfirmSecureTextEntry = () => {

        this.setState({ secureconfirmTextEntry: !this.state.secureconfirmTextEntry })
    }



    render() {
        return (

            <View style={styles.container}>
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
                            <View style={styles.warning_body}>

                                {this.state.path ?
                                    <Animatable.Image
                                        animation="bounceIn"
                                        duraton="1500"
                                        source={require('../assets/Validation.png')}
                                        style={[styles.logo, { marginTop: 45, marginBottom: 15 }]}
                                        resizeMode="stretch"
                                    />

                                    :
                                    <Animatable.Image
                                        animation="bounceIn"
                                        duraton="1500"
                                        source={require('../assets/Refus.png')}
                                        style={[styles.logo, { marginTop: 45, marginBottom: 15 }]}
                                        resizeMode="stretch"
                                    />
                                }
                                <Text style={[styles.title, { fontSize: 20, paddingBottom: 20 }]}>{this.state.erreur}</Text>
                                <TouchableOpacity
                                    onPress={this.redirection}
                                    style={[styles.signIn, {

                                        width: '90%',
                                        height: 32,
                                        color: "#3b5617",
                                        borderColor: '#292929',
                                        borderWidth: 1,
                                        marginTop: 0,
                                        borderRadius: 30
                                    }]}
                                    android_ripple={{ color: '#fff' }}
                                >
                                    <LinearGradient
                                        colors={['#3b5617', '#3b5617']}
                                        style={[styles.signIn, { height: 32, }]}
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
                <StatusBar backgroundColor='#292929' barStyle="light-content" />
                <View style={styles.header}>
                    <Text style={styles.title}>Ouvre ton compte! 🏦</Text>
                </View>
                <Animatable.View
                    animation="fadeInUpBig"
                    style={[styles.footer]}
                >

                    <Text style={[styles.text_footer]}>Ton E-mail</Text>
                    <View style={styles.action}>
                        <FontAwesome
                            name="envelope"
                            color="#3b5617"
                            size={20}
                        />
                        <TextInput
                            placeholder="Par ici"
                            placeholderTextColor="#666666"
                            style={[styles.textInput]}
                            autoCapitalize="none"
                            onChangeText={id => this.setState({ id })}
                        />
                        <Animatable.View
                            animation="bounceIn"
                        >

                        </Animatable.View>

                    </View>
                    <Text style={[styles.text_footer, {
                        marginTop: 35
                    }]}>Ton mot de passe</Text>
                    <View style={styles.action}>
                        <Feather
                            name="lock"
                            color="#3b5617"
                            size={20}
                        />
                        <TextInput {...this.props}
                            placeholder="Setup le bien"
                            secureTextEntry={this.state.secureTextEntry}
                            placeholderTextColor="#666666"
                            style={[styles.textInput]}
                            autoCapitalize="none"
                            onChangeText={password => this.setState({ password })}
                        />
                        <TouchableOpacity onPress={this.updateSecureTextEntry}
                        >
                            {this.state.secureTextEntry ?
                                <Feather
                                    name="eye-off"
                                    color="grey"
                                    size={20}
                                />
                                :
                                <Feather
                                    name="eye"
                                    color="grey"
                                    size={20}
                                />
                            }

                        </TouchableOpacity>
                    </View>
                    <Text style={[styles.text_footer, {
                        marginTop: 35
                    }]}>Confirme mot de passe</Text>
                    <View style={styles.action}>
                        <Feather
                            name="lock"
                            color="#3b5617"
                            size={20}
                        />
                        <TextInput {...this.props}
                            placeholder="Ne te rate pas"
                            secureTextEntry={this.state.secureconfirmTextEntry}
                            placeholderTextColor="#666666"
                            style={[styles.textInput]}
                            autoCapitalize="none"
                            onChangeText={password2 => this.setState({ password2 })}
                        />
                        <TouchableOpacity onPress={this.updateconfirmSecureTextEntry}
                        >
                            {this.state.secureconfirmTextEntry ?
                                <Feather
                                    name="eye-off"
                                    color="grey"
                                    size={20}
                                />
                                :
                                <Feather
                                    name="eye"
                                    color="grey"
                                    size={20}
                                />
                            }

                        </TouchableOpacity>
                    </View>
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
                                    color: '#fff'
                                }]}>Valides ton compte</Text>
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

const { height } = Dimensions.get("screen");
const { width } = Dimensions.get("screen");
const width_cus = width * 0.95;
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
    warning_button: {
        backgroundColor: '#00ffff',
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
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