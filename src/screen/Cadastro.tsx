// import { StatusBar } from 'expo-status-bar';
import styled from 'styled-components/native';

import { InputContainerCadastro } from '../components/InputContainerCadastro';
import React from 'react';
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


