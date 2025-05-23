'use client';

import Layout from "@/app/dashboard/layout";
import {useAuth} from "@/utils/hooks/useAuth";
import MainTabs from "@/components/ui/main-tabs/MainTabs";

export default function DashboardPage() {
    useAuth();
    
    return (
        <Layout>
            <MainTabs />
        </Layout>
    );
}