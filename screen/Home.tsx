// import { StatusBar } from 'expo-status-bar';
import { Text, StyleSheet, View, StatusBar, ScrollView } from 'react-native';
import { Header } from '../components/Header';
import { BarraPesquisa } from '../components/BarraPesquisa';
import { SafeAreaView } from 'react-native-safe-area-context';
import styled from 'styled-components/native';
import { CardsContainer } from '../components/Cards';

const ContainerHome = styled.View`

    padding-left: 12px;
    padding-right: 12px;
    display: flex;
    width: 100%;
    gap: 32px;
`

export const HomePage = () => {
    return (
        <ContainerHome>
            {/* <ScrollView> */}

            <Header title='Beauty On'>
                <BarraPesquisa />
            </Header>
            <CardsContainer>

            </CardsContainer>
            {/* </ScrollView> */}
        </ContainerHome>
    )
}


