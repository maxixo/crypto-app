import React, { useState } from "react";
import { Sidebar, SidebarBody, SidebarLink } from "../components/ui/Sidebar";
import {
  IconArrowLeft,
  IconBrandTabler,
  IconSettings,
  IconUserBolt,
} from "@tabler/icons-react";
import { Link } from "react-router-dom";
import { cn } from "../utils/utils";
import PortfolioPage from "../components/PortfolioPage";
import myLogo from "../assets/Logo.png"
import DashboardPage from "./DashboardPage";

export function Portfolio() {
  const links = [
    {
      label: "Dashboard",
      href: "/dashboard",
      icon: (
        <IconBrandTabler className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
      ),
    },
    {
      label: "Coins",
      href: "/coinpage",
      icon: (
        <IconUserBolt className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
      ),
    },
    {
      label: "Compare",
      href: "/compare",
      icon: (
        <IconSettings className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
      ),
    },
    {
      label: "Logout",
      href: "/",
      icon: (
        <IconArrowLeft className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
      ),
    },
  ];
  const [open, setOpen] = useState(false);
  return (
    (<div
      className={cn(
        "rounded-md flex flex-col md:flex-row bg-my-green dark:bg-neutral-800 w-full flex-1 max-w-10xl mx-auto border border-neutral-200 dark:border-neutral-700 overflow-hidden",
        // for your use case, use h-screen instead of h-[60vh]
        "h-screen"
      )}>
      <Sidebar open={open} setOpen={setOpen}>
        <SidebarBody className="justify-between gap-10">
          <div className="flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
            {open ? <Logo /> : <LogoIcon />}
            <div className="mt-8 flex flex-col gap-2">
              {links.map((link, idx) => (
                <SidebarLink key={idx} link={link} />
              ))}
            </div>
          </div>
          <div>
            <SidebarLink
              link={{
                label: "Manu Arora",
                href: "#",
                icon: (
                 <img
                    src="https://assets.aceternity.com/manu.png"
                    className="h-7 w-7 flex-shrink-0 rounded-full"
                    width={50}
                    height={50}
                    alt="Avatar" 
                  />)
              }} />
          </div>
        </SidebarBody>
      </Sidebar>
      <Dashboard />
    </div>)
  );
}
export const Logo = () => {
  return (
   <>
   </>
  );
};
export const LogoIcon = () => {
  return (
    (<Link
      to="#"
      className="font-normal flex space-x-2 items-center text-sm text-black py-1 relative z-20">
        <img src={myLogo} alt="" width={150} height={50} />
    </Link>)
  );
};

// Dummy dashboard component with content
const Dashboard = () => {
  return (
    <div className="border-2 border-black w-full " >
        <PortfolioPage/>
        <DashboardPage/>
    </div>
  );
};

export default Portfolio;