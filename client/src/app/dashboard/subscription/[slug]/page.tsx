'use client';
import { Button } from '@/components/ui/button'
import { ArrowLeft } from 'lucide-react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import React from 'react'

const page = () => {
    const router = useRouter();
  return (
		<div className='p-6 px-10'>
			<div>
				<ArrowLeft
					width={30}
					onClick={() => {
						router.back();
					}}
				/>
				<div className='flex items-center gap-x-2 mt-10 justify-between'>
					<div className='flex items-center gap-x-4'>
						<Image
							src={'/icons/spotify.svg'}
							alt='spotify'
							width={40}
							height={40}
						/>
						<h4 className='font-semibold text-lg'>Spotify</h4>
					</div>
					<Button
						className='bg-red-500 font-medium rounded-lg w-xs text-white transition-all duration-300 ease-in-out hover:bg-red-500/80 py-6'
						size={'lg'}
					>
						Cancel Subscription
					</Button>
				</div>
				<div className='mt-5 flex justify-between items-center max-w-sm'>
					<div className='space-y-2'>
						<h4 className='font-semibold text-lg'>
							$10.99 / month
						</h4>
						<p className='text-sm text-muted-foreground'>
							Entertainment
						</p>
					</div>
					<div className='space-y-2'>
						<p className='text-sm text-muted-foreground'>
							Billing cycle: 1 month
						</p>
						<p className='font-semibold text-white'>
							Next payment: Aug 3, 2025
						</p>
					</div>
				</div>
			</div>
			<div className='mt-16'>
				<h4 className='font-semibold text-lg'>Payment History</h4>
				<div className='mt-5 bg-slate-900/80 rounded-lg  max-w-3xl space-y-5 px-10 py-5'>
					<div className='flex justify-between items-center'>
						<p className='text-sm text-muted-foreground'>Date</p>
						<p className='text-sm text-muted-foreground'>Amount</p>
					</div>
					<ul className='mt-5 space-y-4'>
						<li className='flex justify-between items-center hover:bg-gray-100/10 rounded-lg  transition-all duration-300 ease-in-out hover:cursor-pointer hover:text-white hover:translate-x-2 hover:p-2'>
							<p className='text-sm text-muted-foreground'>
								Aug 3, 2025
							</p>
							<p className='text-sm text-white'>$10.99</p>
						</li>
						<li className='flex justify-between items-center hover:bg-gray-100/10 rounded-lg  transition-all duration-300 ease-in-out hover:cursor-pointer hover:text-white hover:translate-x-2'>
							<p className='text-sm text-muted-foreground'>
								Sep 3, 2025
							</p>
							<p className='text-sm text-white'>$10.99</p>
						</li>
						<li className='flex justify-between items-center hover:bg-gray-100/10 rounded-lg  transition-all duration-300 ease-in-out hover:cursor-pointer hover:text-white hover:translate-x-2 hover:p-2'>
							<p className='text-sm text-muted-foreground'>
								Oct 3, 2025
							</p>
							<p className='text-sm text-white'>$10.99</p>
						</li>
						<li className='flex justify-between items-center hover:bg-gray-100/10 rounded-lg  transition-all duration-300 ease-in-out hover:cursor-pointer hover:text-white hover:translate-x-2 hover:p-2'>
							<p className='text-sm text-muted-foreground'>
								Nov 3, 2025
							</p>
							<p className='text-sm text-white'>$10.99</p>
						</li>
						<li className='flex justify-between items-center hover:bg-gray-100/10 rounded-lg  transition-all duration-300 ease-in-out hover:cursor-pointer hover:text-white hover:translate-x-2 hover:p-2 '>
							<p className='text-sm text-muted-foreground'>
								Dec 3, 2025
							</p>
							<p className='text-sm text-white'>$10.99</p>
						</li>
					</ul>
				</div>
				<div className='flex flex-col justify-center items-center gap-10 mt-10 max-w-3xl'>
					<p className='text-center max-w-2xl'>
						Over time, monthly plan costs more. The yearly plan for
						Spotify saves you $16/year. Why not switch?
					</p>
					<Button
						className='bg-blue-500 font-medium rounded-lg w-xs text-white hover:text-white transition-all duration-300 ease-in-out hover:bg-blue-500/80 py-6'
						size={'lg'}
					>
						Switch to Yearly Plan
					</Button>
				</div>
			</div>
		</div>
  );
}

export default page