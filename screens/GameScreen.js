import React,{useState} from 'react';
import { StyleSheet, Text, View,Button } from 'react-native';

import NumberContainer from '../components/numberContainer';
import Card from '../components/Card';

const generateRandomBetween=(min,max,exclude)=>{
    min=Math.ceil(min);
    max=Math.floor(max);
    const rndNum=Math.floor(Math.random() * (max-min))+min;

    if(rndNum===exclude){
        return generateRandomBetween(min,max,exclude)
    }
    else{
        return rndNum;
    }
}

const GameScreen=props=>{

    //react hooks
    const[currentGuess,setCurrentGuess]=useState(generateRandomBetween(1,100,props.userChoice));

    return(        
        <View style={styles.screen}>
            <Text>CPU Guess'ed</Text>
            <NumberContainer>{currentGuess}</NumberContainer>
            <Card style={styles.buttonContainer}>
                <Button title="Lower" onPress={()=>{}} />
                <Button title="Greater" onPress={()=>{}} />
            </Card>
        </View>
    )
};
const styles=StyleSheet.create({
    screen:{
        flex:1,
        padding:10,
        alignItems:'center'
    },
    buttonContainer:{
        flexDirection:'row',
        justifyContent:'space-around',
        marginTop:20,
        maxWidth:'80%'
    }
});

export default GameScreen;