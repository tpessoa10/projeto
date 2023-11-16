import { useNavigation } from "@react-navigation/native"
import { NativeSyntheticEvent, TextInputSubmitEditingEventData } from "react-native"
import styled from "styled-components/native"

interface BotaoProps{
    texto:string
    onSubmit:(e: NativeSyntheticEvent<TextInputSubmitEditingEventData>) => void
}


export const Botao = ({texto, onSubmit}:BotaoProps) => {

    const BotaoForm = styled.TouchableOpacity`
        background-color: green;
        border-radius: 5px;
        padding: 10px 20px;
        width: 50%;
        margin-top: 10px;
    `
    const TextoBotao = styled.Text`
        color: white;
        font-size: 16px;
        font-weight: bold;
        text-align: center;
    `

    const BotaoContainer = styled.View`
        display: flex;
        align-items: center;
        
    `
    
    return (
        <BotaoContainer>

        <BotaoForm>
            <TextoBotao>{texto}</TextoBotao>
        </BotaoForm>
        </BotaoContainer>
    )
}