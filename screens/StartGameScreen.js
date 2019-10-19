import React ,{useState} from 'react';
import { 
    StyleSheet, 
    Text, 
    View,
    Button,
    TouchableWithoutFeedback,
    Keyboard,
    Alert
} from 'react-native';

import Card from '../components/Card';
import Colors from '../constants/colors';
import Input from '../components/input';
import NumberContainer from '../components/numberContainer';

const StartGameScreen=props=>{

    //react hooks
    const [enteredValue,setEnteredValue]=useState();
    const [confirmed,setConfirmed]=useState(false);
    const [selectedNumber,setSelectedNumber]=useState();
   
    const numberInputHandler=(inputText)=>{
        //reg expression to replace anything not 0-9 in the entire text
        setEnteredValue(inputText.replace(/[^0-9]/g),'');
    };
    
    const resetInputHandler=()=>{
        setEnteredValue('');
        setConfirmed(false);
    }

    const confirmInputHandler=()=>{
        
        const chosenNumber=parseInt(enteredValue);
        if(isNaN(chosenNumber) || chosenNumber<=0 || chosenNumber>99){
            Alert.alert('Invalid Number','Your number has to be 1 to 99',
            [{
                text:'ok',
                style:'destructive',
                onPress:resetInputHandler
            }])
            return;
        }

        setConfirmed(true);        
        setSelectedNumber(chosenNumber);
        setEnteredValue('');
        //close the keyboard from screen after input      
        Keyboard.dismiss();  
    };


    let confirmedOutput;
    if(confirmed){
        confirmedOutput=(
            <Card style={styles.summaryContainer}>
                <Text>You selected</Text>
                
                <NumberContainer>{selectedNumber}</NumberContainer>
                <Button title="START GAME" onPress={()=>onStartGame(selectedNumber)}/>
            </Card>
        );
    }

    return(
        <TouchableWithoutFeedback onPress={()=>{Keyboard.dismiss()}}>
        <View style={styles.screen}>            
            <Text style={styles.title}>Start a New Game!</Text>
            <Card style={styles.inputContainer}>

                <Text>Select a Number</Text>
                
                <Input style={styles.input} 
                    blurOnSubmit
                    autoCapitalize='none'
                    autoCorrect={false}
                    keyboardType='number-pad'
                    maxLength={2}
                    /** */
                    onChangeText={numberInputHandler}
                    value={enteredValue}
                />
                    <View style={styles.buttonContainer}>
                    
                    {/**problems wrapping view around buttons */}
                    <Button title="Reset" onPress={resetInputHandler} color={Colors.secondary} /> 
                    <Button title="Confirm" onPress={confirmInputHandler} color={Colors.primary} />

                    </View>
                
            </Card>
            {confirmedOutput}
        </View>
        </TouchableWithoutFeedback>
    )
};

const styles=StyleSheet.create({
    screen:{
        flex:1,
        padding:10,
        alignItems:'center',        
    },
    buttonContainer:{
        flexDirection:'row',
        width:'100%',
        justifyContent:'space-between',
        paddingHorizontal:15
    },
    inputContainer:{
        width:300,
        maxWidth:'80%',
        alignItems:'center'        
    },
    title:{
        fontSize:20,
        marginVertical:10
    },
    button:{
        width:100
    },
    input:{
        width:50,
        textAlign:'center'
    },
    summaryContainer:{
        marginTop:20,
        alignItems:'center'
    }
});

export default StartGameScreen;

/**
    Template form new fucntional components

    import React from 'react';
    import { StyleSheet, Text, View } from 'react-native';

    const MyComponentName=props=>{
        return(
            //put component stuff here
            <View>

            </View>
        )
    };
    const styles=StyleSheet.create({});
    export default MyComponentName;
 */