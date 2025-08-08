"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Search, Menu, X } from "lucide-react";

const socialLinks = [
  { name: "Twitter", icon: "𝕏", href: "#" },
  { name: "Facebook", icon: "f", href: "#" },
  { name: "Pinterest", icon: "P", href: "#" },
  { name: "Instagram", icon: "📷", href: "#" },
  { name: "Tumblr", icon: "t", href: "#" },
];

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "In Memory", href: "/memory" },
  { name: "How We Earn Money", href: "/earnings" },
  { name: "Items For Sale", href: "/sale" },
];

export default function Header() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <header className="bg-white border-b">
      {/* 顶部社交媒体栏 */}
      <div className="bg-gray-100 py-2">
        <div className="container mx-auto px-4 flex justify-between items-center text-sm">
          <div className="flex space-x-2">
            <Link href="/terms" className="text-gray-600 hover:text-blue-600">
              Terms
            </Link>
            <Link href="/privacy" className="text-gray-600 hover:text-blue-600">
              Privacy
            </Link>
            <Link href="/contact" className="text-gray-600 hover:text-blue-600">
              Contact
            </Link>
          </div>
          <div className="flex space-x-3">
            {socialLinks.map((social) => (
              <Link
                key={social.name}
                href={social.href}
                className="w-6 h-6 bg-gray-400 hover:bg-blue-600 text-white rounded text-center text-xs leading-6 transition-colors"
                title={social.name}
              >
                {social.icon}
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* 主导航栏 */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
              <span className="text-white text-2xl">🚔</span>
            </div>
            <div>
              <h1 className="text-2xl font-bold text-blue-600">Toy Detective Hub</h1>
              <p className="text-xs text-gray-500">Collectibles & Stories</p>
            </div>
          </Link>

          {/* 桌面导航 */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* 搜索和移动菜单 */}
          <div className="flex items-center space-x-4">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsSearchOpen(!isSearchOpen)}
            >
              <Search className="w-4 h-4" />
            </Button>

            {/* 移动菜单 */}
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="sm" className="lg:hidden">
                  <Menu className="w-4 h-4" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <nav className="flex flex-col space-y-4 mt-8">
                  {navLinks.map((link) => (
                    <Link
                      key={link.name}
                      href={link.href}
                      className="text-gray-700 hover:text-blue-600 font-medium py-2 px-4 rounded-lg hover:bg-gray-100 transition-colors"
                    >
                      {link.name}
                    </Link>
                  ))}
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>

        {/* 搜索栏 */}
        {isSearchOpen && (
          <div className="mt-4 transition-all duration-300">
            <div className="flex space-x-2">
              <Input
                type="text"
                placeholder="Search toys, articles..."
                className="flex-1"
              />
              <Button variant="default">Search</Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
