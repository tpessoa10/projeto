import { Api } from "./apiConfig";


const getEstabelecimentosProximos = async (latitude: number, longitude: number, tipoServico?: string[]) => {
    const response = await Api.get(`/estabelecimentos/proximos?lat=${latitude}&long=${longitude}&tipoServico=${tipoServico?.toString()}`);

    return response;
}

const getEstabelecimentosPorPesquisa = async(porNome: string, tipoServico?: string) => {
    const response = await Api.get(`/estabelecimentos?porNome=${porNome}`)

    return response
}

export {getEstabelecimentosProximos, getEstabelecimentosPorPesquisa}