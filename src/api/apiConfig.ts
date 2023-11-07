import axios, { AxiosInstance } from "axios";

export class Api {

    static readonly instace: AxiosInstance = axios.create({
        baseURL: "https://bullfrog-garb.cyclic.app/",
    })

    public static async get(url: string) {
        const response = await this.instace.get(url);

        return response.data;
    }

    public static async post(url: string, data?: object) {
        const response = await this.instace.post(url, data);

        return response.data;
    }
    
}

// link reserva: http://168.75.103.246