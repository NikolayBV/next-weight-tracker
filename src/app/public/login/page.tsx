'use client';
import './login.css';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import MyButton from "@/components/ui/my-button/MyButton";
import Input from "@/components/ui/input/Input";
import Form from "@/components/forms/form/Form";
import {apiInstance} from "@/api/api";
import {useAuthStore} from "@/stores/authStore";
import {useUserStore} from "@/stores/userStore";

export default function LoginPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const router = useRouter();
    const setToken = useAuthStore(state => state.setAccessToken);
    const setUserId = useUserStore(state => state.setUserId);

    const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const response = await apiInstance.login({email, password});
        if(response && response.token){
            setToken(response.token);
            setUserId(response.user.id);
            router.push('/dashboard');
        }
    };

    return (
        <Form title={"Вход"} onSubmit={handleLogin}>
            <Input value={email}
                   onChange={e => setEmail(e.target.value)}
                   inputTitle={'Email'}
                   type={"Email"}
            />

            <Input value={password}
                   onChange={e => setPassword(e.target.value)}
                   inputTitle={'Пароль'}
                   type={"password"}
            />

            <MyButton buttonTitle={"Войти"}></MyButton>
        </Form>
    );
}