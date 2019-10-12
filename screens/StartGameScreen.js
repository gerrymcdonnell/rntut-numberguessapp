import React from 'react';
import { StyleSheet, Text, TextInput,View,Button } from 'react-native';

const StartGameScreen=props=>{
    return(
        <View style={styles.screen}>
            <Text>The game Screen</Text>

            <View>
                <Text>Select a number</Text>
                <TextInput/>

                <View>
                    <Button title="reset" onPress={()=>{}}/>
                    <Button title="confirm" onPress={()=>{}}/>
                </View>
                {/*ended at 4hrs 03*/}
            </View>
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