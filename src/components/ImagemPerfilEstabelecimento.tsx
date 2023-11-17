import { styled } from "styled-components/native"
import {Text} from 'react-native'
import { Dimensions } from "react-native"

interface ImagemEstabelecimentoProps{
    fotoUrl:string
}

const alturaImagem = Dimensions.get('window').height
const larguraImagem = Dimensions.get('window').width


const ImagemPerfil = styled.Image`
    width: ${larguraImagem * 0.20};
    height: ${alturaImagem * 0.15};
`

const SimpleCard = styled.View`
    display: flex;
    align-items: center;

`

export const ImagemPerfilEstabelecimento = ({fotoUrl}:ImagemEstabelecimentoProps) => {
    return(
        <SimpleCard>
            <ImagemPerfil source={{uri: fotoUrl}}/>  
        </SimpleCard>
    )
}