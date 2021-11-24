import { AppRegistry, StyleSheet, Text, View, TouchableHighlight } from 'react-native';
import Fooldal from '../Oldalak/fooldal';
import To_Do from '../Oldalak/todo';
import Utv from '../Oldalak/utv';
import Cal from '../Oldalak/cal';
import React from "react";

const Root = StackNavigator({
    Fooldal: {
        screen: Fooldal
    },
    To_Do: {
        screen: To_Do
    },
    Utv: {
        screen: Utv
    },
    Cal: {
        screen: Cal
    },
});


export default class App extends React.Component{
    render()
    {
        return(<Root></Root>)
    }
}