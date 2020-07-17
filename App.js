import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import {StatusBar} from 'expo-status-bar';

import { AntDesign } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons'; 

import Home from './src/pages/Home'
import Infor from './src/pages/infor'

import Sidebar from './src/components/Drawer'

const Drawer = createDrawerNavigator();

export default function App() {
  return ( 
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home" drawerContent={props => <Sidebar {...props}/>}>
        <Drawer.Screen 
          name="Home" 
          component={Home} 
          options={{
          drawerIcon:({focused, color, size}) =>(
            <AntDesign name="home" size={24} color="black" />
          )}}
        />

        <Drawer.Screen 
          name="Informações"
          component={Infor}
          options={{
          drawerIcon: ({focused, color, size}) =>(
            <Entypo name="info" size={24} color="black" />
          )}}
        />
      </Drawer.Navigator>

      <StatusBar style="dark" backgroundColor="#7D26CD" hidden={true}/>
    </NavigationContainer>
  );
}
