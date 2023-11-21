import { Image, ScrollView } from "react-native"
import { Text, Dimensions, StyleSheet, View, TouchableOpacity } from "react-native"
import { SafeAreaView } from 'react-native-safe-area-context'
import { useState } from "react"
import { styled } from "styled-components/native"
import { useNavigation } from "@react-navigation/native"
import { Input } from "./Input"
import { Botao } from "./Botao"
import { TipoCadastro } from "./TipoCadastro"

interface InputContainerProps {
    children:React.ReactNode
}

const Container = styled.View`
    margin-top: 20px;
    margin-bottom: 30px;
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

export const InputContainerCadastro = () => {
    const [usuario, setUsuario] = useState('')
    const [senha, setSenha] = useState('')
    const tamanhoTela = Dimensions.get('window').width
    const tamanhoImagem = tamanhoTela * 0.65
    const navigation = useNavigation()

    const handleSubmit = () => {
        console.log('login ', usuario)
        console.log('senha ', senha)
    }
    
    const onSelectSwitch = index => {}

   /* const handleUsuarioChange = (text) => {
        setUsuario(text)
    }

    const handleSenhaChange = (text) => {
        setSenha(text)
    }*/

    return (
        <SafeAreaView>
            <ScrollView>
                <Container>
                    <ImagemLogin source={require("../../assets/beautyLogoBranco.png")} width={tamanhoImagem}/>
                    <View style={{alignItems: 'center', margin: 20}}>
                        <TipoCadastro
                              selectionMode={1}
                              roundCorner={true}
                              option1={'Cliente'}
                              option2={'Estabelecimento'}
                              onSelectSwitch={onSelectSwitch}
                              selectionColor={'orange'}
                        />
                    </View>        
                    <Input texto="Nome Completo" value={usuario} onChange={(text) => setUsuario(text)} submitEditing={() => {}}/>
                    <Input texto="Nome de Usuario" value={usuario} onChange={(text) => setUsuario(text)} submitEditing={() => {}}/>
                    <Input texto="E-mail" value={usuario} onChange={(text) => setUsuario(text)} submitEditing={() => {}}/>
                    <Input texto="Senha" value={senha} onChange={(text) => setSenha(text)} submitEditing={() => {}}/>
                    <Input texto="Confirmar senha" value={senha} onChange={(text) => setSenha(text)} submitEditing={() => {}}/>
                    <Botao texto='Cadastrar-se' onSubmit={handleSubmit}/>
                </Container>
            </ScrollView>
        </SafeAreaView>
    )   
}

