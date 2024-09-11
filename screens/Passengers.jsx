import React, { useState } from 'react'
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native'
import Entypo from '@expo/vector-icons/Entypo';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Passengers = ({navigation}) => {
    const [bg, setBg] = useState(false);
    const [bg1, setBg1] = useState(false);
    const [bg2, setBg2] = useState(false);
    const [bg3, setBg3] = useState(false);

    const toggleBg = () => {
        setBg(true); 
        setBg1(false); 
        setBg2(false); 
        setBg3(false); 
      };
    const toggleBg1 = () => {
        setBg(false); 
        setBg1(true); 
        setBg2(false); 
        setBg3(false); 
      };
    const toggleBg2 = () => {
        setBg(false); 
        setBg1(false); 
        setBg2(true); 
        setBg3(false); 
      };
    const toggleBg3 = () => {
        setBg(false); 
        setBg1(false); 
        setBg2(false); 
        setBg3(true); 
      };

      const numBtnStyles = {
        backgroundColor: bg ? "#85d8ea" : "transparent", 
      };
      const numBtntext = {
        color: bg ? "white" : "black", 
      };
      const numBtnStyles1 = {
        backgroundColor: bg1 ? "#85d8ea" : "transparent", 
      };
      const numBtntext1 = {
        color: bg1 ? "white" : "black", 
      };
      const numBtnStyles2 = {
        backgroundColor: bg2 ? "#85d8ea" : "transparent", 
      };
      const numBtntext2 = {
        color: bg2 ? "white" : "black", 
      };
      const numBtnStyles3 = {
        backgroundColor: bg3 ? "#85d8ea" : "transparent", 
      };
      const numBtntext3 = {
        color: bg3 ? "white" : "black", 
      };

  return (
    <View style={styles.container}>
        <View style={styles.headerContainer}>
            <Text style={styles.headerText}>Where are you going?</Text>
            <View style={styles.linelogo}>
                <View style={styles.circle1}></View>
                <View style={styles.line}></View>
                <View style={styles.circle2}></View>
            </View>

            <View style={styles.destinationbox}>
                <Text style={styles.text1}>From Brussels</Text>
                <View style={styles.horizontalline}></View>
                <Text style={styles.text2}>To Ghent</Text>
            </View>

            <TouchableOpacity style={styles.retweetbtn}><Entypo name="retweet" size={24} color="black" /></TouchableOpacity>
        </View>

        <View style={styles.datesection}>
                <Text style={styles.maindate}>Date</Text>
                <View style={styles.datedays}>
                    <Text style={styles.datetext1}>Today</Text>
                    <Text style={styles.datetext}>Tomorrow</Text>
                    <Text style={styles.datetext}>Other Date</Text>
                    <TouchableOpacity style={styles.datebtn}><MaterialIcons name="date-range" size={24} color="gray" /></TouchableOpacity>
                </View>
            </View>

            <View style={styles.numsection}>
                <Text style={styles.passtext}>Passengers</Text>
                <View style={styles.numholder}>
                    <TouchableOpacity onPress={toggleBg} style={[styles.numbtn,numBtnStyles]}><Text style={[styles.numtext,numBtntext]}>1</Text></TouchableOpacity>
                    <TouchableOpacity style={[styles.numbtn,numBtnStyles1]} onPress={toggleBg1}><Text style={[styles.numtext,numBtntext1]}>2</Text></TouchableOpacity>
                    <TouchableOpacity style={[styles.numbtn,numBtnStyles2]} onPress={toggleBg2}><Text style={[styles.numtext,numBtntext2]}>3</Text></TouchableOpacity>
                    <TouchableOpacity style={[styles.numbtn,numBtnStyles3]} onPress={toggleBg3}><Text style={[styles.numtext,numBtntext3]}>4</Text></TouchableOpacity>
                </View>
                
            </View>

            <TouchableOpacity style={styles.btn} onPress={() => navigation.push('Order')} ><Text style={styles.btntext}>Search</Text></TouchableOpacity>
    </View>
  )
}

export default Passengers

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white'
    },

    headerContainer: {
        backgroundColor: '#85d8ea',
        alignItems: 'center',
        justifyContent: 'center',
        width: "100%",
        height: "55%",
        borderRadius: 15,
        bottom: 250
    },

    headerText: {
        fontSize: 24,
        width: 130,
        top: 180,
        right: 100,
        color: 'white',
        fontWeight: 'bold'
    },

    linelogo: {
        right: 160,
        top: 200,
        alignItems: 'center',
        justifyContent: 'center'
    },

    line: {
        width: 2,
        height: 91,
        opacity: 1,
        backgroundColor: 'white',
        borderRadius: 0
    },

    circle1: {
        width: 15,
        height: 15, 
        borderRadius: 10, 
        borderWidth: 5,
        borderColor: 'white',
        backgroundColor: 'transparent'
    },

    circle2: {
        width: 15,
        height: 15, 
        borderRadius: 10,
        borderWidth: 5, 
        borderColor: '#c2ecf5',
        backgroundColor: 'white'
    },

    destinationbox: {
        alignItems: 'left',
        justifyContent: 'left',
        right: 40,
        top: 80
    },

    horizontalline: {
        width: 200,
        height: 1,
        backgroundColor: 'white',
        opacity: 0.5,
        marginVertical: 20
    },

    text1 : {
        width: 60,
        lineHeight: 20,
        color: 'white',
        fontWeight: 'bold'
    },

    text2: {
        width: 50,
        color: 'white',
        fontWeight: 'bold'
    },

    retweetbtn: {
        width: 50,
        height: 50,
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
        left: 100,
        bottom: 0 
    },

    datesection: {
        alignItems: 'center',
        justifyContent: 'center',
        left: 0,
        top: 50 
    },

    maindate: {
        fontSize: 32,
        textAlign: 'left',
        right: 120,
        bottom: 250,
        fontWeight: 'bold'
    },

    datedays: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 20,
        bottom: 230,
        marginLeft: -40,
    },

    datetext: {
        fontWeight: 'bold'
    },

    datetext1: {
        fontWeight: 'bold',
        color: "#85d8ea"
    },

    numtext: {
        color: 'black',
        fontWeight: 'bold',
        fontSize: 16
    },
    
    numtext2: {
        fontWeight: 'bold',
        fontSize: 16
    },

    passtext: {
        fontSize: 32,
        fontWeight: 'bold',
        textAlign: 'left',
        right: 70,
        bottom: 200 
    }, 

    numbtn:{
        alignItems: 'center',
        justifyContent: 'center',
        width: 50,
        height: 50,
        borderRadius: 100,
        bottom: 180,
        right: 70
    },

    numbtn2: {
        alignItems: 'center',
        justifyContent: 'center',
        width: 50,
        height: 50,
        backgroundColor: "white",
        borderWidth: 0.5,
        borderColor: 'lightgray',
        borderRadius: 100,
        bottom: 180,
        right: 70
    },

    numsection: {
        left: 45, 
        top: 75 
    },

    numholder: {
        flexDirection: 'row',
        gap: 20
    },

    btn: {
        backgroundColor: '#546A7B',
        alignItems: 'center',
        justifyContent: 'center',
        width: 250,
        height: 50,
        borderRadius: 25, 
    },

    btntext : {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 16
    }

    
})