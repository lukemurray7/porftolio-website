"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { IconHome, IconBriefcase, IconUser, IconMail, IconFileText } from "@tabler/icons-react";

interface NavItemProps {
  href: string;
  icon: React.ElementType;
  isActive: boolean;
}

const NavItem: React.FC<NavItemProps> = ({ href, icon: Icon, isActive }) => (
  <Link href={href} className={`flex flex-col items-center ${isActive ? 'text-primary' : 'text-gray-500'}`}>
    <Icon size={24} />
    <span className="text-xs mt-1">{href.slice(1) || 'home'}</span>
  </Link>
);

export const MobileNavBar: React.FC = () => {
  const pathname = usePathname();

  return (
    <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 px-4 py-2">
      <div className="flex justify-around items-center">
        <NavItem href="/" icon={IconHome} isActive={pathname === '/'} />
        <NavItem href="/projects" icon={IconBriefcase} isActive={pathname === '/projects'} />
        <NavItem href="/about" icon={IconUser} isActive={pathname === '/about'} />
        <NavItem href="/contact" icon={IconMail} isActive={pathname === '/contact'} />
        <NavItem href="/resume" icon={IconFileText} isActive={pathname === '/resume'} />
      </div>
    </nav>
  );
};