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
  const [fileList, setFileList] = useState<File[]>([]);
  const [innerWidth, setInnerWidth] = useState(0);
  useEffect(() => {
    checkTeam();
  }, [user]);

  useEffect(() => {
    const handleResize = () => setInnerWidth(window.innerWidth);
    handleResize(); // Set initial width
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

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
      <FileListContext.Provider value={{ fileList, setFileList }}>
        {innerWidth >= 600 ? (
          <div className="grid grid-cols-4 bg-hero-pattern bg-cover ">
            <div className="col-span-2 md:col-span-1">
              <Sidebar />
            </div>
            <div className="col-span-2 md:col-span-3 ">{children}</div>
          </div>
        ) : (
          <div className="bg-hero-pattern h-screen p-10">
            <div
              className="mt-16 rounded-2xl text-white border bg-hero-pattern border-blue-100 p-4 shadow-lg sm:p-6 lg:p-8"
              role="alert"
            >
              
              <p className="p-6 text-white text-center text-2xl">
               This page is available for desktop view only!!
              </p>

          
            </div>
          </div>
        )}
      </FileListContext.Provider>
    </div>
  );
};

export default DashboardLayout;
