import { DescricaoPerfilEstabelecimento } from "./DescricaoPerfilEstabelecimento"
import { ImagemPerfilEstabelecimento } from "./ImagemPerfilEstabelecimento"
import { Text } from "react-native-svg"

const fotoUri = `https://img.freepik.com/vetores-premium/modelo-de-logotipo-vintage-de-barbearia_441059-26.jpg`


export const PerfilEstabelecimentoContainer = () => {
    return (
        <>
            <ImagemPerfilEstabelecimento fotoUrl={fotoUri}/>
            <DescricaoPerfilEstabelecimento texto="Descrição do Estabelecimento"/>
        </>
    )
}