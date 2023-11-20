import { NativeSyntheticEvent, Text, TextInputChangeEventData, TextInputSubmitEditingEventData } from "react-native"
import styled from "styled-components/native"

interface InputProps{
    texto:string
    onChange?: (e: string) => void
    value?: string
    submitEditing?: (e:NativeSyntheticEvent<TextInputSubmitEditingEventData>) => void
}

export const Input = ({texto, value, onChange, submitEditing}:InputProps) => {

    const CampoInput = styled.TextInput`
        height: 40px;
        border-color: gray;
        border-width: 1px;
        border-radius: 5px;
        margin-bottom: 10px;
        margin-bottom: 20px;
    `
    return (
        <>
        <Text>{texto}</Text>
        {texto === 'Senha' ? <CampoInput onChangeText={onChange} value={value} onSubmitEditing={submitEditing} secureTextEntry/> : <CampoInput value={value} 
        onSubmitEditing={submitEditing} onChangeText={onChange}/>}
        </>
    )
}