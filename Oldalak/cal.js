import React from "react";
import { render } from "react-dom";
import { StyleSheet, View,Text } from "react-native";
import InputNumberButton from "../Feladatok/inputNumberButton";

const buttons = [
    ['CLEAR','DEL'],
    ['7','8','9','÷'],
    ['4','5','6','x'],
    ['1','2','3', '-'],
    ['0','.','=','+'],
];
export default class Szamologep extends React.Component{

    constructor(){
        super()
        this.initialState = {
            displayValue:'0',
            operator:null,
            firstValue:'',
            secondValue:'',
            nextValue:false,
        }
        this.state = this.initialState;
    }

    renderButton(){
        let layouts= buttons.map((buttonRows, index)=> {
        let rowItem = buttonRows.map((buttonItems, buttonIndex)=>{
            return<InputNumberButton 
                key={'btn-'+ buttonIndex}
                handleOnPress={this.handleInput.bind(this, buttonItems)}
                value={buttonItems}/>
        });

        return <View style={styles.inputRow} key={'row-'+index}>{rowItem}</View>
    });

    return layouts
}

    handleInput=(input) =>{
        const {displayValue, operator, firstValue, secondValue, nextValue}= this.state;

        switch(input){
            case '0':
            case '1':
            case '2':
            case '3':
            case '4':
            case '5':
            case '6':
            case '7':
            case '8':
            case '9':

                this.setState({
                    displayValue: (displayValue=== '0') ? input : displayValue+input
                })
                if(!nextValue){
                    this.setState({
                        firstValue: firstValue + input
                    })
                }
                else{
                    this.setState({
                        secondValue: secondValue + input
                    })
                }
                break;
            case'+':
            case'-':
            case'÷':
            case'x':
                this.setState({
                    nextValue: true,
                    operator: input,
                    displayValue:(operator!==null? displayValue.substr(0, displayValue.length-1) :  displayValue) +input
                })
                break;
            case'.':
                let dot = displayValue.toString().slice(-1)
                this.setState({
                    displayValue:dot !== '.' ?  displayValue+input: displayValue
                })
                if(!nextValue){
                    this.setState({
                        firstValue: firstValue + input
                    })
                }
                else{
                    this.setState({
                        secondValue: secondValue + input
                    })
                }
                break;
            case '=':
                let formatOperator = (operator=='x')? '*': (operator=='÷') ? '/':operator
                let result = eval(firstValue+ formatOperator+secondValue)
                this.setState({
                    displayValue: result % 1 === 0 ? result: result.toFixed(2),
                    firstValue:result  % 1 === 0 ? result: result.toFixed(2),
                    secondValue:'',
                    operator:null,
                    nextValue:false,
                })
                break;
            
            case 'CLEAR':
                this.setState(this.initialState);
                break;
            case 'DEL':
                let string = displayValue.toString();
                let deleteString = string.substr(0,string.length-1)
                let lenght = deleteString.length;
                this.setState({
                    displayValue: length ==1 ? '0' :deleteString,
                    firstValue: length ==1 ? '' :deleteString,
                })
                break;
        }


        
    }


    render() {
        return(
            <View style={styles.container}>
                <View style={styles.eredmeny}>
                    <Text style={styles.eredmenyText}>
                        {this.state.displayValue}
                    </Text>
                </View>
                <View style={styles.bemenet}>
                    {this.renderButton()}
                </View>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container:{
        flex:1,
    },
    eredmeny:{
        flex:2,
        justifyContent:'center',
        backgroundColor:'purple',
    },
    eredmenyText:{
        color:'white',
        fontSize:80,
        fontWeight:'bold',
        padding:20,
        textAlign:'right',
    },
    bemenet:{
        flex:8,
        backgroundColor:'white'
    },
    inputRow:{
        flex:1,
        flexDirection:'row',
    }
})