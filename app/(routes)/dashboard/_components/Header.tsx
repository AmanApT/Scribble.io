import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  LogoutLink,
  useKindeBrowserClient,
} from "@kinde-oss/kinde-auth-nextjs";
import { LogOut, Send } from "lucide-react";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const Header = () => {
  const { user }: any = useKindeBrowserClient();
  const [innerWidth, setInnerWidth] = useState(0);
  useEffect(() => {
    const handleResize = () => setInnerWidth(window.innerWidth);
    handleResize(); // Set initial width
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
 
  return (
    <div className="flex gap-2 justify-end items-center ">
      <Input className="hidden md:block w-[30%]" placeholder="Search" />
      <Image
        className="rounded-full"
        src={user?.picture}
        width={35}
        height={35}
        alt="User"
      />
      <LogoutLink>
        <Button className="bg-blue-500 text-white flex items-center gap-2">
          <LogOut size={18} /> 
          
          {innerWidth >= 768 && "Logout"}
        </Button>
      </LogoutLink>
    </div>
  );
};

export default Header;
