// import { StatusBar } from 'expo-status-bar';
import { Text, StyleSheet, View, StatusBar, ScrollView } from 'react-native';
import { Header } from '../components/Header';
import { BarraPesquisa } from '../components/BarraPesquisa';
import { SafeAreaView } from 'react-native-safe-area-context';
import styled from 'styled-components/native';
import { CardsContainer } from '../components/CardsContainer';
import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';
import { ResultadosFiltrados } from './ResultadosFiltrados';
import { CardTipoServicoGroup } from '../components/CardTipoServicoGroup';

const ContainerHome = styled.View`

    padding-left: 12px;
    padding-right: 12px;
    display: flex;
    width: 100%;
    gap: 32px;
`

export const HomePage = () => {
    const navigation = useNavigation()
    const [pesquisa, setPesquisa] = useState('')


    return (
        <ContainerHome>
            {/* <ScrollView> */}

            <CardTipoServicoGroup/>
            <CardsContainer/>
            {/* </ScrollView> */}
        </ContainerHome>
    )
}


