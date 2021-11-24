import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, SafeAreaView, Image, TouchableWithoutFeedback, KeyboardAvoidingView, Platform, TextInputBase, TextInput, TouchableOpacity, Keyboard, ScrollView } from 'react-native';
import Feladatok from '../Feladatok/feladatok';

export default function App() {
  
  const[task,setTask]= useState();
  const[taskItems, setTaskItems] = useState([]);


  const handleAddTask = () => {
    Keyboard.dismiss();
    setTaskItems([...taskItems,task]),
    setTask(null)
  }

  const deleteTask = (index) => {
    let itemsCopy = [...taskItems];
    itemsCopy.splice(index,1);
    setTaskItems(itemsCopy);
  }


  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
      <View style={styles.taskWrappers}>
        <Text style = {styles.sectionTitle}>Mai feladatok:</Text>
      </View>
      <KeyboardAvoidingView behavior={Platform.OS === "android" ? "padding":"height"} style={styles.writeTaskWrapper}>
        <TextInput style={styles.input} placeholder={'Írj egy feladatot'} value={task} onChangeText={text=>setTask(text)}></TextInput>
        <TouchableOpacity onPress={()=>handleAddTask()}>
          <View style={styles.addWrapper}>
            <Text style={styles.addText}>+</Text>
          </View>
        </TouchableOpacity>

      </KeyboardAvoidingView>


      <View style={styles.items}>
        {
          taskItems.map((item, index)=> {
          return (
          <TouchableOpacity  key={index} onPress={()=> deleteTask(index)}>
             <Feladatok text={item}/>
          </TouchableOpacity>) 
          
         
          }
          )
        }
          {/* <Feladatok text={'Egyes'}></Feladatok> */}
      </View>
      
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8eaed',
  },
  taskWrappers :{
    paddingTop: 20,
    paddingHorizontal: 20
  },
  sectionTitle :{
    fontSize:24,
    fontWeight:'bold'
  },
  items:{
    marginTop:30, 
  },

  writeTaskWrapper:{
    position:'relative',
    top: 20,
    bottom:30,
    width:'100%',
    flexDirection: 'row',
    justifyContent:'space-between',
    alignItems: 'center',
  },
  input:{
    paddingVertical:15,
    paddingHorizontal:15,
    backgroundColor: '#fff',
    borderRadius:60,
    borderColor:'#c0c0c0',
    borderWidth:1,
    width:250,
  },
  addWrapper:{
    width:60,
    height:60,
    backgroundColor:'#fff',
    justifyContent:'center',
    alignItems:'center',
    borderRadius:60,
    borderColor:'#c0c0c0',
    borderWidth:1,
  },
  addText:{},

});
