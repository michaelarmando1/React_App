import React from 'react'
import {StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AntDesign from '@expo/vector-icons/AntDesign';

const HomeScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
        <View style={styles.imageContainer}>
            <Image source={require('../assets/bgremoved1.png')} style={styles.image} resizeMode='cover'></Image>
        </View>
        <Text style={styles.textHeader}>CarPoolin</Text>
        <Text style={styles.text}>Drive & Save Money</Text>
        <TouchableOpacity style={styles.button} onPress={() => navigation.push('SignUp')}><AntDesign name="arrowright" size={36} color="white" /></TouchableOpacity>
        
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white'
    },

    imageContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        bottom: 50,
        width: 200
    },

    image: {
        width: 250,
        height: 200,
        justifyContent: 'center'
    },

    textHeader: {
        fontSize: 36,
        color: "#85d8ea",
        bottom: 250, 
        fontWeight: 'bold'   
    },

    text: {
        bottom: 250,
        color: 'black',
        fontSize: 16,
        fontWeight: 'bold'
    }, 

    button: {
        backgroundColor: '#546a7b',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 50,
        width: 65,
        height: 65,
        bottom: 100
    }
})