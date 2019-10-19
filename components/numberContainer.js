import React from 'react';
import { StyleSheet, Text, View} from 'react-native';
import Colors from '../constants/colors'

const NumberContainer=(props)=>{
    return(
        //put component stuff here
        <View style={styles.container}> 
            <Text style={styles.number}>{props.children}</Text>
        </View>
    )
};
const styles=StyleSheet.create({
    container:{
        borderWidth:2,
        borderColor:Colors.secondary,
        padding:10,
        borderRadius:1,
        marginVertical:10,
        alignItems:'center',
        justifyContent:'center'
    },
    number:{
        color:Colors.secondary,
        fontSize:22
    }
});
export default NumberContainer;

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