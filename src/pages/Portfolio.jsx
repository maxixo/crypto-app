import React, { useState } from "react";
import {signOut} from "firebase/auth";
import {auth} from "../config/firebase-config"
import { Sidebar, SidebarBody, SidebarLink } from "../components/ui/Sidebar";
import {
  IconArrowLeft,
  IconBrandTabler,
  IconSettings,
  IconUserBolt,
} from "@tabler/icons-react";
import { Link, useNavigate } from "react-router-dom";
import { cn } from "../utils/utils";
import PortfolioPage from "../components/PortfolioPage";
import myLogo from "../assets/Logo.png"
import DashboardPage from "./DashboardPage";
import {useGetUserInfo} from "../hooks/useGetUserInfo"
export function Portfolio() {
  const navigate = useNavigate();

  const {name, profilePhoto} = useGetUserInfo()

  const signout = async () => {
    try{
       await signOut(auth);
      localStorage.clear();
      console.log('user has signed out');
      navigate('/sign-in');
    }  
    catch (err) {
      console.error(err);
    }
  
  }

  const links = [
    {
      label: "Dashboard",
      href: "#",
      icon: (
        <IconBrandTabler className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
      ),
    },
    {
      label: "Coins",
      href: "#",
      icon: (
        <IconUserBolt className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
      ),
    },
    {
      label: "Compare",
      href: "#",
      icon: (
        <IconSettings className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
      ),
    },
    {
      label: "Logout",
      href: "#",
      onClick: (e) => {
        e.preventDefault(); // Prevent default link behavior
        signout(); // Call the signout function
      },
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
                <SidebarLink key={idx} link={link}      onClick={link.onClick ? link.onClick : () => setOpen(false)} // Close sidebar or execute onClick
/>
              ))}
            </div>
          </div>
          <div>
            <SidebarLink
              link={{
                label: name,
                href: "#",
                icon: (
                 <img
                    src={profilePhoto}
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