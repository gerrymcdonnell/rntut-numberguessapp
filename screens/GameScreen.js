import React,{useState,useRef,useEffect} from 'react';
import { StyleSheet, Text, View,Button,Alert } from 'react-native';

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
    const[currentGuess,setCurrentGuess]=useState(
        generateRandomBetween(1,100,props.userChoice)
    );

    const currentLow=useRef(1);
    const currentHigh=useRef(100);
    const [rounds,setRounds]=useState(0);

    //obj destructering pull the props from props and store as constants
    const {userChoice,onGameOver}=props;

    //useEffect
    /**param 1 is the function execuste after compionetn render
     * param 2 is the depependancies i.e any vlaue coming outside of the effect fgunction
     */
    useEffect(()=>{
        if(currentGuess===userChoice){
            onGameOver(rounds);
        }
    },[currentGuess,userChoice,onGameOver]);

    const nextGuessHandler=direction=>{
        if ((direction==='lower' && currentGuess<props.userChoice) || (direction==='greater' &&currentGuess>props.userChoice))
        {
            Alert.alert('Dont lie','you this is wrong..',[{text:'Sorry',style:'cancel'}])
            return;
        }
        
        /**gen new random number */
        if(direction==='lower'){
            currentHigh.current=currentGuess;
        }
        else{
            currentLow.current=currentGuess;
        }
        const nextNumber=generateRandomBetween(currentLow.current,currentHigh.current,currentGuess)
        setCurrentGuess(nextNumber);
        setRounds(curRounds=>curRounds+1);
    }

    return(        
        <View style={styles.screen}>
            <Text>CPU Guess'ed</Text>
            <NumberContainer>{currentGuess}</NumberContainer>
            <Card style={styles.buttonContainer}>
                <Button title="Lower" onPress={nextGuessHandler.bind(this,'lower')} />
                <Button title="Greater" onPress={nextGuessHandler.bind(this,'greater')} />
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