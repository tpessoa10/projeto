import { FlatList, ScrollView, View } from "react-native"
import styled from "styled-components/native"
import  {CardFiltrado}  from "./CardFiltrado"

const CardsGroup = styled.View`
    display: flex;
    flex-direction: row;
    width: 100%;
    justify-content: space-evenly;
`
const CardsGroupScroll = styled.ScrollView`
    display: flex;
`

interface CardFiltadosGroupProps {
    data: any[]
}

const fotoUri = `https://img.freepik.com/vetores-premium/modelo-de-logotipo-vintage-de-barbearia_441059-26.jpg`


export const CardsFiltradosGroup = (props: CardFiltadosGroupProps) => {
    return (
        <FlatList data={props.data}
            renderItem={({ item }) => <CardFiltrado nome={item.nomeEmpresa} fotoUrl={fotoUri} />}
            contentContainerStyle={{ gap: 8 }}
        />
    )
}

