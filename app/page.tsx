"use client"
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Header from "./_components/Header";
import Hero from "./_components/Hero";
import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";
import { useEffect } from "react";
import Features from "./_components/Features";
import Footer from "./_components/Footer";

export default function Home() {

  const {user} = useKindeBrowserClient();

  useEffect(()=>{
console.log("User Details : ", user)
  },[[user]])

  return (
 <div>
 <Header />
 <Hero />
 <Features />
 <Footer />
 </div>
  );
}
