"use client";
import { ScrollArea, Table, Text } from '@mantine/core';
import {useWeightStore} from "@/stores/weightStore";

export default function HistoryTab() {
    const userWeights = useWeightStore(state => state.userWeight);
    const rows = userWeights.map((element) => (
        <Table.Tr key={element.id}>
            <Table.Td>{element.weight}</Table.Td>
            <Table.Td>{new Date(element.date).toLocaleDateString("ru-RU")}</Table.Td>
        </Table.Tr>
    ));

    return (
        <div>
            <Text size="xl" fw={500} mb="md">История веса</Text>

            {userWeights.length === 0 ? (
                <p>Нет данных</p>
            ) : (
                <ScrollArea h={250}>
                    <Table>
                        <Table.Thead>
                            <Table.Tr>
                                <Table.Th>Вес</Table.Th>
                                <Table.Th>Дата</Table.Th>
                            </Table.Tr>
                        </Table.Thead>
                        <Table.Tbody>{rows}</Table.Tbody>
                    </Table>
                </ScrollArea>
            )}
        </div>
    );
}