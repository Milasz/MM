
import * as React from 'react';
import { Button,View, Text, Image, StyleSheet, ImageBackground, TouchableOpacity, ScrollView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Todo from './Oldalak/todo';
import Fomenu from './Oldalak/fooldal';
import Szamologep from './Oldalak/cal';
import Tic from './Oldalak/tictactoe';


function HomeScreen({navigation}) {
  return (
    <View style={{ }}>
      <ScrollView>      
      <Image source={require('./assets/hatter.png')} alt="kep" width='100%' height='100'/>
      <Button 
        title="Menübe lépés"
        onPress={() => navigation.navigate('Valaszto')}
      />
      </ScrollView>
    </View>
  );
}
function ValasztoScreen({navigation}) {
    return (
      <View style={{ flex: 1,  padding:20}}>
        <Text>Mivel szeretnél foglalkozni?</Text>
        <Button
            title="Számológépre van szükségem"
            onPress={() => navigation.push('Szamologep')}
        />
        <Button
            title="Mai feladataim"
            onPress={() => navigation.push('Todo')}
        />
        <Button
            title="Játszani szeretnék"
            onPress={() => navigation.push('Tic')}
        />
      </View>
    );
  }
  function SzamoloScreen({navigation}) {
    return (
      <Szamologep></Szamologep>
      
    );
  }
  function TodoScreen({navigation}) {
    return (
      <Todo></Todo>
    );
  }
  function TicScreen({navigation}) {
    return (
      <Tic></Tic>
      
    );
  }

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} options={
          {
            title:'Home',
            headerStyle: {
              backgroundColor: '#f4511e',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
            fontWeight: 'bold',            
          },
          }} />
        <Stack.Screen name="Valaszto" component={ValasztoScreen} options={{title:'Fő menu',
          headerStyle:{
            backgroundColor:'cyan',
          },          
          headerTintColor: '#fff',
          headerTitleStyle: {
          fontWeight: 'bold',
          color : 'black'
          },}} />
        <Stack.Screen name="Szamologep" component={SzamoloScreen} options={{title:'Számológép'}}/>
        <Stack.Screen name="Todo" component={TodoScreen}  options={{title:'Teendők'}}/>
        <Stack.Screen name="Tic" component={TicScreen} options={{title:'Tic-Tac-Toe'}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}


const styles = StyleSheet.create({
    fomenu:{
        opacity:0,
        height: '100%', 
        width:'100%', 
        position:'relative'
    }
})

export default App;