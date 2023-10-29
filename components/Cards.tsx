import { ScrollView, Text, View } from 'react-native';
import styled from "styled-components/native"
import { Card } from './Card';


const SectionCard = styled.View`
    display: flex;
    width: 100%;
    gap: 8px;
`
const TitleSection = styled.Text`
    font-size: 24px;
    font-weight: bold;
`
const CardsGroup = styled.View`
    display: flex;
    flex-direction: row;
    width: 100%;
`
const CardsGroupScroll = styled.ScrollView`
    display: flex;
    gap: 8px;
`

const fotoUri = `https://img.freepik.com/vetores-premium/modelo-de-logotipo-vintage-de-barbearia_441059-26.jpg`

export const CardsContainer = () => {
    return (
        <SectionCard>
            <TitleSection>Salões Proximos</TitleSection>
                <View>
                    <CardsGroupScroll horizontal>
                        <Card nome='Barber Shop' fotoUrl={fotoUri} />
                        <Card nome='Barber Shop' fotoUrl={fotoUri} />
                        <Card nome='Barber Shop' fotoUrl={fotoUri} />
                    </CardsGroupScroll>
                </View>
        </SectionCard>
    )
}