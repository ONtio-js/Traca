import { Input } from '@/components/ui/input'
import { SearchIcon } from 'lucide-react'
import React from 'react'

const SearchInputBox = () => {
  return (
    <div className='flex items-center gap-x-3 bg-slate-800/60 p-3 max-w-5xl rounded-md'>
        <SearchIcon className='w-6 h-6 text-white ' />
        <input placeholder='search here ...' className=' placeholder:text-white text-lg' />
    </div>
  )
}

export default SearchInputBox