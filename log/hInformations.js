import React, { useEffect, useState } from "react";
import { View,Text,StyleSheet,TouchableOpacity,FlatList } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

const HInformations=({navigation})=>{
    
    return(
        <View>
            <Text>Hii</Text>
            <View style={styles.B}>
            <TouchableOpacity style={styles.B1} onPress={()=>{navigation.navigate('Hospital DashBoard')}}>
              <Text style={styles.B2}>Go to Donate and Need Blood Section</Text>
            </TouchableOpacity>
        </View>
        </View>
    )
    }


const styles=StyleSheet.create({
    A:{
       marginBottom:30
    },
    B1:{
        alignItems:"center"
    },
    B2:{
        backgroundColor:'orange',
        padding:10,
        borderRadius:10,
        color:"white"
    }
})

export default HInformations