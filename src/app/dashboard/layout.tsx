'use client';

import { useUserStore } from '@/stores/userStore';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

interface Props {
    children: React.ReactNode;
}

export default function ProtectedLayout({ children }: Props) {
    const userId = useUserStore(state => state.userId);
    const router = useRouter();

    useEffect(() => {
        if (!userId) {
            router.replace('/public/login');
        }
    }, [userId]);

    if (!userId) {
        return null;
    }

    return <>{children}</>;
}