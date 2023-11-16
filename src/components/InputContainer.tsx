import styled from "styled-components/native"
import { Input } from "./Input"
import { Botao } from "./Botao"
import { NavigationContainer, useNavigation } from "@react-navigation/native"
import {SvgUri} from 'react-native-svg'
import { Image } from "react-native"
import { Dimensions } from "react-native"

interface InputContainerProps{
    children:React.ReactNode
}
    const Container = styled.View`
        margin-top: 20px;
    `

    const Texto = styled.Text`
        font-size: 30px;
        text-align: center;
        margin-bottom: 10px;
    `

    const ImagemLogin = styled.Image`
        height: 200;
        resize: contain;
        width: ${({width}) => width}px;
        align-self: center;
    `

export const InputContainer = () => {
    const tamanhoTela = Dimensions.get('window').width
    const tamanhoImagem = tamanhoTela * 0.65
    const navigation = useNavigation()

    const handleSubmit = () => {
        navigation.navigate("Home")
    }



    return (

        <Container>
            <ImagemLogin source={require("../../assets/beautyLogoBranco.png")} width={tamanhoImagem}/>
            <Input texto="Usuario"/>
            <Input texto="Senha"/>
            <Botao texto='Entrar' onSubmit={handleSubmit}/>
        </Container>

        
    )
}