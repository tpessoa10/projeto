import { Image } from "react-native"
import { Text, Dimensions } from "react-native"
import { useState } from "react"
import { styled } from "styled-components/native"
import { useNavigation } from "@react-navigation/native"
import { Input } from "./Input"
import { Botao } from "./Botao"
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

interface InputContainerProps{
    children:React.ReactNode
}

const Container = styled.View`
    margin-top: 20px;
`

const Texto = styled.Text`
    font-size: 12px;
    text-align: center;
    margin-top: 20px;
    margin-bottom: 20px;
`

const TextoColorido = styled.Text`
    color: #0022ff
`

const ImagemLogin = styled.Image`
    height: 200;
    resize: contain;
    width: ${({width}) => width}px;
    align-self: center;
`

 export const InputContainer = () => {
    const [usuario, setUsuario] = useState('')
    const [senha, setSenha] = useState('')
    const tamanhoTela = Dimensions.get('window').width
    const tamanhoImagem = tamanhoTela * 0.65
    const navigation = useNavigation()

    const handleSubmit = () => {
        console.log('login ', usuario)
        console.log('senha ', senha)
    }


   /* const handleUsuarioChange = (text) => {
        setUsuario(text)
    }

    const handleSenhaChange = (text) => {
        setSenha(text)
    }*/

    return (
        <Container>
            <ImagemLogin source={require("../../assets/beautyLogoBranco.png")} width={tamanhoImagem}/>
            <Input texto="Usuario" value={usuario} onChange={(text) => setUsuario(text)} submitEditing={() => {}}/>
            <Input texto="Senha" value={senha} onChange={(text) => setSenha(text)} submitEditing={() => {}}/>
            <Botao texto='Entrar' onSubmit={handleSubmit}/>
            
            <Texto>Não tem conta? 
                <TextoColorido> Crie uma agora!</TextoColorido>
            </Texto>
        </Container>
    )
    
}

