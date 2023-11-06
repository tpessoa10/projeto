import { FlatList } from "react-native"
import { Card } from "./Card"


interface CardsGroupScrollProps {
    data: any[]
}

const fotoUri = `https://img.freepik.com/vetores-premium/modelo-de-logotipo-vintage-de-barbearia_441059-26.jpg`

export const CardGroupScrolling = ({ data }: CardsGroupScrollProps) => {
    return (
        <FlatList
            data={data}
            renderItem={({ item }) => <Card nome={item.nomeEmpresa} fotoUrl={fotoUri} />}
            horizontal
            contentContainerStyle={{ gap: 8}}
        />

    )
}