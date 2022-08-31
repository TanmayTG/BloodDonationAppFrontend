import React from "react";
import {View,Text,StyleSheet} from "react-native";

const CR=()=>{
    return(
    <View style={styles.A}>
        <Text style={styles.A1}>Blood Requirement</Text>
        <View style={styles.A5}>
        <View style={styles.A4}>
        <Text style={styles.A2}>O+  </Text>
        <Text style={styles.A3}>:    Nil</Text>
        </View>
        <View style={styles.A4}>
        <Text style={styles.A2}>O-  </Text>
        <Text style={styles.A3}>:    Nil</Text>  
        </View>
        <View style={styles.A4}>     
        <Text style={styles.A2}>A+  </Text>
        <Text style={styles.A3}>:    Nil</Text>
        </View>
        <View style={styles.A4}>
        <Text style={styles.A2}>A-  </Text>
        <Text style={styles.A3}>:    Nil</Text>
        </View>
        <View style={styles.A4}>
        <Text style={styles.A2}>B+  </Text>
        <Text style={styles.A3}>:    Nil</Text>
        </View>
        <View style={styles.A4}>
        <Text style={styles.A2}>B-  </Text>
        <Text style={styles.A3}>:    Nil</Text>
        </View>
        <View style={styles.A4}>
        <Text style={styles.A2}>AB+ </Text>
        <Text style={styles.A3}>:    Nil</Text>
        </View>
        <View style={styles.A4}>
        <Text style={styles.A2}>AB- </Text>
        <Text style={styles.A3}>:    Nil</Text>
        </View>
        </View>
    </View>
    );
}

const styles=StyleSheet.create({
     A:{
        alignItems:'center',
        backgroundColor:'#8fcbbc',
        height:"100%"
     },
     A1:{
         backgroundColor:'pink',
         padding:5,
         width:'100%',
         textAlign:'center',
         fontSize:30
     },
     A2:{
         fontSize:30,
         width:"20%"
     },
     A3:{
         fontSize:30,
        
     },
     A4:{
         flexDirection:'row'
     },
     A5:{
         width:"80%",
     }
})

export default CR;