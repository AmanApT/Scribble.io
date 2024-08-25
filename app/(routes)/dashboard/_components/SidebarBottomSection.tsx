import { Button } from "@/components/ui/button";
import { Archive, Copy, Flag, Github } from "lucide-react";
import React, { useState } from "react";
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog"

  import { Input } from "@/components/ui/input"

  interface SidebarBottomSectionProps {
    createNewFile: (fileName:string) => void;
    numberOfFiles:number
  }

const SidebarBottomSection = ({createNewFile,numberOfFiles}:SidebarBottomSectionProps) => {

    const [fileName,setFileName] = useState<string>("");

  const menuList = [
    {
      id: 1,
      name: "Getting Started",
      path: "",
      icon: Flag,
    },
    {
      id: 2,
      name: "Github",
      path: "",
      icon: Github,
    },
    {
      id: 3,
      name: "Archive",
      path: "",
      icon: Archive,
    },
  ];
  return (


    <div>
      <div>
        {menuList.map((eachItem, index) => {
          return (
            <h2 key={eachItem.id} className="flex gap-2 p-2 hover:bg-slate-800 cursor-pointer rounded-sm">
              <eachItem.icon />
              {eachItem.name}
            </h2>
          );
        })}
      </div>
      <Dialog>
      <DialogTrigger asChild>
      <Button className="w-full bg-blue-500 hover:bg-blue-400 justify-start mt-3">
        New File
      </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Create new file</DialogTitle>
          
        </DialogHeader>
        <div className="flex items-center space-x-2">
          <div className="grid flex-1 gap-2">
          
            <Input
              id="link"
              onChange={(e)=>setFileName(e.target.value)}
              value={fileName}
            className="mt-2"
            placeholder="Enter file name"
            />
          </div>
         
        </div>
        <DialogFooter className="">
          <DialogClose asChild>
            <Button onClick={()=>{createNewFile(fileName); setFileName("")}} type="button" disabled={fileName.length<3} className="bg-blue-500 mt-2 flex flex-end">
              Create 
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
     

      <div className="mt-4 h-4 w-full bg-slate-800 rounded-lg">
        <div  style={{ width: `${20 * numberOfFiles}%` }}className={`h-4  bg-blue-500 rounded-lg`}></div>
      </div>

      <h2 className="text-[12px] mt-3">
        <strong>{numberOfFiles}</strong> out of <strong>5</strong> files used
      </h2>
      <h2 className="text-[12px] mt-1">Upgrade your plan</h2>
    </div>
  );
};

export default SidebarBottomSection;
