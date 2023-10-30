import styled from "styled-components/native"

const CardsGroup = styled.View`
    display: flex;
    flex-direction: row;
    width: 100%;
    justify-content: space-evenly;
`
const CardsGroupScroll = styled.ScrollView`
    display: flex;
`

interface CardsGroupScrollProps {
    children: React.ReactNode
}

export const CardGroupScrolling = ({children}: CardsGroupScrollProps) => {
    return (
        <CardsGroupScroll horizontal contentContainerStyle={{ paddingHorizontal: 20 }}>
            <CardsGroup>
                {children}
            </CardsGroup>
        </CardsGroupScroll>
    )
}