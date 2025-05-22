import { apiInstance } from '@/api/api';
import { useRouter } from 'next/navigation';
import {useAuthStore} from "@/stores/authStore";

export const useLogout = () => {
    const clear = useAuthStore((state) => state.clear);
    const router = useRouter();

    return async () => {
        try {
            await apiInstance.logout();
        } catch (e) {
            console.warn('Ошибка при выходе', e);
        } finally {
            clear();
            router.replace('/public/login');
        }
    };
};