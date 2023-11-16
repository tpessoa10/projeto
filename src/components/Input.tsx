import { Text } from "react-native"
import styled from "styled-components/native"

interface InputProps{
    texto:string
}

export const Input = ({texto}:InputProps) => {

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
        {texto === 'Senha' ? <CampoInput secureTextEntry/> : <CampoInput />}
        </>
    )
}