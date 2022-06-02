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
    SafeAreaView,
    FlatList
} from 'react-native';
import BottomNavigator from "./BottomNavigator.js";
import * as Animatable from 'react-native-animatable';
import LinearGradient from 'react-native-linear-gradient';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { ScrollView } from 'react-native-gesture-handler';

const getData = async (id) => {
    try {
        const value = await AsyncStorage.getItem(id)
        return value
    } catch (e) {
        console.log(e)
    }
};

export default class Send2 extends Component {
    constructor(props) {
        super();
        this.state = {
            dataSource: [],
            id_util: '',
            id_affichage:0,
        }
    }
    
    componentWillMount() {
        BackHandler.addEventListener('hardwareBackPress', function () {
            return true;
        });
            
    }

    priseinfo = () => {


        var Data = {
            id_util: this.state.id_util
        }
        

        fetch("https://yerbatsede.ml/get_transaction.php", {
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
                this.setState({ dataSource: responseJson[0].Transaction})
                this.setState({ id_affichage: responseJson[0].Verificateur})
                
            }).catch((error) => {
                console.error(error);
            });

    }

    componentDidMount() {
        getData('id_util').then(result => { this.setState({id_util: result }) })
           
    }

    renderItem = ( {item} ) => {

        let status_color;

        if (item.status == "Payé") {
            status_color = (
                <FontAwesome
                        color='green'
                        name="circle"
                        size={7}
                    />
            );
        }
        else if (item.status == "Rejeté") {
            status_color = (
                <FontAwesome
                        color='red'
                        name="circle"
                        size={7}
                    />
            );
        }
        else {

            status_color = (
                <FontAwesome
                        color='yellow'
                        name="circle"
                        size={7}
                    />
            );
        }
        return(
        <View style={styles.transaction}>
            <View style={styles.leftside}>
                <Text style={styles.bigtext}> +237{item.numero_compte_recep} </Text>
                <Text style={styles.smalltext}> {item.date_heure} </Text>
            </View>
            <View style={styles.rightside}>
                <Text style={styles.bigtext}> {item.montant} </Text>
                <View style={[{ flexDirection: 'row', alignItems: 'center' }]}>
                    { status_color }
                    <Text style={[styles.smalltext]}> {item.status}</Text>
                </View>
            </View>
        </View>
        )
    }



    render() {

        let affichage;

        if (this.state.id_affichage == 1) {   
            affichage = (<FlatList
                        data={this.state.dataSource}
                        renderItem={this.renderItem}
                        
                    />)
        }

        else
        {
            affichage = (<View style={[{ height: '100%', justifyContent: 'center', alignItems: 'center' }]}>
                <Text style={[{ fontSize: 14, color: '#606060' }]}>
                    Aucune transaction récente
                </Text>
            </View>)
        }

        return (
            
            <SafeAreaView style={styles.container}>
                {this.priseinfo()}
                <StatusBar backgroundColor='#292929' barStyle="light-content" />
                <View style={styles.header}>
                    <Text style={styles.title}>
                        Historique de transactions
                    </Text>
                    
                    

                </View>
                

                { affichage }
                
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
        justifyContent: 'center',
        alignItems: 'center',
        borderBottomColor: '#ccccc9',
        borderBottomWidth: 2,
        paddingBottom: 10,
        marginBottom: 20
    },
    transaction: {
        paddingBottom: 10,
        marginBottom: 20,
        marginLeft: 13,
        marginRight: 13,
        flexDirection: 'row',
        borderBottomColor: '#363636',
        borderBottomWidth: 0.2,
    },
    leftside: {
        width: '50%',
        paddingLeft: 3
    },
    rightside: {
        width: '50%',
        paddingLeft: 10,
        alignItems: 'flex-end',
        paddingRight: 3

    },
    bigtext: {
        color: '#ffffff',
        fontSize: 15
    },
    smalltext: {
        color: '#595959',
        fontSize: 12
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
        fontSize: 20,
        fontWeight: 'bold'
    },
    text: {
        color: 'grey',
        marginTop: 5
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