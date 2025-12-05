"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const items = [
  { text: "Profile", href: "/" },
  { text: "Struktur Pengurus", href: "/struktur-pengurus" },
  { text: "Berita", href: "/berita" },
  { text: "Gallery", href: "/gallery" },
];

const Navbar = () => {
  const pathname = usePathname();

  return (
    <nav className="fixed left-12 top-4 z-50 right-12 rounded-3xl bg-white shadow-md shadow-gray-400 px-16 py-2 flex items-center justify-between">
      <div className="flex items-center gap-2">
        <div>
          <Image src="/pgri.png" alt="Logo" width={60} height={60} />
        </div>
        <div className="flex flex-col text-black leading-tight font-bold font-roboto gap-0 -mt-1">
          <div className="text-xl text-[#FB4D4D]">PGRI</div>
          <div className="text-sm -mt-2">JAWA BARAT</div>
        </div>
      </div>

      <ul className="flex lg:gap-16 gap-8 font-roboto font-bold ml-auto">
        {items.map((item) => {
          const isActive = pathname === item.href;
          return (
            <li key={item.href}>
              <Link
                href={item.href}
                className={`transition-all duration-200 hover:underline hover:text-[#FB4D4D] underline-offset-8 ${
                  isActive ? "text-[#FB4D4D] underline" : "text-black"
                }`}
              >
                {item.text}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Navbar;