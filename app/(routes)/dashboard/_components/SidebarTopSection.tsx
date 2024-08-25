import React, { SetStateAction, useEffect, useState } from "react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { ChevronDown, LayoutGrid, LogOut, LucideProps, Settings, Users } from "lucide-react";
import { LogoutLink } from "@kinde-oss/kinde-auth-nextjs";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import { useConvex } from "convex/react";
import { api } from "@/convex/_generated/api";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";

export interface Teams {
  createdBy: string;
  teamName: string;
  _id: string;
}
interface SidebarInterface{
  user: any ,
  setActiveTeam: React.Dispatch<SetStateAction<Teams>>,
  activeTeam:Teams,

}
const SidebarTopSection = ({ user,activeTeam,setActiveTeam }: SidebarInterface) => {
  const [teamsList, setTeamsList] = useState<Teams[]>([]);
 
  const convex = useConvex();
  const router = useRouter();
  useEffect(() => {
    getTeamsList();
  }, [user]);

  const getTeamsList = async () => {
    const result = await convex.query(api.teams.getTeams, {
      email: user?.email,
    });
    setTeamsList(result);
    setActiveTeam(result[0]);
  };

  const handleMenuClick = (item: { id?: number; name?: string; path: string; icon?: React.ForwardRefExoticComponent<Omit<LucideProps, "ref"> & React.RefAttributes<SVGSVGElement>>; })=>{
    if(item?.path!=""){
        router.push(item?.path);
    }
  }
  const menu = [
    {
      id: 1,
      name: "Create Team",
      path: "/teams/create",
      icon: Users,
    },
    {
      id: 2,
      name: "Settings",
      path: "",
      icon: Settings,
    },
  ];
  return (
    <TooltipProvider>

  <div >

  
    <Popover >
      <PopoverTrigger className="w-[100%]">
        <div className="flex justify-between p-4 items-center hover:bg-slate-900 rounded-sm">
        <div className="flex items-center gap-2">
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
          <Tooltip>
            <TooltipTrigger className="w-[12rem] truncate text-left">
            <span >
            {activeTeam?.teamName}
          </span>
            </TooltipTrigger>
            <TooltipContent className="mt-2">
          <p>{activeTeam?.teamName}</p>
        </TooltipContent>
          </Tooltip>
        

         </div>
          <ChevronDown />
        </div>
      </PopoverTrigger>

      <PopoverContent className="p-4 ml-3 shadow-md">
        <div>
          {teamsList?.map((eachTeam, index) => (
            <h2
              onClick={() => setActiveTeam(eachTeam)}
              key={eachTeam?._id}
              className={`truncate mt-1 p-2 cursor-pointer rounded-lg ${activeTeam?.teamName == eachTeam?.teamName ? "bg-blue-500 text-white hover:opacity-90" : "hover:bg-slate-100"}`}
            >
              {eachTeam?.teamName}
            </h2>
          ))}
          <Separator className="mt-2" />
        </div>
        <div>
          {menu.map((item, index) => (
            <h2 key={item?.id} onClick={()=>handleMenuClick(item)} className="items-center flex gap-2 mt-2 text-sm hover:bg-slate-100 rounded-md p-1 cursor-pointer">
              <item.icon className="h-4 w-4" />
              {item.name}
            </h2>
          ))}
          <LogoutLink>
            <h2 className="items-center flex gap-2 mt-2 text-sm hover:bg-slate-100 rounded-md p-1 cursor-pointer">
              <LogOut className="h-4 w-4" />
              Logout
            </h2>
            <Separator className="mt-2" />
          </LogoutLink>
          <div className="flex items-center gap-2 p-1">
            <Image
              className="rounded-full"
              src={user?.picture}
              alt="photo"
              width={30}
              height={30}
            />
            <div>
              <h2 className="text-sm">{user?.given_name}</h2>
              <h2 className="text-sm text-gray-500">{user?.email}</h2>
            </div>
          </div>
        </div>
      </PopoverContent>
    </Popover>
    <Button variant='outline' className="w-full justify-start gap-2 bg-black text-white font-bold mt-8 p-4">
          <LayoutGrid className="h-5 w-5"/>
          All files
    </Button>
    </div>

    </TooltipProvider>
  );
};

export default SidebarTopSection;
