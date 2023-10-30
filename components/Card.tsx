import { Image, Text } from "react-native"
import styled from "styled-components/native"

const SimpleCard = styled.View`
    width: 33.3%;
    display: flex;
    height: 150px;
    border-radius: 8px;
    align-items: center;
    margin: 4px;
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