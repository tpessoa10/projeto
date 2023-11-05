import { ScrollView, Text, View } from 'react-native';
import styled from "styled-components/native"
import { Card } from './Card';
import { CardGroupScrolling } from './CardGroupScrolling';
import { useEffect } from 'react';
import { getEstabelecimentosProximos } from '../api/estabelecimentosApi';
import * as Location from 'expo-location';



const SectionCard = styled.View`
    display: flex;
    width: 100%;
    gap: 8px;
`
const TitleSection = styled.Text`
    font-size: 24px;
    font-weight: bold;
`

let location = await Location.getCurrentPositionAsync({});
let latitude = location.coords.latitude;
let longitude = location.coords.longitude;

const fotoUri = `https://img.freepik.com/vetores-premium/modelo-de-logotipo-vintage-de-barbearia_441059-26.jpg`

export const CardsContainer = () => {
    var [saloes, setSaloes] = useEffect([])

    useEffect(() => {
        const response = getEstabelecimentosProximos(latitude, longitude)
        setSaloes = response.data
    })

    return (
        <ScrollView>

            <SectionCard>
                <TitleSection>Salões Proximos</TitleSection>
                <CardGroupScrolling>
                    <Card nome='Barber Shop' fotoUrl={fotoUri} />
                    <Card nome='Barber Shop' fotoUrl={fotoUri} />
                    <Card nome='Barber Shop' fotoUrl={fotoUri} />
                    <Card nome='Barber Shop' fotoUrl={fotoUri} />
                </CardGroupScrolling>
            </SectionCard>
            <SectionCard>
                <TitleSection>Pedicure</TitleSection>
                <CardGroupScrolling>
                    <Card nome='Barber Shop' fotoUrl={fotoUri} />
                    <Card nome='Barber Shop' fotoUrl={fotoUri} />
                    <Card nome='Barber Shop' fotoUrl={fotoUri} />
                    <Card nome='Barber Shop' fotoUrl={fotoUri} />
                </CardGroupScrolling>
            </SectionCard>
            <SectionCard>
                <TitleSection>Design de sobrancelha</TitleSection>
                <CardGroupScrolling>
                    <Card nome='Barber Shop' fotoUrl={fotoUri} />
                    <Card nome='Barber Shop' fotoUrl={fotoUri} />
                    <Card nome='Barber Shop' fotoUrl={fotoUri} />
                    <Card nome='Barber Shop' fotoUrl={fotoUri} />
                </CardGroupScrolling>
            </SectionCard>
        </ScrollView>
    )
}