import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

/*import Splash from './Splash';
import Home from './Home';
import SignIn from './SignIn'
import SignUp from './SignUp'
import SignUpu from './SignUp2'*/
import Send from './src/Send'
import Send2 from './src/Send2'
import Send3 from './src/Send3'
//import BottomNavigator from './BottomNavigator'
//import {NavigationContainer} from '@react-navigation/native'
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs'

/*Splash: { screen: Splash },
    Home: { screen: Home },
    SignIn: { screen: SignIn },
    SignUp: { screen: SignUp },
    SignUpu: { screen: SignUpu },
    BottomNavigator: { screen: BottomNavigator },
    Send: { screen: Send },
    Send2: { screen: Send2 },
    Send3: { screen: Send3 },*/

const MaterialsBottomTabs = createMaterialBottomTabNavigator(
    {
        Send: { screen: Send },
        Send2: { screen: Send2 },
        Send3: { screen: Send3 },
      },
      {
        initialRouteName: 'Send',
        activeColor: '#f0edf6',
        inactiveColor: '#3e2465',
        barStyle: { backgroundColor: '#694fad' },
      }
  );


const AppNavigator = createStackNavigator({
    MaterialsBottomTabs: {
      screen: MaterialsBottomTabs,
    },
  });
  
  export default createAppContainer(AppNavigator);

