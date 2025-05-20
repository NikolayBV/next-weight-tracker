import api from "@/lib/axios";
import {AxiosInstance} from "axios";
import {LoginData, RegisterData} from "@/utils/interfaces";

class Api {
    private api: AxiosInstance;
    constructor() {
        this.api = api;
    }

    async login({email, password}: LoginData) {
        try {
            const response = await this.api.post('auth/login', { email, password });
            return response.data;
        } catch (error) {
            console.error('Ошибка логина:', error);
            throw error;
        }
    }
    
    async register({email, password, age, height}: RegisterData) {
        try {
            const response = await this.api.post('auth/register', { email, password, age, height });
            return response.data;
        } catch (error) {
            console.error('Ошибка регистрации:', error);
            throw error;
        }
    }
}

export const apiInstance = new Api();