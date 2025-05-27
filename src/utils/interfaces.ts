export interface RegisterData {
    email: string;
    password: string;
    birthdayDate: string;
    height: string;
}

export interface AddWeighData {
    userId: string;
    weight: string;
    date: string;
}

export interface LoginData {
    email: string;
    password: string;
}