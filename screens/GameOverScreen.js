import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

    const GameOverScreen=props=>{
        return(
            //put component stuff here
            <View>
                <Text>
                    The game is over
                </Text>
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