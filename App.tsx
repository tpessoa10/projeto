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

//const stack = createNativeStackNavigator();
const Stack = createNativeStackNavigator()

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
      <Stack.Navigator initialRouteName='Home' screenOptions={{headerShown: false}}>
        <Stack.Screen name="Home" component={HomePage} />
        <Stack.Screen name="Filtrados" component={ResultadosFiltrados} />
      </Stack.Navigator>
      <StatusBar style="auto"/>
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
