import { FlatList, ScrollView, Text, View } from 'react-native';
import styled from "styled-components/native"
import { Card } from './Card';
import { CardGroupScrolling } from './CardGroupScrolling';
import { useEffect, useState } from 'react';
import { getEstabelecimentosProximos } from '../api/estabelecimentosApi';
import * as Location from 'expo-location'


const SectionCard = styled.View`
    display: flex;
    width: 100%;
    gap: 8px;
`
const TitleSection = styled.Text`
    font-size: 24px;
    font-weight: bold;
`

const fotoUri = `https://img.freepik.com/vetores-premium/modelo-de-logotipo-vintage-de-barbearia_441059-26.jpg`

export const CardsContainer = () => {
    
    const [saloesProx, setSaloesProx] = useState([])
    const [pedicures, setPedicures] = useState([])
    const [manicure, setManicure] = useState([])

    useEffect(() => {
        
        const fetchData = async () => {
            try{
                let location = await Location.getCurrentPositionAsync({})
                let latitude = location.coords.latitude
                let longitude = location.coords.longitude
                const saloesProximos = await getEstabelecimentosProximos(latitude, longitude)
                const pedicures = await getEstabelecimentosProximos(latitude, longitude, ['0003'])
                const manicure = await getEstabelecimentosProximos(latitude, longitude, ['0002'])


                setSaloesProx(saloesProximos)
                setPedicures(pedicures)
                setManicure(manicure)
            } catch (error){
                console.error('Erro ao obter os estabelecimentos:', error)
            }
        }
        fetchData()
    }, [])
    
    return (
        <ScrollView>
            <SectionCard>
                <TitleSection>Cabeleireiro Proximos</TitleSection>
                <CardGroupScrolling data={saloesProx}/>
            </SectionCard>
            <SectionCard>
                <TitleSection>Pedicure</TitleSection>
                <CardGroupScrolling data={pedicures}/>

            </SectionCard>
            <SectionCard>
                <TitleSection>Manicure</TitleSection>
                <CardGroupScrolling data={manicure}/>
            </SectionCard>
        </ScrollView>
    )
}
