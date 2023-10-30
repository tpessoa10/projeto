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
    justify-content: space-evenly;
`
const CardsGroupScroll = styled.ScrollView`
    display: flex;
    gap: 8px;

    
`


const fotoUri = `https://img.freepik.com/vetores-premium/modelo-de-logotipo-vintage-de-barbearia_441059-26.jpg`

export const CardsContainer = () => {
    return (
        <ScrollView>

        <SectionCard>
            <TitleSection>Salões Proximos</TitleSection>
                    <CardsGroupScroll horizontal>
                        <CardsGroup>
                            <Card nome='Barber Shop' fotoUrl={fotoUri} />
                            <Card nome='Barber Shop' fotoUrl={fotoUri} />
                            <Card nome='Barber Shop' fotoUrl={fotoUri} />
                            <Card nome='Barber Shop' fotoUrl={fotoUri} />
                        </CardsGroup>
                    </CardsGroupScroll>
        </SectionCard>
        <SectionCard>
            <TitleSection>Pedicure</TitleSection>
                    <CardsGroupScroll horizontal>
                        <CardsGroup>
                            <Card nome='Barber Shop' fotoUrl={fotoUri} />
                            <Card nome='Barber Shop' fotoUrl={fotoUri} />
                            <Card nome='Barber Shop' fotoUrl={fotoUri} />
                            <Card nome='Barber Shop' fotoUrl={fotoUri} />
                        </CardsGroup>
                    </CardsGroupScroll>
        </SectionCard>
        <SectionCard>
            <TitleSection>Design de sobrancelha</TitleSection>
                    <CardsGroupScroll horizontal>
                        <CardsGroup>
                            <Card nome='Barber Shop' fotoUrl={fotoUri} />
                            <Card nome='Barber Shop' fotoUrl={fotoUri} />
                            <Card nome='Barber Shop' fotoUrl={fotoUri} />
                            <Card nome='Barber Shop' fotoUrl={fotoUri} />
                        </CardsGroup>
                    </CardsGroupScroll>
        </SectionCard>
        </ScrollView>
    )
}