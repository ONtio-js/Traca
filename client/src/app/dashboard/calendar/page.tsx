'use client';
import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from '@/components/ui/select';
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { CalendarIcon, RefreshCw } from 'lucide-react';
import React, { useState } from 'react';
import { DayButton } from 'react-day-picker';
import Image from 'next/image';

interface Product {
	id: number;
	name: string;
	amount: number;
	icon: string;
	renewalDate: Date;
	status: 'active' | 'cancelled';
}

const Page = () => {
	const [selectedDate, setSelectedDate] = useState<Date | undefined>(
		new Date()
	);
	const [selectedProduct, setSelectedProduct] = useState<string>('');

	// Sample products with renewal dates
	const [products, setProducts] = useState<Product[]>([
		{
			id: 1,
			name: 'Spotify',
			amount: 9.99,
			icon: '/icons/spotify.svg',
			renewalDate: new Date('2025-08-05'),
			status: 'active',
		},
		{
			id: 2,
			name: 'Netflix',
			amount: 10.99,
			icon: '/icons/netflix.jpg',
			renewalDate: new Date('2025-08-16'),
			status: 'active',
		},
		{
			id: 3,
			name: 'Apple Music',
			amount: 9.99,
			icon: '/icons/apple-music.png',
			renewalDate: new Date('2025-08-21'),
			status: 'active',
		},
		{
			id: 4,
			name: 'Notion',
			amount: 10.99,
			icon: '/icons/notion.png',
			renewalDate: new Date('2025-08-20'),
			status: 'active',
		},
	]);

	const handleUpdateRenewalDate = () => {
		if (!selectedProduct || !selectedDate) return;

		setProducts((prevProducts) =>
			prevProducts.map((product) =>
				product.name === selectedProduct
					? { ...product, renewalDate: selectedDate }
					: product
			)
		);

		// Reset selections
		setSelectedProduct('');
		setSelectedDate(new Date());
	};

	const getRenewalsForDate = (date: Date) => {
		return products.filter((product) => {
			const productDate = new Date(product.renewalDate);
			return (
				productDate.getDate() === date.getDate() &&
				productDate.getMonth() === date.getMonth() &&
				productDate.getFullYear() === date.getFullYear()
			);
		});
	};

	const formatDate = (date: Date) => {
		return date.toLocaleDateString('en-US', {
			month: 'short',
			day: 'numeric',
			year: 'numeric',
		});
	};

	// Custom DayButton component to show product names
	const CustomDayButton = ({
		day,
		modifiers,
		...props
	}: React.ComponentProps<typeof DayButton>) => {
		const renewals = getRenewalsForDate(day.date);
		const hasRenewals = renewals.length > 0;

		return (
			<Button
				variant='ghost'
				size='icon'
				data-day={day.date.toLocaleDateString()}
				data-selected-single={
					modifiers.selected &&
					!modifiers.range_start &&
					!modifiers.range_end &&
					!modifiers.range_middle
				}
				data-range-start={modifiers.range_start}
				data-range-end={modifiers.range_end}
				data-range-middle={modifiers.range_middle}
				className='aspect-square w-full min-h-[80px] flex flex-col items-center justify-center p-2 hover:bg-white/10 rounded cursor-pointer data-[selected-single=true]:bg-primary data-[selected-single=true]:text-primary-foreground'
				style={{
					gridColumn: `span ${day.date.getDate()}`,
				}}
				{...props}
			>
				{hasRenewals ? (
					<div className='flex  gap-1 w-full'>
						{renewals.slice(0, 2).map((product) => (
							<div
								key={product.id}
								className='flex items-center gap-1 px-2 py-1 bg-blue-500/20 rounded text-xs font-medium text-blue-300'
								title={`${product.name} - $${product.amount}`}
							>
								<Image
									width={16}
									height={16}
									src={product.icon}
									alt={product.name}
									className='w-4 h-4 rounded'
								/>
								<span className='truncate text-xs'>
									{product.name}
								</span>
							</div>
						))}
						{renewals.length > 2 && (
							<div className='text-xs text-blue-300 font-medium'>
								+{renewals.length - 2} more
							</div>
						)}
					</div>
				) : (
					<span className='text-base font-medium'>
						{day.date.getDate()}
					</span>
				)}
			</Button>
		);
	};
	CustomDayButton.displayName = 'CustomDayButton';

	return (
		<div className='p-6 px-10'>
			<div className='flex justify-between items-center mb-8'>
				<div>
					<h4 className='font-semibold text-2xl'>Calendar</h4>
					<p className='text-muted-foreground'>
						Manage your subscription renewal dates
					</p>
				</div>
			</div>

			<div className='grid grid-cols-1 lg:grid-cols-4 gap-8'>
				{/* Calendar Section */}
				<div className='lg:col-span-3'>
					<Card className='bg-slate-800/60 border-slate-700'>
						<CardHeader>
							<CardTitle className='flex items-center gap-2'>
								<CalendarIcon className='h-5 w-5' />
								Renewal Calendar
							</CardTitle>
							<CardDescription>
								Click on a date to view or update renewal
								schedules
							</CardDescription>
						</CardHeader>
						<CardContent>
							<div className='w-full max-w-3xl mx-auto'>
								<Calendar
									mode='single'
									selected={selectedDate}
									onSelect={setSelectedDate}
									initialFocus
									className='bg-white/5 font-medium rounded-lg text-white hover:text-white transition-all duration-300 ease-in-out hover:bg-white/10 w-full'
									components={{
										DayButton: CustomDayButton,
									}}
								/>
							</div>
						</CardContent>
					</Card>
				</div>

				{/* Product Management Section */}
				<div className='space-y-6'>
					{/* Selected Date Info */}
					{selectedDate && (
						<Card className='bg-slate-800/60 border-slate-700'>
							<CardHeader>
								<CardTitle className='text-lg'>
									Selected Date
								</CardTitle>
							</CardHeader>
							<CardContent>
								<p className='text-2xl font-bold mb-4'>
									{formatDate(selectedDate)}
								</p>
								{getRenewalsForDate(selectedDate).length > 0 ? (
									<div className='space-y-2'>
										<p className='text-sm text-muted-foreground mb-2'>
											Renewals on this date:
										</p>
										{getRenewalsForDate(selectedDate).map(
											(product) => (
												<div
													key={product.id}
													className='flex items-center gap-2 p-2 bg-slate-700/50 rounded'
												>
													<Image
														width={24}
														height={24}
														src={product.icon}
														alt={product.name}
														className='w-6 h-6 rounded'
													/>
													<span className='text-sm font-medium'>
														{product.name}
													</span>
													<Badge
														variant='secondary'
														className='ml-auto'
													>
														${product.amount}
													</Badge>
												</div>
											)
										)}
									</div>
								) : (
									<p className='text-sm text-muted-foreground'>
										No renewals scheduled for this date
									</p>
								)}
							</CardContent>
						</Card>
					)}

					{/* Update Renewal Date */}
					<Card className='bg-slate-800/60 border-slate-700'>
						<CardHeader>
							<CardTitle className='text-lg'>
								Update Renewal Date
							</CardTitle>
							<CardDescription>
								Select a product and date to update its renewal
								schedule
							</CardDescription>
						</CardHeader>
						<CardContent className='space-y-4'>
							<div className='space-y-2'>
								<label className='text-sm font-medium'>
									Select Product
								</label>
								<Select
									value={selectedProduct}
									onValueChange={setSelectedProduct}
								>
									<SelectTrigger className='bg-slate-700/50 border-slate-600'>
										<SelectValue placeholder='Choose a product' />
									</SelectTrigger>
									<SelectContent className='bg-slate-800 border-slate-700 '>
										{products.map((product) => (
											<SelectItem
												key={product.id}
												value={product.name}
												className='hover:bg-sidebar'
											>
												<div className='flex items-center gap-2 text-white'>
													<Image
														width={16}
														height={16}
														src={product.icon}
														alt={product.name}
														className='w-4 h-4 rounded'
													/>
													{product.name}
												</div>
											</SelectItem>
										))}
									</SelectContent>
								</Select>
							</div>

							{selectedProduct && (
								<div className='space-y-2'>
									<label className='text-sm font-medium'>
										Current Renewal Date
									</label>
									<p className='text-sm text-muted-foreground'>
										{formatDate(
											products.find(
												(p) =>
													p.name === selectedProduct
											)?.renewalDate || new Date()
										)}
									</p>
								</div>
							)}

							{selectedProduct && selectedDate && (
								<Button
									onClick={handleUpdateRenewalDate}
									className='w-full bg-blue-600 hover:bg-blue-700'
								>
									<RefreshCw className='h-4 w-4 mr-2' />
									Update Renewal Date
								</Button>
							)}
						</CardContent>
					</Card>

					{/* Upcoming Renewals */}
					<Card className='bg-slate-800/60 border-slate-700'>
						<CardHeader>
							<CardTitle className='text-lg'>
								Upcoming Renewals
							</CardTitle>
						</CardHeader>
						<CardContent>
							<div className='space-y-3'>
								{products
									.sort(
										(a, b) =>
											a.renewalDate.getTime() -
											b.renewalDate.getTime()
									)
									.slice(0, 5)
									.map((product) => (
										<div
											key={product.id}
											className='flex items-center justify-between p-2 bg-slate-700/30 rounded'
										>
											<div className='flex items-center gap-2'>
												<Image
													width={24}
													height={24}
													src={product.icon}
													alt={product.name}
													className='w-6 h-6 rounded'
												/>
												<div>
													<p className='text-sm font-medium'>
														{product.name}
													</p>
													<p className='text-xs text-muted-foreground'>
														{formatDate(
															product.renewalDate
														)}
													</p>
												</div>
											</div>
											<Badge variant='outline'>
												${product.amount}
											</Badge>
										</div>
									))}
							</div>
						</CardContent>
					</Card>
				</div>
			</div>
		</div>
	);
};

export default Page;
