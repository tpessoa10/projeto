import { Image, Text } from "react-native"
import styled from "styled-components/native"

const SimpleCard = styled.View`
    width: 160px;
    display: flex;
    height: 150px;
    border-radius: 8px;
    align-items: center;
`

const ImageLogo = styled.Image`
    width: 100%;
    height: 80%;
    border-radius: 8px;
`

interface CardProps {
    nome: string
    fotoUrl: string 
}
export const Card = ({nome, fotoUrl}: CardProps) => {
    return (
        <SimpleCard>
            <ImageLogo source={{uri: fotoUrl}}/>

            <Text>{nome}</Text>
        </SimpleCard>
    )
}