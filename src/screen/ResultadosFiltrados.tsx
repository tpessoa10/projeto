// import { StatusBar } from 'expo-status-bar';
import { Text, StyleSheet, View, StatusBar, ScrollView } from 'react-native';
import { Header } from '../components/Header';
import { BarraPesquisa } from '../components/BarraPesquisa';
import { SafeAreaView } from 'react-native-safe-area-context';
import styled from 'styled-components/native';
import {CardsFiltradosGroup} from '../components/CardsFiltradosGroup';
import { ArrowLeft } from 'phosphor-react-native';
import { useNavigation } from '@react-navigation/native';
const ContainerHome = styled.View`

    padding-left: 12px;
    padding-right: 12px;
    display: flex;
    width: 100%;
    gap: 32px;
`

const ButtonReturn = styled.TouchableOpacity``

export const ResultadosFiltrados = () => {

    const naviagtion = useNavigation()

    return (
        <ContainerHome>
            {/* <ScrollView> */}

            <Header title='Beauty On'>
                <ButtonReturn onPress={() => naviagtion.goBack()}>
                    <ArrowLeft />
                </ButtonReturn>
                <BarraPesquisa />
            </Header>
            <CardsFiltradosGroup/>

            {/* </ScrollView> */}
        </ContainerHome>
    )
}


