'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useUserStore } from '@/stores/userStore';
import { apiInstance } from '@/api/api';
import {useAuthStore} from "@/stores/authStore"; // должен уметь делать POST /auth/refresh

export const useAuth = () => {
    const router = useRouter();
    const userId = useUserStore((state) => state.userId);
    const setAccessToken = useAuthStore((state) => state.setAccessToken);
    const setUserId = useUserStore((state) => state.setUserId);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const checkAuth = async () => {
            try {
                if (!userId) {
                    const res = await apiInstance.refresh();
                    const accessToken = res.accessToken;

                    setAccessToken(accessToken);
                    
                    const payload = JSON.parse(atob(accessToken.split('.')[1]));
                    setUserId(payload.sub);

                    router.push('/dashboard');
                }
            } catch (err) {
                router.replace(`/public/login`);
                console.log(err);
            } finally {
                setLoading(false);
            }
        };

        checkAuth();
    }, []);

    return { loading };
};