import React from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import { View, Text, StyleSheet } from 'react-native';

const Header = (props) =>{
    
 return (
     <View style={{backgroundColor: props.color, height: 75, justifyContent: 'center', alignItems: 'center'}}>
        <MaterialCommunityIcons onPress={props.function} name="menu" style={styles.Icons} />
        <Text style={styles.Text}> {props.title} </Text>
       
     </View>
    )
    
};

const styles = StyleSheet.create({
    Text:{
        fontSize: 30,
        color: '#FFFAFA'
    },
    Icons:{
        position: 'absolute',
        alignSelf: 'flex-start',
        color: 'black',
        fontSize: 40,
        margin: 10,
        color: '#FFFAFA'
    }
})

export default Header;
