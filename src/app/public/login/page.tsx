'use client';
import './login.css';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Button from "@/components/ui/Button";

export default function LoginPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const router = useRouter();

    const handleLogin = async () => {
        const res = await fetch('/api/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email, password }),
        });

        if (res.ok) {
            router.push('/dashboard');
        } else {
            alert('Ошибка входа');
        }
    };

    return (
        <div className="login">
            <h1 className="login__title">Вход</h1>
            <div className="login__form">
                <label className="login__label">
                    Email
                    <input
                        className="login__input"
                        type="email"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    />
                </label>

                <label className="login__label">
                    Пароль
                    <input
                        className="login__input"
                        type="password"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                    />
                </label>
                
                <Button onClick={handleLogin} buttonTitle={"Войти"}></Button>
            </div>
        </div>
    );
}