"use client";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import BrandLogo from "./brand-logo";
import { WEBSITE_TITLE } from "@/lib/constants";
import Navigation from "./navigation";
import AddToCart from "./add-to-cart";

export default function Header() {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  return (
    <header className="w-full bg-background/95 backdrop-blur-xl border-b shadow sticky top-0 z-40">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        <div className="flex items-center gap-3">
          <BrandLogo />
          <span className="text-2xl font-light tracking-wide text-[#823613]">
            {WEBSITE_TITLE}
          </span>
        </div>
        <Navigation />
        <AddToCart />
      </div>
    </header>
  );
}
