import React from 'react'
import { Card, CardContent, CardFooter, CardTitle } from './ui/card';
import Image from 'next/image';
const latestTransaction = [
    {
        id: 1,
        title: "Payment Received",
        badge: "John Snow",
        image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        count: 1300,
    },
    {
        id: 2,
        title: "Payment Received",
        badge: "Micheal Dave",
        image: "https://images.unsplash.com/photo-1742241107816-349e7f7c0f50?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        count: 2300,
    },
    {
        id: 3,
        title: "Subscription Renewal",
        badge: "John Smith",
        image: "https://images.unsplash.com/photo-1644952354935-0bc0d25a9996?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        count: 4300,
    },
    {
        id: 4,
        title: "Payment for Services",
        badge: "Alex John",
        image: "https://images.unsplash.com/photo-1542744173-05336fcc7ad4?q=80&w=1102&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        count: 3300,
    },
    {
        id: 5,
        title: "One Time Setup",
        badge: "David Warner",
        image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        count: 5300,
    },
];

const otherTransactions = [
    {
        id: 1,
        title: "Refund Issued",
        badge: "Sophia Miller",
        image: "https://source.unsplash.com/random/100x100/?woman,face,portrait",
        count: 1200,
    },
    {
        id: 2,
        title: "New Purchase",
        badge: "Ethan Clark",
        image: "https://source.unsplash.com/random/100x100/?male,smiling",
        count: 2100,
    },
    {
        id: 3,
        title: "Service Charge",
        badge: "Olivia Brown",
        image: "https://source.unsplash.com/random/100x100/?female,professional",
        count: 3500,
    },
    {
        id: 4,
        title: "Annual Membership",
        badge: "Liam Johnson",
        image: "https://source.unsplash.com/random/100x100/?man,profile",
        count: 4600,
    },
    {
        id: 5,
        title: "Upgrade Fee",
        badge: "Emma Wilson",
        image: "https://source.unsplash.com/random/100x100/?woman,young",
        count: 5900,
    },
];

const CardList = ({ title }: { title: string }) => {
    const list = title === "Latest Transactions" ? latestTransaction : otherTransactions;
    return (
        <div className=''>
            <h1 className='text-lg font-medium mb-6'>{title}</h1>
            <div className='flex flex-col gap-4'>
                {list.map(item => (
                    <Card key={item.id} className='flex-row items-center justify-between gap-4 p-2 py-4'>
                        <div className='h-12 w-12 relative overflow-hidden'>
                            <Image src={item.image} alt={item.title} fill className='object-cover' />
                        </div>
                        <CardContent className='p-0'>
                            <CardTitle className='text-xs font-medium'>{item.title}</CardTitle>
                        </CardContent>
                        <CardFooter>{item.count / 1000}K</CardFooter>
                    </Card>
                ))}
            </div>
        </div>
    )
}

export default CardList