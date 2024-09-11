import React from 'react'
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AntDesign from '@expo/vector-icons/AntDesign';

const Order = ({navigation}) => {
  return (
    <View style={styles.container}>
        <View style={styles.headercontainer}>
        <TouchableOpacity style={styles.gobackbtn} onPress={() => navigation.goBack()}><AntDesign name="left" size={30} color="white" /></TouchableOpacity>
        <Text style={styles.text}>Ride from <Text style={styles.text1}>Brussels</Text> to <Text style={styles.text2}>Ghent</Text></Text>
        </View>
    </View>
  )
}

export default Order

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white'
    },

    headercontainer: {
        backgroundColor: '#85d8ea',
        alignItems: 'center',
        justifyContent: 'center',
        width: "100%",
        height: "40%",
        borderRadius: 15,
        bottom: 300
    },

    gobackbtn: {
        right: 160,
        bottom: -20,
    },

    text: {
        fontSize: 32,
        fontWeight: 'bold',
        width: 230,
        textAlign: 'left',
        bottom: -30,
        right: 50,
        color: 'white'
    },

    text1: {
        color: '#c2ecf5'
    },

    text2: {
        color: '#c2ecf5'
    }
})