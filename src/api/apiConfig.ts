import axios, { AxiosInstance } from "axios";

export class Api {

    static readonly instace: AxiosInstance = axios.create({
        baseURL: "http://localhost:3000",
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