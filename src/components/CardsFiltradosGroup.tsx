import { ScrollView, View } from "react-native"
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

interface CardFiltadosGroupScrollProps {
    children: React.ReactNode
}

const fotoUri = `https://img.freepik.com/vetores-premium/modelo-de-logotipo-vintage-de-barbearia_441059-26.jpg`


export const CardsFiltradosGroup = () => {
    return (
        <ScrollView >
            <View>
                <CardFiltrado nome="Barbers Shops" fotoUrl={fotoUri}/>
                <CardFiltrado nome="Barbers Shops" fotoUrl={fotoUri}/>
                <CardFiltrado nome="Barbers Shops" fotoUrl={fotoUri}/>
                <CardFiltrado nome="Barbers Shops" fotoUrl={fotoUri}/>
                <CardFiltrado nome="Barbers Shops" fotoUrl={fotoUri}/>
                <CardFiltrado nome="Barbers Shops" fotoUrl={fotoUri}/>
            </View>
        </ScrollView>
    )
}

export default CardsFiltradosGroup