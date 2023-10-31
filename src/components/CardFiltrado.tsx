import { styled } from "styled-components/native"
import { Text } from "react-native"


interface CardProps {
    nome: string
    fotoUrl: string 
}

const SimpleCardFiltrado = styled.View`
    width: 90%;
    height: 70px;
    border-radius: 8px;
    margin: 6px;
    background-color: #dae1e8;
    display: flex;
    justify-content: flex-start;
`

const Logo = styled.Image`
    width: 10%;
    height: 90%;
    border-radius: 16px;
`
const CardFiltrado = ({nome, fotoUrl}:CardProps) => {
    <SimpleCardFiltrado>
        <Logo source={{uri: fotoUrl}}/>
        <Text>{nome}</Text>
    </SimpleCardFiltrado>
}

export default  CardFiltrado