import React from 'react';
import { View } from 'react-native';
import Header from '../../components/Header'

// import { Container } from './styles';

const Infor = ({navigation}) => {
  return (
  <>
  <Header title="Informações" color={"#7A67EE"} function={() => navigation.openDrawer()}/>
  <View />
  </>
  )
}

export default Infor;