import React from 'react';
import { StyleSheet, Text, View,Button } from 'react-native';

    const GameOverScreen=props=>{
        return(
            //put component stuff here
            <View>
                <Text>
                    The game is over
                </Text>
                <Text>Number of rounds:{props.roundsNumber}</Text>
                <Text>Number was :{props.userNumber}</Text>
                <Button title='New Game' onPress={props.onRestart}></Button>
            </View>
        )
    };
    const styles=StyleSheet.create({
        screen:{
            flex:1,
            justifyContent:'center',
            alignItems:'center'
        }
    });
    export default GameOverScreen;