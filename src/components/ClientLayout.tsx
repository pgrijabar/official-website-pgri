"use client";
import Navbar from "../components/Navbar";
import Sidebar from "@/components/Sidebar";

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className="block md:hidden">
        <Sidebar />
      </div>
      <div className="hidden md:block">
        <Navbar />
      </div>
      {children}
    </>
  );
}
