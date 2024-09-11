import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen'
import SignUp from './screens/SignUp';
import Passengers from './screens/Passengers';
import Order from './screens/Order';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='HomeScreen'>
        <Stack.Screen name='Home' component={HomeScreen} options={{headerShown: false}}></Stack.Screen>
        <Stack.Screen name='SignUp' component={SignUp} options={{headerShown: false}}></Stack.Screen>
        <Stack.Screen name='Passengers' component={Passengers} options={{headerShown: false}}></Stack.Screen>
        <Stack.Screen name='Order' component={Order} options={{headerShown: false}}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
