import { ScrollView, View } from "react-native"
import { CardTipoServico } from "./CardTipoServico"
import styled from "styled-components/native"

const CardScrollView = styled.ScrollView`
    display: flex;
`

export const CardTipoServicoGroup = () =>{
    return (
        <CardScrollView horizontal={true} contentContainerStyle={{alignItems: "center"}}>
            <CardTipoServico tipoServico="Cabelo"/>
            <CardTipoServico tipoServico="Manicure"/>
            <CardTipoServico tipoServico="Pedicure"/>
        </CardScrollView>
    )
}