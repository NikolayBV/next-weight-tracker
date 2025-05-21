'use client';

import Button from "@/components/ui/button/Button";
import Form from "@/components/forms/form/Form";
import Input from "@/components/ui/input/Input";
import React, {useState} from "react";
import {useRouter} from "next/navigation";
import {apiInstance} from "@/api/api";
import {useAuthStore} from "@/stores/authStore";
import {useUserStore} from "@/stores/userStore";

export default function Register() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [age, setAge] = useState("");
    const [height, setHeight] = useState("");
    const router = useRouter();
    const setToken = useAuthStore(state => state.setAccessToken);
    const setUserId = useUserStore(state => state.setUserId);
    
    async function handleRegister(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        if (!email || !password || !age || !height) {
            alert('Заполните все поля!');
            return;
        }
        const response = await apiInstance.register({email, password, age, height});
        if(response && response.token){
            setToken(response.token);
            setUserId(response.user.id);
            router.push('/dashboard');
        }
    }
    
    return (
        <Form title={"Регистрация"} onSubmit={handleRegister}>
            <Input inputTitle={'Email'} 
                   value={email} 
                   onChange={e => setEmail(e.target.value)}
                   type={"email"}
            />
            <Input inputTitle={'Пароль'}
                   value={password}
                   onChange={e => setPassword(e.target.value)}
                   type={"password"}
            />
            <Input inputTitle={'Возраст'}
                   value={age}
                   onChange={e => setAge(e.target.value)}
                   type={"text"}
            />
            <Input inputTitle={'Рост'}
                   value={height}
                   onChange={e => setHeight(e.target.value)}
                   type={"text"}
            />
            <Button type={"submit"} buttonTitle={"Зарегистрироваться"}/>
        </Form>
    );
} 