import { StyleSheet, Text, View } from 'react-native'

import LottieView from 'lottie-react-native';


import React, { Component } from 'react'

export default class Loading extends Component {
  render() {
    return (
        <View styles={[StyleSheet.absoluteFillObject, styles.container]}>
        <LottieView
            source={require('../assets/Loading.json')}
            autoPlay
            loop
        />
    </View>
    )
  }
}



const styles = StyleSheet.create({

    container: {

        justifyContent: 'center',
        alignItems: 'center'
    }
})