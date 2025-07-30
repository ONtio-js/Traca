'use client';
import { Calendar, Home, Inbox,ChartAreaIcon,BookAlertIcon , LogOut, Search, Settings } from 'lucide-react';

import {
	Sidebar,
	SidebarContent,
	SidebarFooter,
	SidebarGroup,
	SidebarGroupContent,
	SidebarGroupLabel,
	SidebarHeader,
	SidebarMenu,
	SidebarMenuButton,
	SidebarMenuItem,
} from '@/components/ui/sidebar';
import Logo from './Logo';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { usePathname } from 'next/navigation';
import { Button } from '@/components/ui/button';

// Menu items.
const items = [
	{
		title: 'Home',
		url: '/dashboard',
		icon: Home,
	},
	{
		title: 'Subscription',
		url: '/dashboard/subscription',
		icon: Inbox,
	},
	{
		title: 'Calendar',
		url: '/dashboard/calendar',
		icon: Calendar,
	},
	{
		title: 'Reports',
		url: '/dashboard/reports',
		icon: BookAlertIcon,
	},
    {
        title: 'Analytics',
        url: '/dashboard/analytics',
        icon: ChartAreaIcon
    },
	{
		title: 'Settings',
		url: '/dashboard/settings',
		icon: Settings,
	},
];

export function AppSideBar() {
	const pathname = usePathname();
	return (
		<Sidebar collapsible='icon' className='border-r-[1px] border-gray-700' >
			<SidebarHeader>
				<Logo /> 
			</SidebarHeader>
			<SidebarContent>
				<SidebarGroup>
					<SidebarGroupContent>
						<SidebarMenu className='space-y-3'>
							{items.map((item) => (
								<SidebarMenuItem
									key={item.title}
									className={cn(
										'  hover:bg-white/5 p-3 py-2.5 rounded-md',
										pathname === item.url &&
											'bg-white/5 text-blue-500'
									)}
								>
									<Link
										href={item.url}
										className={cn(
											' flex items-center gap-x-2'
										)}
									>
										<span
											className={cn(
												'text-gray-400 hover:text-blue-500',
												pathname === item.url
													? 'text-blue-500'
													: ''
											)}
										>
											<item.icon />
										</span>

										<span>{item.title}</span>
									</Link>
								</SidebarMenuItem>
							))}
						</SidebarMenu>
					</SidebarGroupContent>
				</SidebarGroup>
			</SidebarContent>
			<SidebarFooter className='p-6'>
				<Button className='text-white bg-blue-500 max-w-[150px]' size={'lg'}>
                    <LogOut /> Logout
                </Button>
			</SidebarFooter>
		</Sidebar>
	);
}
