'use client';
import './login.css';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Button from "@/components/ui/button/Button";
import Input from "@/components/ui/input/Input";
import Form from "@/components/forms/form/Form";
import {apiInstance} from "@/api/api";

export default function LoginPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const router = useRouter();

    const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const res = await apiInstance.login({email, password});

        if (res) {
            router.push('/dashboard');
        } else {
            alert('Ошибка входа');
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

            <Button  buttonTitle={"Войти"}></Button>
        </Form>
    );
}