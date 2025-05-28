import "./main-tabs.css";
import { Tabs } from '@mantine/core';
import { IconDashboard, IconList, IconUser } from '@tabler/icons-react';
import MyButton from "@/components/ui/my-button/MyButton";
import {useLogout} from "@/utils/hooks/useLogout";
import DashboardTab from "@/components/ui/dashboard-tab/DashboardTab";
import HistoryTab from "@/components/ui/histrory-tab/HistoryTab";

export default function MainTabs() {
    const handleLogout = useLogout();
    return (
        <Tabs defaultValue="dashboard">
            <Tabs.List>
                <Tabs.Tab value="dashboard" leftSection={<IconDashboard size={12} />}>
                    Dashboard
                </Tabs.Tab>
                <Tabs.Tab value="history" leftSection={<IconList size={12} />}>
                    History
                </Tabs.Tab>
                <Tabs.Tab value="profile" leftSection={<IconUser size={12} />}>
                    Profile
                </Tabs.Tab>
            </Tabs.List>

            <Tabs.Panel className={"tabs__panel"} value="dashboard">
                <DashboardTab/>
            </Tabs.Panel>

            <Tabs.Panel value="history">
                <HistoryTab />
            </Tabs.Panel>

            <Tabs.Panel value="profile">
                <MyButton buttonTitle={"Выйти"} size={"xs"} onClick={handleLogout}/>
            </Tabs.Panel>
        </Tabs>
    );
}