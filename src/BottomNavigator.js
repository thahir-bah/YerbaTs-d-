
import React, { Component } from 'react';
import { View, Image, StyleSheet, TouchableOpacity, TouchableWithoutFeedback, Animated, Text, Alert } from 'react-native';
import * as Animatable from 'react-native-animatable';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';

export default class BottomNavigator extends Component {

    constructor(props) {
        super(props);
        this.state= {
            idnav1: false,
            idnav2: true,
            idnav3: false,
        }  
    }

    update1 = () => {
    this.setState({idnav1: true}),
    this.setState({idnav2: false}),
    this.setState({idnav3: false}), 
    this.props.navigation.push('Send')

    }
    update2 = () => {
    this.setState({idnav2: true}),
    this.setState({idnav1: false}),
    this.setState({idnav3: false}), 
    this.props.navigation.push('Send2')

    }
    update3 = () => {
    this.setState({idnav3: true}),
    this.setState({idnav1: false}),
    this.setState({idnav2: false}), 
    this.props.navigation.push('Send3')

    }


    render() {
        return (
            <View style={{
                flex: 1,
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                

            }}>

                <View style={{

                    position: 'absolute',
                    backgroundColor:'#292929',
                    border: 2,
                    radius: 30,
                    borderRadius: 30,
                    shadowOpacity: 0.3,
                    shadowRadius: 3,
                    shadowOffset: {

                        height: 3, width: 3
                    },
                    x: 0,
                    y: 0,
                    style: { marginVertical: 5 },
                    bottom: 0,
                    width: '85%',
                    height: 70,
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    paddingVertical: 10,
                    paddingHorizontal: 15,
                    alignItems: 'center',
                    marginBottom: 30



                }}>
                    
                    {this.state.idnav1 ? 
                    <Animatable.View
                    animation="fadeInUpBig"
                    duration={1000}>
                    <View style={{
                        flexDirection: 'column', alignItems: 'center',justifyContent:'center', height:100, width:100, backgroundColor:'pink', borderRadius: 50, borderWidth:8, borderColor:'white'
                    }}>

                        <TouchableOpacity
                            onPress={this.update1}
                        >
                            <FontAwesome 
                            name="send"
                            color="black"
                            size={40}
                                />
                       
                        </TouchableOpacity>
                        <Text style={{justifyContent:'center',alignItems:'center',color:"black", fontSize:15 }}>Envoyer</Text>
                    </View>
                    </Animatable.View>
                    :
                    <Animatable.View
                    animation="fadeInUpBig"
                    duration={1000}>
                    <View style={{
                        flexDirection: 'column', alignItems: 'center', justifyContent: 'center'
                    }}>
                        <TouchableOpacity onPress={this.update1}>
                        <FontAwesome 
                    name="send"
                    color="#3b5617"
                    size={22}
                    />

                        </TouchableOpacity>
                        <Text style={{justifyContent:'center',alignItems:'center',color:"#3b5617"}}>Envoyer</Text>
                    </View>
                    </Animatable.View>
                    }
                    {this.state.idnav2 ? 
                    <View style={{
                        flexDirection: 'column', alignItems: 'center',justifyContent:'center', height:100, width:100, backgroundColor:'pink', borderRadius: 50, borderWidth:8, borderColor:'white'
                    }}>

                        <TouchableOpacity
                            onPress={this.update2}
                        >
                            <FontAwesome 
                            name="exchange"
                            color="black"
                            size={40}
                                />
                       
                        </TouchableOpacity>
                        <Text style={{justifyContent:'center',alignItems:'center',color:"black", fontSize:15 }}>P2P</Text>
                    </View>
                    : 
                    <View style={{
                        flexDirection: 'column', alignItems: 'center', justifyContent: 'center'
                    }}>
                        <TouchableOpacity onPress={this.update2}>
                        <FontAwesome 
                    name="exchange"
                    color="#3b5617"
                    size={22}
                    />

                        </TouchableOpacity>
                        <Text style={{justifyContent:'center',alignItems:'center',color:"#3b5617"}}>P2P</Text>
                    </View> 
                    }

                        
                {this.state.idnav3 ? 
                    <View style={{
                        flexDirection: 'column', alignItems: 'center',justifyContent:'center', height:100, width:100, backgroundColor:'pink', borderRadius: 50, borderWidth:8, borderColor:'white'
                    }}>

                        <TouchableOpacity
                            onPress={this.update3}
                        >
                            <FontAwesome 
                            name="user"
                            color="black"
                            size={40}
                                />
                       
                        </TouchableOpacity>
                        <Text style={{justifyContent:'center',alignItems:'center',color:"black", fontSize:15 }}>Info</Text>
                    </View>
                    : 
                    <View style={{
                        flexDirection: 'column', alignItems: 'center', justifyContent: 'center'
                    }}>
                        <TouchableOpacity onPress={this.update3}>
                        <FontAwesome 
                    name="user"
                    color="#3b5617"
                    size={22}
                    />

                        </TouchableOpacity>
                        <Text style={{justifyContent:'center',alignItems:'center',color:"#3b5617"}}>Info</Text>
                    </View> 
                    }

                    
                </View>
            </View>
        );
    }

    
}


const styles = StyleSheet.create({

    MainContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'blue'
    },
    button: {
        width: 60,
        height: 60,
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: 'grey',
        shadowOpacity: 0.1,
        shadowOffset: { x: 2, y: 0 },
        shadowRadius: 2,
        borderRadius: 30,
        position: 'absolute',
        bottom: 20,
        right: 0,
        top: 5,
        left: 5,
        shadowOpacity: 5.0,

    },
    actionBtn: {

        backgroundColor: '#1E90FF',
        textShadowOffset: { width: 5, height: 5 },
        textShadowRadius: 10,
        borderWidth: 2,
        borderColor: '#fff'


    }


});