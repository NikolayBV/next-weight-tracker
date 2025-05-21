import {create, StateCreator} from "zustand"
import { devtools } from 'zustand/middleware';

interface UserState {
    userId: string;
    userEmail: string;
    setUserId: (id: string) => void;
    setUserEmail: (email: string) => void;
    clearId: () => void;
    clearEmail: () => void;
}

export const useUserStore = create<UserState>(devtools((set) => ({
    userId: null,
    userEmail: null,
    setUserId: (id: string) => set({ userId: id }),
    setUserEmail: (email: string) => set({ userEmail: email }),
    clearId: () => set({ userId: "" }),
    clearEmail: () => set({ userEmail: "" }),
}))  as StateCreator<UserState>);