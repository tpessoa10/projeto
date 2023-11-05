import styled from "styled-components/native"
import {Text} from 'react-native'

interface CardTipoServicoProps{
    tipoServico: string
    cor?:string
}

const SimpleCardTipoServico = styled.TouchableOpacity`
    display: flex;
    width: 80px;
    height: 40px;
    border-radius: 4px;
    margin-left: 4px;
    margin-right: 4px;
    justify-content: center;
    align-items: center;
`

export const CardTipoServico = ({tipoServico, cor}:CardTipoServicoProps) => {
    if(tipoServico == 'Pedicure'){
        cor = "red"
    }else if (tipoServico == 'Cabelo'){
        cor = "blue"
    } else if (tipoServico == 'Manicure'){
        cor = "pink"
    }
    return (
        <SimpleCardTipoServico style={{backgroundColor: cor}}>
            <Text style={{color:"white"}}>{tipoServico}</Text>
        </SimpleCardTipoServico>
    )
}