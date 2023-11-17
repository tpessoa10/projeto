import { useNavigation } from "@react-navigation/native"
<<<<<<< HEAD
import { GestureResponderEvent } from "react-native"
import { NativeSyntheticEvent, TextInputSubmitEditingEventData } from "react-native"
=======
import { GestureResponderEvent, NativeSyntheticEvent, TextInputSubmitEditingEventData } from "react-native"
>>>>>>> Thiago
import styled from "styled-components/native"

interface BotaoProps{
    texto:string
    onSubmit:(e: GestureResponderEvent) => void
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

        <BotaoForm onPress={onSubmit}>
            <TextoBotao>{texto}</TextoBotao>
        </BotaoForm>
        </BotaoContainer>
    )
}