import React,{useEffect} from "react";
import { ActivityIndicator } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";    


const LoadingScreen=({navigation})=>{


    const nav=async()=>{
        navigation.navigate('HInformations')
    }
    
    const n=async()=>{
        navigation.navigate('Login')
    }

    const detectLogin=async()=>{
        const token=await AsyncStorage.getItem('token')
        if(token)
        
            
            nav()
           
        else
            navigation.navigate('Hospital Login')

    }

    useEffect(()=>{
        detectLogin()
    },[])
    return(
        <>
        <ActivityIndicator size='large' color='blue' />
        </>
    )
}

export default LoadingScreen