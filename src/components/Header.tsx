import { View, Text, StyleSheet, StatusBar } from "react-native"
import styled from "styled-components/native";

import { UserCircle } from "phosphor-react-native";
import { useNavigation } from "@react-navigation/native";
import { BarraPesquisa } from "./BarraPesquisa";
import { getEstabelecimentosPorPesquisa } from "../api/estabelecimentosApi";
import { ResultadosFiltradosProps } from "../screen/ResultadosFiltrados";
import { useCallback, useEffect, useState } from "react";
interface HeaderProps {
    title: string;
}

const Container = styled.View`
    width: 100%;
    align-items: center;
    gap: 8px;
    padding-top: ${StatusBar.currentHeight + 8}px;
    display: flex;
    flex-direction: row;
    background-color: 'transparent';
`
export const Header = (props: HeaderProps) => {
    const navigation = useNavigation()

    const [search, setSearch] = useState('')

    const handleSubmit = useCallback(() => {
        (async () => {
            console.log('digitado', search)
            const resultado = await getEstabelecimentosPorPesquisa(search)
            console.log(resultado)
            navigation.navigate("ResultadosFiltrados", {estabelecimentos: resultado as unknown as any[]})

        })()
    }, [search])

    const handleChangeText = useCallback((text: string) => {

            setSearch((s) => text)
    }, [])

    return (
        <Container>
            <BarraPesquisa onSubmit={handleSubmit} onChangeText={handleChangeText}/>
            <UserCircle size={64} />
        </Container>
    )
}
