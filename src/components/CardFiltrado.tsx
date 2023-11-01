import { styled } from "styled-components/native"
import { Text } from "react-native"


interface CardProps {
    nome: string
    fotoUrl: string 
}

const SimpleCardFiltrado = styled.View`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    width: 95%;
    height: 70px;
    border-radius: 8px;
    margin: 6px;
    background-color: #dae1e8;
`

const Logo = styled.Image`
    width: 15%;
    height: 85%;
    border-radius: 28px;
    margin-left: 10px;
    margin-top: 5px;
    margin-right: 10px;
    margin-bottom: 5px;
`
export const CardFiltrado = ({nome, fotoUrl}:CardProps) => {
    return (
    <SimpleCardFiltrado>
        <Logo source={{uri: fotoUrl}}/>
        <Text>{nome}</Text>
    </SimpleCardFiltrado>
    )
}

