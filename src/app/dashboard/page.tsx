'use client';

import Layout from "@/app/dashboard/layout";
import {useAuth} from "@/utils/hooks/useAuth";
import MainTabs from "@/components/ui/main-tabs/MainTabs";
import {useLoadWeights} from "@/utils/hooks/useLoadWeights";

export default function DashboardPage() {
    useAuth();
    useLoadWeights();
    
    return (
        <Layout>
            <MainTabs />
        </Layout>
    );
}