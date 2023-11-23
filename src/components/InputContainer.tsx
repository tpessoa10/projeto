import { Image } from "react-native"
import { Dimensions } from "react-native"
import { useCallback, useState } from "react"
import { styled } from "styled-components/native"
import { useNavigation } from "@react-navigation/native"
import { Input } from "./Input"
import { Botao } from "./Botao"
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view"

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
        resizeMode: contain;
        width: ${({width}) => width}px;
        align-self: center;
    `

export const InputContainer = () => {
    const [usuario, setUsuario] = useState<string | null>(null);
    const [senha, setSenha] = useState<string | null>(null);
    const tamanhoTela = Dimensions.get('window').width;
    const tamanhoImagem = tamanhoTela * 0.65;
    const navigation = useNavigation();
  
    const handleSubmit = useCallback(() => {
      console.log('login ', usuario);
      console.log('senha ', senha);
    }, [usuario, senha]);
  
    const handleOnChangeUsuario = (text: string) => {
      setUsuario(text);
    };
  
    const handleOnChangeSenha = (text: string) => {
      setSenha(text);
    };
  
    return (
    <KeyboardAwareScrollView>

      <Container>
        <ImagemLogin source={require("../../assets/beautyLogoBranco.png")} width={tamanhoImagem} />
        <Input
        texto="Usuario"
        onChangeText={handleOnChangeUsuario}
        value={usuario}
        />
        <Input
        texto="Senha"
        
        onChangeText={handleOnChangeSenha}
          value={senha}
          />
        <Botao texto='Entrar' onSubmit={handleSubmit} />
      </Container>
    </KeyboardAwareScrollView>
    );
  };