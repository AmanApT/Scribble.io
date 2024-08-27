import { Button } from '@/components/ui/button'
import { Link, Save } from 'lucide-react'
import React from 'react'

const WorkspaceHeader = ({onSave}:any) => {
  return (
    <div className='flex justify-between  p-4'>
        <div className='flex gap-2 items-center'>
        <svg className="h-4" viewBox="0 0 1699 660">
            <path
              fill="#EC2C40"
              d="M804.7,660.3H50c-38.8,0-62.8-55-42.7-98.2L253,31.4C262,11.9,278.2,0,295.7,0h509V660.3z"
            ></path>
            <path
              fill="#00A9E5"
              d="M891.3,0L1646,0c38.8,0,62.8,55,42.7,98.2L1443,628.9c-9,19.5-25.2,31.4-42.7,31.4h-509V0z"
            ></path>
          </svg>
          <span className=" text-white">File Name</span>
        </div>
        <div className='flex gap-2'>

        <Button onClick={()=>onSave()} className='gap-2 bg-blue-500 hover:bg-blue-400'>Save <Save size={17}/> </Button>
        <Button className='gap-2 bg-red-600 hover:bg-blue-400'>Share <Link size={17}/> </Button>
        </div>
    </div>
  )
}

export default WorkspaceHeader