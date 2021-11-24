import React from "react";
import { StyleSheet, View,Text, Image, TouchableOpacity, Button} from "react-native";

export default function Hattergomb({onPress}){
    return(
        <TouchableOpacity >
            <View >
                 <Button style={styles.button}></Button>
            </View>
        </TouchableOpacity>
        )
}

const styles = StyleSheet.create({
    button:{
        opacity:0,
        height: '100%', 
        width:'100%', 
        position:'absolute'
    }
})
