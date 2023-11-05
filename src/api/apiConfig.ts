import axios, { AxiosInstance } from "axios";

export class Api {

    static readonly instace: AxiosInstance = axios.create({
        baseURL: "http://168.75.103.246",
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