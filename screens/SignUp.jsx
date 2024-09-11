import React from 'react'
import {StyleSheet, Text, View, Image, TouchableOpacity, TextInput, ScrollView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AntDesign from '@expo/vector-icons/AntDesign';

const SignUp = ({navigation}) => {
  return (
    <ScrollView style={styles.maincontainer}>
        <View style={styles.container}>
            <View style={styles.headerContainer}>
                <TouchableOpacity style={styles.gobackbtn} onPress={() => navigation.goBack()}><AntDesign name="left" size={24} color="white" /></TouchableOpacity>
                <Image source={require('../assets/bgremoved1.png')} style={styles.headerimage} resizeMode='cover'></Image>
                <Text style={styles.headertext}>Car Poolin</Text>
                <Text style={styles.ptext}>Join today to unlock 100+ travels everyday!</Text>
            </View>

            <TextInput placeholder='Email' style={styles.input}/>
            <TextInput placeholder='Password' style={styles.input}/>
            <TextInput placeholder='Name' style={styles.input}/>
            <TextInput placeholder='Surname' style={styles.input}/>
            <TextInput placeholder='Phone Number' style={styles.input}/>
            

            <TouchableOpacity style={styles.button} onPress={() => navigation.push('Passengers')} ><Text style={styles.buttontext}>Start</Text></TouchableOpacity>
        </View>
    </ScrollView>
    
  )
}

export default SignUp

const styles = StyleSheet.create({
    maincontainer: {
        flex: 1,
        backgroundColor: 'white'
    }, 

    container: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white'        
    },

    headerContainer: {
        backgroundColor: '#85d8ea',
        alignItems: 'center',
        justifyContent: 'center',
        width: "100%",
        height: "50%",
        borderRadius: 15,
        bottom: 10
    },
    
    headerimage: {
        width: 150,
        height: 100,
        top: 30
    },

    headertext: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 32, 
        top: 40
    },

    ptext: {
        width: 200,
        color: 'white',
        textAlign: 'center',
        marginTop: 10,
        top: 40,  
        fontWeight: 'bold'
    },

    input: {
        borderColor: 'gray',
        borderWidth: 0.5,
        width: "80%",
        marginTop: 30,
        height: 50,
        paddingLeft: 10,
        borderRadius: 25,
        top: 10,
    }, 

    button: {
        backgroundColor: '#546A7B',
        alignItems: 'center',
        justifyContent: 'center',
        width: 200,
        height: 50,
        borderRadius: 25,
        top: 50
    },

    buttontext: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 16
    },

    gobackbtn: {
        top: 40,
        right: 160,
        fontWeight: 'bold'
    }

})