import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input'
import { useKindeBrowserClient } from '@kinde-oss/kinde-auth-nextjs'
import { Send } from 'lucide-react';
import Image from 'next/image';
import React from 'react'

const Header = () => {

    const{user}:any = useKindeBrowserClient();
  return (

    <div className='flex gap-2 justify-end items-center '>
        <Input className='w-[30%]' placeholder='Search' /> 
        <Image className='rounded-full' src={user?.picture} width={35} height={35} alt='User' />
        <Button className='bg-blue-500 text-white flex items-center gap-2'>< Send size={18} /> Invite</Button>
    </div>
  )
}

export default Header