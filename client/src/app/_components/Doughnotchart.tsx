'use client';

import {
	PieChart,
	Pie,
	Cell,
	ResponsiveContainer,
	Tooltip,
} from 'recharts';

const Doughnotchart = () => {
	const data = [
		{ name: 'Entertainment', value: 100, color: '#0088FE' },
		{ name: 'Utilities & Bills', value: 120, color: '#00C49F' },
		{ name: 'Food & Dining', value: 40, color: '#FF8042' },
		{ name: 'Health & Fitness', value: 50, color: 'green' },
		{ name: 'Productivity', value: 20, color: 'yellow' },
	];

	// Calculate total amount
	const total = data.reduce((sum, item) => sum + item.value, 0);

	return (
		<div className='w-full  bg-slate-800/60 p-10 rounded-xl border-slate-700 border '>
			<div className='relative w-full h-80'>
				<ResponsiveContainer
					width='100%'
					height='100%'
				>
					<PieChart>
						<Pie
							data={data}
							cx='50%'
							cy='50%'
							innerRadius={120}
							outerRadius={150}
							paddingAngle={4}
							dataKey='value'
						>
							{data.map((entry, index) => (
								<Cell
									key={`cell-${index}`}
									fill={entry.color}
								/>
							))}
						</Pie>
						<Tooltip />
					</PieChart>
				</ResponsiveContainer>

				{/* Centered overlay with title and total */}
				<div className='absolute inset-0 flex flex-col items-center justify-center pointer-events-none'>
					<div className='text-center'>
						<h3 className='text-lg font-medium text-gray-300 mb-1'>
							Total Spent
						</h3>
						<p className='text-3xl font-bold text-gray-100'>
							${total.toFixed(2)}
						</p>
						<p className='text-sm text-gray-300 mt-1'>This Month</p>
					</div>
				</div>
			</div>
			<div className='mt-10 space-y-2'>
				{data.map((item, index) => (
					<div
						key={index}
						className='flex items-center gap-10 '
					>
						<div className='flex items-center gap-2'>
							<div
								className='w-4 h-4 '
								style={{ backgroundColor: item.color }}
							/>
							<p className='text-sm text-gray-300 font-medium'>
								{item.name}
							</p>
						</div>
						<p className='text-sm text-gray-300'>
							-- {((item.value / total) * 100).toFixed(2)}%
						</p>
					</div>
				))}
			</div>
		</div>
	);
};

export default Doughnotchart;
