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
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome';
import Splash from './Splash';
import Home from './Home';
import SignIn from './SignIn'
import SignUp from './SignUp'
import SignUpu from './SignUp2'
import Loading from './Loading'
import Send from './Send'
import Send2 from './Send2'
import Send3 from './Send3'
import Receptor from './Receptor'
import Payment from './Payment'
import Payment2 from './Payment2'
import Payment3 from './Payment3'

var token=0;

//getData('id_util').then(result => { token })
       


const MaterialsBottomTabs = createMaterialBottomTabNavigator(
    {
        Send: { screen: Send,
            tabBarLabel:'Send',
            navigationOptions:{
                tabBarIcon: ({ tintColor, focused }) =>  (
                    focused ?
                    <View style={{
                        flexDirection: 'column', alignItems: 'center' ,justifyContent:'center', paddingBottom: 11, height:45, width:45, backgroundColor:'pink', borderRadius: 27.5, borderWidth:3, borderColor:'white'
                    }}>
                        <FontAwesome5 
                        style={[{ color: tintColor}]}
                        name="send"
                        size={20}
                        />
                    </View>
                    :
                    <View style={{
                        flexDirection: 'column', alignItems: 'center',justifyContent:'center', height:45, width:45
                    }}>
                        <FontAwesome5 
                        style={[{ color: tintColor}]}
                        name="send"
                        size={17}
                        />
                    </View>

                ),
            
            },
        },
        Send2: { screen: Send2,
            navigationOptions:{
                tabBarLabel:'HIS',
                tabBarIcon: ({ tintColor, focused }) =>  (
                    focused ?
                    <View style={{
                        flexDirection: 'column', alignItems: 'center', height:45, width:45, backgroundColor:'pink', borderRadius: 27.5, borderWidth:3, borderColor:'white'
                    }}>
                        <FontAwesome5 
                        style={[{ color: tintColor}]}
                        name="history"
                        size={25}
                        />
                    </View>
                    :
                    <View style={{
                        flexDirection: 'column', alignItems: 'center',justifyContent:'center', height:45, width:45
                    }}>
                        <FontAwesome5 
                        style={[{ color: tintColor}]}
                        name="history"
                        size={20}
                        />
                    </View>

                ),
                
            }, },
        Send3: { screen: Send3,
            navigationOptions:{
                tabBarLabel:'Info',
                tabBarIcon: ({ tintColor, focused }) =>  (
                    focused ?
                    <View style={{
                        flexDirection: 'column', alignItems: 'center', height:45, width:45, backgroundColor:'pink', borderRadius: 27.5, borderWidth:3, borderColor:'#292929'
                    }}>
                        <FontAwesome5 
                        style={[{ color: tintColor}]}
                        name="user"
                        size={25}
                        />
                    </View>
                    :
                    <View style={{
                        flexDirection: 'column', alignItems: 'center',justifyContent:'center', height:45, width:45
                    }}>
                        <FontAwesome5 
                        style={[{ color: tintColor}]}
                        name="user"
                        size={20}
                        />
                    </View>

                ),
                barStyle: { backgroundColor: '#ffffff', height: 110, padding:10 },
                
            }, },
      },
      {
        initialRouteName: 'Send',
        shifting: true,
        activeColor: '#292929',
        inactiveColor: '#727479',
        labelStyle: { paddingTop: 30, fontsize: 10 },
        tabBarIconStyle: { height: 140, padding:10 },
        barStyle: { backgroundColor: '#292929', height: 110, padding:10 },
      }
  );

const MainNavigator = createStackNavigator({
    Splash: { screen: Splash },
    Home: { screen: Home },
    SignIn: { screen: SignIn },
    Loading: { screen: Loading },
    SignUp: { screen: SignUp },
    SignUpu: { screen: SignUpu },  
  MaterialsBottomTabs: {
        screen: MaterialsBottomTabs,
      },
   Receptor: { screen: Receptor },
   Payment: { screen: Payment },
   Payment2: { screen: Payment2 },
   Payment3: { screen: Payment3 },

    
}, {
    headerMode: 'none',
    navigationOptions: {
        headerVisible: false,
    }
});

export default createAppContainer(
    MainNavigator
);