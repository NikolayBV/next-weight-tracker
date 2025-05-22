'use client';

import Layout from "@/app/dashboard/layout";
import {useAuth} from "@/utils/hooks/useAuth";
import Button from "@/components/ui/button/Button";
import {useLogout} from "@/utils/hooks/useLogout";

export default function DashboardPage() {
    useAuth();
    
    const handleLogout = useLogout();
    return (
        <Layout>
            <h1>Dashboard</h1>
            <Button buttonTitle={"Выйти"} type={"button"} onClick={handleLogout}/>
        </Layout>
    );
}