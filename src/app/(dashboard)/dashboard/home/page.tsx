'use client';
import TransactionsCard from "@/shared/components/TransactionsCard";
import { ContainerOverview } from "./styledPage";
import PaymentCards from "@/shared/components/PaymentCard";
import WeeklyActivity from "@/shared/components/WeeklyActivity";
import MonthActivity from "@/shared/components/MonthActivity";
import RecentInvoice from "@/shared/components/RecentInvoice";

export default function Inicio() {
    return (
        <ContainerOverview>
            <PaymentCards />
            <TransactionsCard />
            <WeeklyActivity />
            <MonthActivity />
            <RecentInvoice />
        </ContainerOverview>
    )
}