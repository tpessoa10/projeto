import styled from "styled-components/native"
import {Text} from 'react-native'
import { useState } from "react"

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
    const [value, setValue] = useState('')
    const [pressed, setPressed] = useState(false)
    if(tipoServico == 'Pedicure'){
        cor = "red"
    }else if (tipoServico == 'Cabelo'){
        cor = "blue"
    } else if (tipoServico == 'Manicure'){
        cor = "pink"
    }

    const onPress = () => {
        setValue(tipoServico)
        pressed? setPressed(false) : setPressed(true)
    }

    const cardStyle = {
        backgroundColor: cor,
        opacity: pressed ? 0.5 : 1.0
    }

    return (
        <SimpleCardTipoServico style={{backgroundColor: cardStyle.backgroundColor, opacity:cardStyle.opacity}} onPress={onPress}>
            <Text style={{color:"white"}}>{tipoServico}</Text>
        </SimpleCardTipoServico>
    )
}