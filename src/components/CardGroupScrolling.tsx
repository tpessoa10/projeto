import { FlatList } from "react-native"
import { Card } from "./Card"
import { useNavigation } from "@react-navigation/native"


interface CardsGroupScrollProps {
    data: any[]
}

const fotoUri = `https://img.freepik.com/vetores-premium/modelo-de-logotipo-vintage-de-barbearia_441059-26.jpg`


export const CardGroupScrolling = ({ data }: CardsGroupScrollProps) => {
    const navegaParPerfilEstabelecimento = () => {
        navigation.navigate('PerfilEstabelecimento')
    }

    const navigation = useNavigation()
    return (
        <FlatList
            data={data}
            renderItem={({ item }) => <Card nome={item.nomeEmpresa} fotoUrl={fotoUri} onPress={navegaParPerfilEstabelecimento}/>}
            horizontal
            contentContainerStyle={{ gap: 8}}
        />

    )
}