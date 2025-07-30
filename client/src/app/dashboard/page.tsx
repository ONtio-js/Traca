import { Button } from '@/components/ui/button';
import { Trash } from 'lucide-react';
import Image from 'next/image';
import React from 'react'
import PieChart from '../_components/PieChart';

const Page = () => {
    const subscriptions = [
        {
            id: 1,
            name: 'Spotify',
            amount: 100,
            icon: '/icons/spotify.svg',
            date: 'Aug 3',
            status: 'active',
        },
        {
            id: 2,
            name: 'Netflix',
            amount: 100,
            icon: '/icons/netflix.jpg',
            date: 'Aug 3',
            status: 'active',
        },
        {
            id: 3,
            name: 'Apple Music',
            amount: 100,
            icon: '/icons/apple-music.png',
            date: 'Aug 3',
            status: 'active',
        },
        {
            id: 4,
            name: 'Notion',
            amount: 100,
            icon: '/icons/notion.png',
            date: 'Aug 3',
            status: 'active',
        },
        {
            id: 5,
            name: 'Microsoft 365',
            amount: 100,
            icon: '/icons/microsoft.jpg',
            date: 'Aug 3',
            status: 'active',
        },
        {
            id: 6,
            name: 'Adobe Creative Cloud',
            amount: 100,
            icon: '/icons/adobe.png',
            date: 'Aug 3',
            status: 'active',
        },
    ]
  return (
		<div className='p-6 px-10'>
			<div className='space-y-2'>
				<h3 className='text-3xl font-semibold'>Welcome back, Nkwuda</h3>
				<p className='text-lg'>
					You’re spending $120/month across 8 active subscriptions
				</p>
			</div>
			<div className='flex items-start  gap-10 mt-10'>
				<div className='bg-slate-800/60 w-1/2 p-10 px-14 rounded-xl space-y-8 border-[1px] border-slate-700'>
					<h4 className='font-semibold text-lg'>Upcoming Renewals</h4>
					<div className='bg-white/5 rounded-xl flex p-5 justify-between '>
						<div className='flex gap-x-4'>
							<Image
								src={'/icons/spotify.svg'}
								width={50}
								height={50}
								alt='spotify'
							/>
							<div>
								<h4 className='font-semibold text-lg'>Spotify</h4>
								<p className='text-lg'>Renews Aug 3</p>
							</div>
						</div>
						<h4 className='font-semibold'>$4.65</h4>
					</div>
                    <Button className='w-full py-8 text-lg text-red-500 bg-red-500/20 hover:bg-red-500/10' size={'lg'}>
                        <Trash className='text-2xl' /> Cancel
                    </Button>
				</div>
				<div className='bg-slate-800/60 w-1/2 p-10 rounded-xl border-slate-700 border'>
					<h4 className='font-semibold text-lg'>Spending by category</h4>
                    <PieChart
                    />
				</div>
			</div>

            <div className='mt-10  p-10 rounded-xl'>
                <h4 className='font-semibold text-2xl mb-10'>Active Subscriptions</h4>
                <div className='flex flex-col gap-y-7'>
                    {subscriptions.map((subscription) => (
                    <div key={subscription.id} className='flex justify-between items-center hover:bg-slate-800/60 hover:cursor-pointer rounded-lg  p-4 bg-slate-900/80 transition-all duration-300 hover:scale-102 hover:shadow-md hover:shadow-blue-500/10 hover:-translate-y-1'>
                        <div className='flex items-center gap-x-2'>
                            <Image src={subscription.icon} width={40} height={40} alt={subscription.name} className='rounded-lg' />
                            <div>
                                <h4 className='font-semibold text-lg'>{subscription.name}</h4>
                                <p className='text-sm text-muted-foreground'> Next Billing: {subscription.date}</p>
                            </div>
                        </div>
                        <h4 className='font-semibold'>${subscription.amount}/month</h4>
                        <Button className='bg-white/5 font-medium rounded-lg w-xs text-white hover:bg-blue-500/80' size={'lg'}>
                        Manage
                        </Button>
                    </div>
                    ))}
                </div>
            </div>
		</div>
  );
}

export default Page;