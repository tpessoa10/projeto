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
import { Cadastro } from './src/screen/Cadastro';
import { PerfilEstabelecimentoContainer } from './src/components/PerfilEstabelecimentoContainer';
import { PerfilEstabelecimento } from './src/screen/PerfilEstabelecimento';
import { Routes } from './src/routes';

//const stack = createNativeStackNavigator();


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
      <Routes />
      <StatusBar style="auto"/>
    </NavigationContainer>
  );
}
