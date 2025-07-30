import { Button } from '@/components/ui/button'
import {  Plus } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

const page = () => {
  const subscriptions = [
    {
      id: 1,
      name: 'Spotify',
      amount: 100,
      icon: '/icons/spotify.svg',
      date: 'Aug 3, 2025',
      status: 'active',
    },
    {
      id: 2,
      name: 'Netflix',
      amount: 10.99,
      icon: '/icons/netflix.jpg',
      date: 'Aug 3, 2025',
      status: 'active',
    },
    {
      id: 3,
      name: 'Apple Music',
      amount: 9.99,
      icon: '/icons/apple-music.png',
      date: 'Aug 3, 2025',
      status: 'active',
    },
    {
      id: 4,
      name: 'Notion',
      amount: 10.99,
      icon: '/icons/notion.png',
      date: 'Aug 3, 2025',
      status: 'active',
    },
    {
      id: 5,
      name: 'Microsoft 365',
      amount: 17.99,
      icon: '/icons/microsoft.jpg',
      date: 'Aug 3, 2025',
      status: 'active',
    },
    {
      id: 6,
      name: 'Adobe Creative Cloud',
      amount: 19.99,
      icon: '/icons/adobe.png',
      date: 'Aug 3, 2025',
      status: 'active',
    },
  ]
  return (
		<div className='p-6 px-10'>
			<div className='flex justify-between items-center'>
				<h4 className='font-semibold text-2xl mb-10'>
					All Subscriptions
				</h4>
				<Button
					className='bg-white/5 font-medium rounded-lg w-xs text-blue-500 hover:text-white transition-all duration-300 ease-in-out hover:bg-blue-500/80 py-6'
					size={'lg'}
				>
					<Plus className='text-2xl' /> Add Subscription
				</Button>
			</div>
			<div className='flex flex-col gap-y-7 mt-10'>
				{subscriptions.map((subscription) => (
					<div
						key={subscription.id}
						className='flex justify-between items-center hover:bg-slate-800/60 hover:cursor-pointer rounded-lg  p-4 bg-slate-900/80 transition-all duration-300 hover:scale-102 hover:shadow-md hover:shadow-blue-500/10 hover:-translate-y-1'
					>
						<div>
							<div className='flex items-center gap-x-2'>
								<Image
									src={subscription.icon}
									width={40}
									height={40}
									alt={subscription.name}
									className='rounded-lg'
								/>
								<div>
									<h4 className='font-semibold text-lg'>
										{subscription.name}
									</h4>
									<p className='text-sm text-muted-foreground'>
										{' '}
										<span className='font-semibold text-white'>${subscription.amount}</span> / month
									</p>
								</div>
							</div>
              <p className='text-sm text-white'>
                Next Payment: {subscription.date}
              </p>
						</div>
						
						<Button
							className='bg-white/5 font-medium rounded-lg w-xs text-white hover:text-white transition-all duration-300 ease-in-out hover:bg-blue-500/80 py-6'
							size={'lg'}
						>
							Manage
						</Button>
					</div>
				))}
			</div>
		</div>
  );
}

export default page