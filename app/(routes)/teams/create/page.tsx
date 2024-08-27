"use client";
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { toast, useToast } from '@/components/ui/use-toast';
import { api } from '@/convex/_generated/api';
import { useKindeBrowserClient } from '@kinde-oss/kinde-auth-nextjs';
import { useConvex } from 'convex/react';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react'

const Create = () => {
  const [teamName,setTeamName] = useState<string>("");
  const convex = useConvex();
  const { toast } = useToast()
  const router = useRouter()
  const {user}:any = useKindeBrowserClient();

  const createNewTeam = async()=>{

    const result = await convex.mutation(api.teams.createTeam,{teamName:teamName, createdBy: user?.email});
    console.log("Team Id :", result);
    toast({
      title: "Team created succesfully!",
    })
    router.push('/dashboard')
  }

  return (
    <div className='bg-hero-pattern bg-cover h-screen text-white'>

   
    <div className='flex gap-2 items-center p-16 '>
       <svg className="h-3 md:h-5 cursor-pointer" viewBox="0 0 1699 660">
            <path
              fill="#EC2C40"
              d="M804.7,660.3H50c-38.8,0-62.8-55-42.7-98.2L253,31.4C262,11.9,278.2,0,295.7,0h509V660.3z"
            ></path>
            <path
              fill="#00A9E5"
              d="M891.3,0L1646,0c38.8,0,62.8,55,42.7,98.2L1443,628.9c-9,19.5-25.2,31.4-42.7,31.4h-509V0z"
            ></path>
          </svg>
          <span className="text-lg md:text-2xl font-bold ">scribble.io</span>
    </div>

    <div className='flex flex-col items-center px-6'>
    <h2 className='font-bold text-[25px] md:text-[40px] py-3 text-center '>What should we call your team? </h2>
    <h2 className='text-gray-500'>You can always change this later </h2>
    <div className='w-[70%] md:w-[50%] lg:w-[25%] mt-7'>
      {/* <label className='text-gray-500'>Team name</label> */}
      <Input onChange={(e)=>setTeamName(e.target.value)} value={teamName} placeholder='Team name' className='mt-3 bg-black text-white'></Input>
    </div>
    <Button onClick={createNewTeam} disabled={!(teamName && teamName.length>0)} className='text-white bg-blue-500 mt-9 hover:bg-blue-400'>Create Team</Button>
    </div>
    </div>
  )
}

export default Create