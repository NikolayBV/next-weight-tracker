import { apiInstance } from '@/api/api';
import { useRouter } from 'next/navigation';
import {useAuthStore} from "@/stores/authStore";
import {useWeightStore} from "@/stores/weightStore";

export const useLogout = () => {
    const clear = useAuthStore((state) => state.clear);
    const clearWeight =useWeightStore((state) => state.clear);
    const router = useRouter();

    return async () => {
        try {
            await apiInstance.logout();
        } catch (e) {
            console.warn('Ошибка при выходе', e);
        } finally {
            clear();
            clearWeight();
            router.replace('/public/login');
        }
    };
};