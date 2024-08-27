"use client";
import { api } from "@/convex/_generated/api";
import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";
import { useConvex } from "convex/react";
import { useRouter } from "next/navigation";
import React, { ReactNode, useEffect, useState } from "react";
import Sidebar from "./_components/Sidebar";
import { File, FileListContext } from "./_contexts/FileListContext";

const DashboardLayout = ({ children }: Readonly<{ children: ReactNode }>) => {
  const router = useRouter();
  const convex = useConvex();
  const { user }: any = useKindeBrowserClient();
  const[fileList,setFileList] = useState<File[]>([])
  useEffect(() => {
    checkTeam();
  }, [user]);

  const checkTeam = async () => {
    const result = await convex.query(api.teams.getTeams, {
      email: user?.email,
    });
    if (!result.length) {
      router.push("/teams/create");
    }
  };

  return (
<div>
  <FileListContext.Provider value={{fileList, setFileList}}>

  
  <div className="grid grid-cols-4 bg-hero-pattern bg-cover ">
    <div className="col-span-1">
      <Sidebar />
    </div>
    <div className="col-span-3 ">
      {children}
    </div>
  </div>
  </FileListContext.Provider>
</div>

  );
};

export default DashboardLayout;
