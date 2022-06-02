import React, { Component } from 'react';
import { View } from 'react-native';
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

export default class Splash extends Component {
    constructor(props) {
        super();
        this.state = {
            token: '',
        }
    }

    componentWillMount() {

        getData('token').then(result => { this.setState({ token: result }) })

    }

    redirection_verification = () => {
        var token =this.state.token
        if  (token == "CON") {
             return( <LottieView
                    source={require('../assets/splash.json')}
                    autoPlay
                    loop={false}
                    
                    onAnimationFinish={() => {
                        console.log('Animation Finished!')
                        setTimeout(() => {this.props.navigation.push('MaterialsBottomTabs')}, 1000 )
                        
                    }}
                />) }

                else {
                return(    
                <LottieView
                    source={require('../assets/splash.json')}
                    autoPlay
                    loop={false}
                    
                    onAnimationFinish={() => {
                        console.log('Animation Finished!')
                       setTimeout(() => {this.props.navigation.push('Home')}, 1000 )
                        
                    }}
                />)}

    }

    render() {
        return (
            <View
                style={{
                    flex: 1,
                    backgroundColor: '#ffffff'
                }}
            >{this. redirection_verification()}
            </View>
        )
    }
}