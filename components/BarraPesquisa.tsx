import { StyleSheet, View, Text, TextInput } from "react-native"
import styled from "styled-components/native"
import { MagnifyingGlass } from "phosphor-react-native"

const InputView = styled.View`
    display: flex;
    flex: 1;
    justify-content: flex-start;
    align-items: center;
    padding-left: 12px;
    gap: 8px;
    flex-direction: row;
    background-color: #ffffff65;
    border-radius: 999px;
    height: 48px;
`

const InputText = styled.TextInput`
`

export const BarraPesquisa = () => {
    return (
        <InputView>
            <MagnifyingGlass size={24} />
            <InputText placeholder="Pesquisar" />
        </InputView>
    )
}

