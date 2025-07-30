import { SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar'
import React from 'react'
import { AppSideBar } from '../_components/AppSideBar'
import SearchInputBox from '../_components/SearchInputBox'
import Link from 'next/link'
import { BellIcon, LogOut } from 'lucide-react'
import {
	Menubar,
	MenubarContent,
	MenubarItem,
	MenubarMenu,
	MenubarSeparator,
	MenubarShortcut,
	MenubarTrigger,
} from '@/components/ui/menubar';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button'

 const layout = ({children}:{children:React.ReactNode}) => {
  return (
		<SidebarProvider className='dark text-white'>
			<AppSideBar />
			<main className='relative bg-sidebar w-full'>
				<div className='fixed top-0 left-[260px] right-0 z-50 flex justify-between items-center p-6 pb-0 bg-sidebar'>
                    <SidebarTrigger color='white' />
					<div className='flex items-center gap-x-10'>
						<SearchInputBox />
						<div className='flex items-center gap-x-10'>
							<Link href='/dashboard/notification'>
								<BellIcon
									size={24}
									className='text-white'
								/>
							</Link>
							<Menubar className='border-none bg-sidebar'>
								<MenubarMenu >
									<MenubarTrigger className='border-none' style={{
                                        border:'none',
                                        background:'none'
                                    }}>
										<Avatar>
											<AvatarImage src='https://github.com/shadcn.png' />
											<AvatarFallback>CN</AvatarFallback>
										</Avatar>
									</MenubarTrigger>
									<MenubarContent>
										<MenubarItem>
											New Tab{' '}
											<MenubarShortcut>
												⌘T
											</MenubarShortcut>
										</MenubarItem>
										<MenubarItem>My Account</MenubarItem>
										<MenubarSeparator />
										<MenubarItem>
                                            Settings
                                        </MenubarItem>
										<MenubarSeparator className='mb-15' />
										<MenubarItem>
                                            <Button className='bg-blue-500 w-full'>
                                                <LogOut color='white'/> Logout
                                            </Button>
                                        </MenubarItem>
									</MenubarContent>
								</MenubarMenu>
							</Menubar>
						</div>
					</div>
				</div>
                <div className='mt-20'>
				{children}
                </div>
			</main>
		</SidebarProvider>
  );
}
export default layout