// import { StatusBar } from 'expo-status-bar';
import { Text, StyleSheet, View, StatusBar, ScrollView } from 'react-native';
import { Header } from '../components/Header';
import { BarraPesquisa } from '../components/BarraPesquisa';
import { SafeAreaView } from 'react-native-safe-area-context';
import styled from 'styled-components/native';
import {CardsFiltradosGroup} from '../components/CardsFiltradosGroup';
import { ArrowLeft } from 'phosphor-react-native';
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import { CardTipoServicoGroup } from '../components/CardTipoServicoGroup';
import { RootStackParamList } from '../../App';
import { InputContainerCadastro } from '../components/InputContainerCadastro';
import { Input } from '../components/Input';
import React from 'react';
import { Botao } from '../components/Botao';
const ContainerHome = styled.View`

    padding-left: 12px;
    padding-right: 12px;
    display: flex;
    width: 100%;
    gap: 32px;
    margin-top: 32px;
`

const ButtonReturn = styled.TouchableOpacity``

export interface ResultadosFiltradosProps {
    result: any[]
}

export const Cadastro = (props: ResultadosFiltradosProps) => {
    return (
        <ContainerHome>
            {/* <ScrollView> */}
            {/*Tela de Login ainda não navega para Home*/}
            <InputContainerCadastro/>
            {/* </ScrollView> */}
        </ContainerHome>
    )
}


