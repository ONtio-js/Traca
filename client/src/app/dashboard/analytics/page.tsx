import Doughnotchart from '@/app/_components/Doughnotchart';
import { Button } from '@/components/ui/button';
import { ArrowUpRight, TrendingDown, TrendingUp } from 'lucide-react';
import Image from 'next/image';

const page = () => {
	return (
		<div className='p-6 px-10 pb-10'>
			<h4 className='font-semibold text-2xl'>Analytics</h4>
			<p className='text-muted-foreground'>
				View your subscription analytics
			</p>
			<div className='grid grid-cols-1 lg:grid-cols-2 gap-8 gap-x-10 mt-10'>
				<div className='w-full'>
					<Doughnotchart />
					<div className='mt-10'>
						<h4 className='font-semibold text-lg'>
							Subscription Trends
						</h4>
						<div className='mt-4 space-y-2 flex gap-4'>
							<div className='space-y-3'>
								<div className='flex items-center gap-2'>
									<Image
										src={'/icons/spotify.svg'}
										alt='streaming'
										width={40}
										height={40}
									/>
									<p className='text-2xl font-semibold'>
										Spotify
									</p>
								</div>
								<div className='flex items-center gap-4'>
									<TrendingUp className='w-4 h-4 text-green-500' />
									<p className=''>
										Upgraded from individual to family plan
									</p>
								</div>
								<p className='font-semibold'>New cost: $8.99 (was $3.99)</p>
							</div>
                            <div className='space-y-3 '>
                                <div className='flex items-center gap-2'>
                                    <Image
                                        src={'/icons/netflix.jpg'}
                                        alt='netflix'
                                        width={40}
                                        height={40}
                                    />
                                    <p className='text-2xl font-semibold'>Netflix</p>
                                </div>
                                <div className='flex items-center gap-4'>
                                    <TrendingDown className='w-4 h-4 text-red-500' />
                                    <p className=''>
                                        Downgraded from family to individual plan
                                    </p>
                                </div>
                                <p className='font-semibold'>New cost: $0.00 (was $13.99)</p>
                            </div>
						</div>
					</div>
				</div>
				<div className='flex flex-col gap-4 items-end'>
					<Button
						className='bg-slate-800/60 min-w-[200px] text-white hover:bg-slate-800/80 '
						size={'lg'}
					>
						Export Analytics
					</Button>
					<div className='mt-10 w-full'>
						<h4 className='font-semibold text-lg'>
							Top Spending Categories
						</h4>
						<div className='mt-4 space-y-2'>
							<div className='flex items-center justify-between'>
								<div className='flex items-center gap-2'>
									<div className='w-4 h-4 bg-blue-500 rounded-full' />
									<p className='text-sm text-gray-300'>
										Streaming
									</p>
								</div>
								<p className='text-sm text-gray-300'>$1000</p>
							</div>
							<div className='flex items-center justify-between'>
								<div className='flex items-center gap-2'>
									<div className='w-4 h-4 bg-green-500 rounded-full' />
									<p className='text-sm text-gray-300'>
										Cloud Storage
									</p>
								</div>
								<p className='text-sm text-gray-300'>$120</p>
							</div>
							<div className='flex items-center justify-between'>
								<div className='flex items-center gap-2'>
									<div className='w-4 h-4 bg-red-500 rounded-full' />
									<p className='text-sm text-gray-300'>
										Design Tools
									</p>
								</div>
								<p className='text-sm text-gray-300'>$1300</p>
							</div>
							<div className='flex items-center justify-between'>
								<div className='flex items-center gap-2'>
									<div className='w-4 h-4 bg-yellow-500 rounded-full' />
									<p className='text-sm text-gray-300'>
										Productivity
									</p>
								</div>
								<p className='text-sm text-gray-300'>$150</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default page;
