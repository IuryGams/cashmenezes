import React, { useState } from 'react';
import { AmountCell, DownloadButton, HeaderCell, Pagination, PaginationButton, Tab, TabContainer, Table, TableCell, TableContainer, TableHeader, TableRow } from './styled';
import ContainerSection from '../ContainerSection';



const transactions = [
    { id: '12548796', description: 'Spotify Subscription', type: 'Shopping', card: '1234 ****', date: '3 Jul, 8.21 AM', amount: -100 },
    { id: '12548790', description: 'Freepik Sales', type: 'Transfer', card: '1234 ****', date: '4 Jul, 8.21 AM', amount: 200 },
    { id: '12548799', description: 'Mobile Service', type: 'Service', card: '1234 ****', date: '5 Jul, 8.21 AM', amount: -300 },
    { id: '12548798', description: 'Willson', type: 'Transfer', card: '1234 ****', date: '6 Jul, 8.21 AM', amount: 400 },
    { id: '12548797', description: 'Emily', type: 'Transfer', card: '1234 ****', date: '7 Jul, 8.21 AM', amount: -500 },
];

const RecentInvoice = () => {
    const [activeTab, setActiveTab] = useState('all');

    const handleTabChange = (tab: string) => {
        setActiveTab(tab);
    };

    return (
        <ContainerSection style={{gridColumn: "table"}} title="Fatura Recente">

            <TableContainer>
                <TabContainer>
                    <Tab isActive={activeTab === 'all'} onClick={() => handleTabChange('all')}>All Transactions</Tab>
                    <Tab isActive={activeTab === 'income'} onClick={() => handleTabChange('income')}>Income</Tab>
                    <Tab isActive={activeTab === 'expense'} onClick={() => handleTabChange('expense')}>Expense</Tab>
                </TabContainer>

                <Table>
                    <TableHeader>
                        <TableRow>
                            <HeaderCell>Description</HeaderCell>
                            <HeaderCell>Transaction ID</HeaderCell>
                            <HeaderCell>Type</HeaderCell>
                            <HeaderCell>Card</HeaderCell>
                            <HeaderCell>Date</HeaderCell>
                            <HeaderCell>Amount</HeaderCell>
                            <HeaderCell>Download</HeaderCell>
                        </TableRow>
                    </TableHeader>
                    <tbody>
                        {transactions.map((transaction) => (
                            <TableRow key={transaction.id}>
                                <TableCell>{transaction.description}</TableCell>
                                <TableCell># {transaction.id}</TableCell>
                                <TableCell>{transaction.type}</TableCell>
                                <TableCell>{transaction.card}</TableCell>
                                <TableCell>{transaction.date}</TableCell>
                                <AmountCell isPositive={transaction.amount > 0}>
                                    {transaction.amount > 0 ? `+ R$ ${transaction.amount}` : `- R$ ${Math.abs(transaction.amount)}`}
                                </AmountCell>
                                <TableCell>
                                    <DownloadButton>Download</DownloadButton>
                                </TableCell>
                            </TableRow>
                        ))}
                    </tbody>
                </Table>

                <Pagination>
                    <PaginationButton>{'< Previous'}</PaginationButton>
                    <div>
                        <PaginationButton isActive>1</PaginationButton>
                        <PaginationButton>2</PaginationButton>
                        <PaginationButton>3</PaginationButton>
                    </div>
                    <PaginationButton>{'Next >'}</PaginationButton>
                </Pagination>
            </TableContainer>
        </ContainerSection>
    );
};

export default RecentInvoice;
