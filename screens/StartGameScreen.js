import React from 'react';
import { StyleSheet, Text, TextInput,View,Button } from 'react-native';

import Card from '../components/Card'

const StartGameScreen=props=>{
    return(
        <View style={styles.screen}>
            
            <Text style={styles.title}>Start a New Game!</Text>

            <Card style={styles.inputContainer}>

                <Text>Select a Number</Text>
                <TextInput/>
                <View style={styles.buttonContainer}>
                    
                    <Button title="Reset" onPress={()=>{}} /> 
                    <Button title="Confirm" onPress={()=>{}} />
                    
                </View>
                
            </Card>
        </View>
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
    }
});

export default StartGameScreen;

/**
    Template form new fucntional components

    import React from 'react';
    import { StyleSheet, Text, View } from 'react-native';

    const StartgameScreen=props=>{
        return(
            //put component stuff here
            <View>

            </View>
        )
    };
    const styles=StyleSheet.create({});
    export default StartGameScreen;
 */