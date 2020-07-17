import React from 'react';
import { StyleSheet } from 'react-native'

import { DrawerContentScrollView, DrawerItemList, DrawerItem } from '@react-navigation/drawer';
import { AntDesign } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 

import Animated from 'react-native-reanimated';
import { Container, Header, Content, Footer, ListItem, Left, Thumbnail, Body, H3, Text} from 'native-base';

function Sidebar({ progress, ...props}) {

    const translateX = Animated.interpolate(progress, {
        inputRange: [0, 1],
        outputRange: [-100, 0],
    })
    return (
        <Container>
            <Header style={styles.header}>
                <MaterialCommunityIcons style={styles.marca} name="truck-delivery" size={24} color="black" />    
                <Text style={styles.marca}>Delivere PC</Text>
              
            </Header>
            <Content >
                <ListItem style={styles.listItem} thumbnail>
                    <Left >
                        <Thumbnail style={styles.thumbnail} source={
                            {uri: 'https://image.freepik.com/vetores-gratis/perfil-de-avatar-de-homem-no-icone-redondo_24640-14044.jpg'}}/>
                     </Left>
                     <Body style={styles.body}>
                            <H3 style={styles.badyText}> Diego Bayerl Hupp</H3>
                            <Text style={styles.badyText}> Produtor </Text>
                     </Body>
                </ListItem>
               
                <DrawerContentScrollView {...props}>
                    <Animated.View style={{transform: [{ translateX }]}}>
                        <DrawerItemList {...props} />

                        <DrawerItem 
                            label="Avaliação"
                            icon={({ color, size }) =>
                                <AntDesign name="star" size={24} color="black"
                                />
                            }
                            onPress={() => alert("Obrigado")} />

                    </Animated.View>
                </DrawerContentScrollView>
            </Content>

            <Footer style={styles.footer}>
                <Left style={styles.divFooter} >
                    <AntDesign name="logout" style={styles.icon}/>
                    <Text style={styles.textIcon}>log-out</Text>
               </Left>
            </Footer>

        </Container>
    );
};

const styles =  StyleSheet.create({
    header:{
        backgroundColor: '#7D26CD',
        borderBottomWidth: 0,
        height: 30
    },
    marca:{
        color: "#ffff",
        marginTop: 5,
        marginLeft:0,
        marginRight: 10,
        
    },
    listItem:{
        backgroundColor: "#7D26CD",
        marginLeft:0,
        padding:0,
        marginBottom:0
    },
    thumbnail:{
        marginLeft: 10
    },
    body:{
        marginBottom: -1,
    },
    badyText:{
        color: '#fff'
    },
    footer:{
        backgroundColor: '#fff'
    },
    divFooter:{
        flexDirection: 'row',
    },
    icon:{
        color: 'black',
        fontSize: 20,
        marginLeft: 5
    },
    textIcon:{
        marginLeft: 10
    }
})

export default Sidebar;

/*<Right>
                    <MaterialCommunityIcons name="menu" style={{ 
                        fontSize: 40, 
                        position:"relative", 
                        alignSelf:"flex-end", 
                        marginTop: 5,
                        color: '#FFFAFA'
                        }} onPress={() => CloseDrawer()}/>
                </Right> */