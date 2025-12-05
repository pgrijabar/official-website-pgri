"use client";
import React, { useState } from "react";
import Image from "next/image";

const Sidebar = () => {
  const [open, setOpen] = useState(false);
  const item = [
    { text: "Profile", href: "/" },
    { text: "Struktur", href: "#" },
    { text: "Berita", href: "/berita" },
    { text: "Gallery", href: "#" },
  ];

  return (
    <>
      {!open ? 
      <div className="fixed rounded-3xl top-4 right-4 left-4 z-50 flex items-center gap-3 bg-white/90 backdrop-blur-sm px-4 py-2 shadow-2xl border border-gray-100 w-auto">
        <button
          className="p-3 transition-transform duration-200"
          onClick={() => setOpen(true)}
          aria-label="Open sidebar"
        >
          <svg width="24" height="24" fill="none" stroke="currentColor">
            <path d="M4 6h16M4 12h16M4 18h16" color="black" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </button>
        <Image src="/pgri.png" alt="Logo" width={36} height={36} className="rounded-full" />
        <div className="flex flex-col text-black leading-tight font-bold font-roboto">
          <span className="text-base text-[#FB4D4D]">PGRI</span>
          <span className="text-xs -mt-1">JAWA BARAT</span>
        </div>
      </div>
      : <div></div>
    }
      <div
        className={`fixed inset-0 z-40 transition-colors duration-300 ${
          open ? "bg-black bg-opacity-40 pointer-events-auto" : "bg-transparent pointer-events-none"
        }`}
        style={{ transitionProperty: "background-color, opacity" }}
        onClick={() => setOpen(false)}
      >
        <div
          className={`fixed left-0 top-0 h-full w-64 bg-white shadow z-50 p-6 transform transition-transform duration-300 ${
            open ? "translate-x-0" : "-translate-x-full"
          }`}
          onClick={e => e.stopPropagation()}
        >
          <div className="flex items-center justify-start h-12 mb-2">
            <button
              className="transition-transform duration-200 hover:scale-110 mt-[-8px]"
              onClick={() => setOpen(false)}
              aria-label="Close sidebar"
              style={{ height: "48px" }}
            >
              <svg width="24" height="24" fill="none" stroke="currentColor">
                <path d="M6 18L18 6M6 6l12 12" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </button>
          </div>
          <div className="flex flex-col items-center mb-6 mt-4">
            <Image src="/pgri.png" alt="Logo" width={60} height={60} className="rounded-full mb-2" />
            <div className="flex flex-col text-black leading-tight font-bold font-roboto items-center">
              <span className="text-lg text-[#FB4D4D]">PGRI</span>
              <span className="text-xs -mt-1">JAWA BARAT</span>
            </div>
          </div>
          <ul className="flex flex-col gap-2 mt-2">
            {item.map((item, index) => (
            <li key={index}>
              <a
                href={item.href}
                className="block text-black px-2 py-2 rounded hover:bg-gray-100 hover:text-[#FB4D4D] hover:underline transition-all duration-200"
              >
                {item.text}
              </a>
            </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
