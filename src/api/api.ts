import api from "@/lib/axios";
import axios, {AxiosInstance} from "axios";
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
            if (axios.isAxiosError(error)) {
                if (error.response?.status === 409) {
                    console.log('Такой email уже зарегистрирован!');
                }
                console.error('Axios ошибка регистрации:', error.response?.data);
            } else {
                console.error('Неизвестная ошибка регистрации:', error);
            }

            throw error;
        }
    }
    
    async getUser(userId: string) {
        try {
            const response = await this.api.get(`users/${userId}`);
            return response.data;
        } catch (error) {
            console.error('Ошибка получения пользователя:', error);
            throw error;
        }
    }
    
    async refresh() {
        try {
            const response = await this.api.post('/auth/refresh');
            return response.data;
        } catch (error) {
            console.error('Ошибка получения пользователя:', error);
            throw error;
        }
    }

    async logout() {
        try {
            const response = await this.api.post('/auth/logout');
            return response.data;
        } catch (error) {
            console.error('Ошибка получения пользователя:', error);
            throw error;
        }
    }
}

export const apiInstance = new Api();