"use client";
import { api } from "@/convex/_generated/api";
import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";
import { useConvex } from "convex/react";
import { useRouter } from "next/navigation";
import React, { ReactNode, useEffect } from "react";
import Sidebar from "./_components/Sidebar";

const DashboardLayout = ({ children }: Readonly<{ children: ReactNode }>) => {
  const router = useRouter();
  const convex = useConvex();
  const { user }: any = useKindeBrowserClient();
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
      <div className="grid grid-cols-4">
        <div>
          <Sidebar />
        </div>
        <div className="grid-cols-3">{children}</div>
      </div>
    </div>
  );
};

export default DashboardLayout;
