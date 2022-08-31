import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import HospitalData from "./HMenu/HospitalData";
import AvailBlood from "./HMenu/Available";
import Requirement from "./HMenu/Requirement";


const Tab = createBottomTabNavigator();

const HTabs = () =>{
    return(
        <Tab.Navigator>
            <Tab.Screen name="Hospital" component={HospitalData} options={{ headerShown: false }} />
            <Tab.Screen name="Available" component={AvailBlood} options={{ headerShown: false }} />
            <Tab.Screen name="Requirement" component={Requirement} options={{ headerShown: false }} />
        </Tab.Navigator>
    )
}

export default HTabs;