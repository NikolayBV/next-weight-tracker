import { create } from "zustand";
import { devtools } from "zustand/middleware";

interface UserState {
    userId: string | null;
    userEmail: string | null;
    setUserId: (id: string) => void;
    setUserEmail: (email: string) => void;
    clearId: () => void;
    clearEmail: () => void;
}

export const useUserStore = create<UserState>()(
    devtools(
        (set) => ({
            userId: null,
            userEmail: null,
            setUserId: (id) => set({ userId: id }),
            setUserEmail: (email) => set({ userEmail: email }),
            clearId: () => set({ userId: null }),
            clearEmail: () => set({ userEmail: null }),
        }),
        { name: "UserStore" }
    )
);