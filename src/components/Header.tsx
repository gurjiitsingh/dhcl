"use client";

import React from "react";
import Image from "next/image";
import { FaBars } from "react-icons/fa";
import { UseSiteContext } from "@/SiteContext/SiteContext";
import Link from "next/link";
import { menuItems } from '@/lib/menuItems'; // shared import


export default function Header() {
  const { bargerMenuToggle } = UseSiteContext();

  return (
    <header className="sticky top-0  bg-[#41382b] shadow-md z-50">
      <div className="max-w-[1280px] mx-auto flex items-center justify-between py-3 px-4 md:px-8">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/images/logo14.png"
            alt="Man Brar Construction Ltd."
            width={150}
            height={40}
            className="object-contain h-10   "
            priority
          />
        </Link>

        {/* Navigation */}
        <nav className="hidden lg:block">
          <ul className="flex items-center space-x-6">
            {menuItems.map(({ title, href }) => (
              <li key={title}>
                <a
                  href={href}
                  onClick={() => bargerMenuToggle(false)}
                  className="text-white hover:text-yellow-600 transition font-medium"
                >
                  {title}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Mobile Burger Menu */}
        <button
          onClick={() => bargerMenuToggle(true)}
          className="block lg:hidden text-slate-50"
          aria-label="Toggle navigation"
        >
          <FaBars size={28} />
        </button>
      </div>
    </header>
  );
}
