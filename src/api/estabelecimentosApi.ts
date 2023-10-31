import { Api } from "./apiConfig";


const getEstabelecimentosProximos = async (latitude: number, longitude: number) => {
    const response = await Api.get(`/estabelecimentos/proximos?lat=${latitude}&long=${longitude}`);

    return response;
}

export {getEstabelecimentosProximos}