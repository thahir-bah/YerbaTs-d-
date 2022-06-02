import React from "react";
import { View } from "react-native";
import { createAppContainer } from "react-navigation";
import { createBottomTabNavigator } from "react-navigation-tabs";
import FontAwesome5 from 'react-native-vector-icons/FontAwesome';

import { JournalScreen, MeasuresScreen, TreatmentScreen, ProfileScreen } from "./screens";
import {Send} from "./Send";


const TabNavigator = createBottomTabNavigator();

const Tabs = () => {
    return(
        <TabNavigator.Navigator>
        <TabNavigator.Screen name="Tinyè" ccomponent={Send}/>
        <TabNavigator.Screen name="Okamo" ccomponent={Send}/>
        </TabNavigator.Navigator>
    );
}


export default  Tabs; 

