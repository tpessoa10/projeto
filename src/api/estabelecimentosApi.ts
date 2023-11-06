import { Api } from "./apiConfig";


const getEstabelecimentosProximos = async (latitude: number, longitude: number) => {
    const response = await Api.get(`/estabelecimentos/proximos?lat=${latitude}&long=${longitude}`);

    return response;
}

const getEstabelecimentosPorPesquisa = async(porNome: string, tipoServico: string) => {
    const response = await Api.get(`/estabelecimentos?porNome=${porNome}&tipoServico=${tipoServico}`)
}

export {getEstabelecimentosProximos, getEstabelecimentosPorPesquisa}