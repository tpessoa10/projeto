import styled from "styled-components/native"

const CardsGroup = styled.View`
    display: flex;
    flex-direction: row;
    gap: 8px;
`
const CardsGroupScroll = styled.ScrollView`
    display: flex;
`

interface CardsGroupScrollProps {
    children: React.ReactNode
}

export const CardGroupScrolling = ({children}: CardsGroupScrollProps) => {
    return (
        <CardsGroupScroll horizontal contentContainerStyle={{ paddingHorizontal: 10 }}>
            <CardsGroup>
                {children}
            </CardsGroup>
        </CardsGroupScroll>
    )
}