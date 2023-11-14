import { StyleSheet, View, Text, TextInput, NativeSyntheticEvent, TextInputSubmitEditingEventData } from "react-native"
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
    background-color: #fff65;
    border-radius: 999px;
    height: 48px;
`

const InputText = styled.TextInput`
    width: 100%;
`

interface BarraPesquisaProps{
    onSubmit?: (e: NativeSyntheticEvent<TextInputSubmitEditingEventData>) => void
    onChangeText?: (text: string) => void
}

export const BarraPesquisa = ({onSubmit, onChangeText}:BarraPesquisaProps) => {
    return (
        <InputView>
            <MagnifyingGlass size={24} />
            <InputText placeholder="Pesquisar" onSubmitEditing={onSubmit} onChangeText={onChangeText} keyboardType="web-search"/>
        </InputView>
    )
}

