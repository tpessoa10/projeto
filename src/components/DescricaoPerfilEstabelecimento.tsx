import { styled } from "styled-components/native"
import { Text } from "react-native-svg"
import { Dimensions } from "react-native"

interface DescricaoPerfilEstabelecimentoProps{
    texto:string
}

const altura = Dimensions.get('window').height

const AreaDescricao = styled.View`
    height: ${altura * 0.2};
    background-color: #dae1e8;
`


export const DescricaoPerfilEstabelecimento = ({texto}:DescricaoPerfilEstabelecimentoProps) => {
    return(
        <>
        <AreaDescricao>
            <Text>{texto}</Text>
        </AreaDescricao>
        </>
    )
}