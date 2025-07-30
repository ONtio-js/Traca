'use client';

import { PieChart, Pie, Cell, ResponsiveContainer,    } from 'recharts';

import {
	ChartConfig,
	ChartContainer,
	ChartTooltipContent,
	ChartTooltip,
} from '@/components/ui/chart';

const chartData = [
	{ name: 'Entertainment', value: 56, color: 'red', amount: 100 },
	{ name: 'Utilities & Bills', value: 80, color: 'green', amount: 100 },
	{ name: 'Productivity', value: 80, color: 'blue', amount: 100 },
];

const chartConfig = {
	deposit: {
		label: 'Deposit',
		color: 'green',
	},
	withdraw: {
		label: 'Withdraw',
		color: '#FFA500',
	},
} satisfies ChartConfig;

function ChartComponent() {
	return (
		<div className='space-y-4 w-full'>
			<ChartContainer
				config={chartConfig}
				className='min-h-[200px] w-full'
			>
				<ResponsiveContainer
					width='100%'
					height={500}
				>
					<PieChart>
						<ChartTooltip content={<ChartTooltipContent />} />
						<Pie
							data={chartData}
							cx='50%'
							cy='50%'
							outerRadius={140}
							dataKey='value'
						>
							{chartData.map((entry, index) => (
								<Cell
									key={`cell-${index}`}
									fill={entry.color}
								/>
							))}
						</Pie>
					</PieChart>
				</ResponsiveContainer>
			</ChartContainer>
			<div className='flex justify-start w-full flex-col gap-y-2'>
				{chartData.map((item) => (
					<div key={item.name} className='flex  items-start gap-x-2'>
						<div className={`w-4 h-4  `} style={{ backgroundColor: item.color }} />
						<p className='text-sm font-semibold'>{item.name}</p>
                        <p className=' font-medium text-muted-foreground'>- ${item.amount}</p>
					</div>

				))}
			</div>
		</div>
	);
}

export default ChartComponent;
