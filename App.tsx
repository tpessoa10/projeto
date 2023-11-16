import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { HomePage } from './src/screen/Home';

import * as Location from 'expo-location'
import { useEffect, useState } from 'react';
import { ResultadosFiltrados } from './src/screen/ResultadosFiltrados';
import { createStackNavigator } from '@react-navigation/stack';
import { Header } from './src/components/Header';
import { BarraPesquisa } from './src/components/BarraPesquisa';
import { Login } from './src/screen/Login';

//const stack = createNativeStackNavigator();
export type RootStackParamList = {
  Home: undefined;
  ResultadosFiltrados: {estabelecimentos: any[]};
  Login: undefined;
}
const Stack = createNativeStackNavigator<RootStackParamList>()


export default function App() {

  const [location, setLocation] = useState(null);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync()
      if (status !== 'granted') {
        console.log('Permission to access location was denied')
        return
      }

      let location = await Location.getCurrentPositionAsync({})
      setLocation(location)

    })()
  }, [])



  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home' screenOptions={{header: () => {
        return (
          <Header title='Beauty On' />
        )
      }, headerBackVisible: true, contentStyle: {backgroundColor: `#fff`}}}>
        <Stack.Group>
          <Stack.Screen name="Home" component={HomePage} />
          <Stack.Screen name="ResultadosFiltrados" component={ResultadosFiltrados} />
          <Stack.Screen name="Login" component={Login}  options={{headerShown: false}}/>
        </Stack.Group>
      </Stack.Navigator>
      <StatusBar style="auto"/>
    </NavigationContainer>
  );
}