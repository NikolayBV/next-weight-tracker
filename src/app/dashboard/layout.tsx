'use client';

import {useAuth} from "@/utils/hooks/useAuth";

interface Props {
    children: React.ReactNode;
}

export default function ProtectedLayout({ children }: Props) {

    return <>{children}</>;
}