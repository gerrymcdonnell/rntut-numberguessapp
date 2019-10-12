import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const StartGameScreen=props=>{
    return(
        <View style={styles.screen}>

        </View>
    )
};

const styles=StyleSheet.create({
    screen:{
        flex:1,
        padding:10,
        alignItems:'center',        
    }
});

export default StartGameScreen;

/**
    TEmplate form new components

    import React from 'react';
    import { StyleSheet, Text, View } from 'react-native';

    const StartgameScreen=props=>{};
    const styles=StyleSheet.create({});
    export default StartGameScreen;
 */