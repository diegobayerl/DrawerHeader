import React from 'react';
import { View, StyleSheet } from 'react-native';
import Header from '../../components/Header';


// import { Container } from './styles';

const Home = ({ navigation }) => {
  return(
    <>
    <Header title="Home" color={"#7A67EE"} function={() => navigation.openDrawer()}/>
    <View style={styles.container}>
        
    </View>
    </>
  ); 
}

const styles = StyleSheet.create({
  container:{
    backgroundColor: "#CFCFCF",
    flex: 1
  }
})

export default Home;