import Image from "next/image";
import React from "react";
import SidebarItem from "./SidebarItem";
import { HiUsers } from "react-icons/hi";
import {
  BiSearchAlt,
  BiHome,
  BiFlag,
  BiPlayCircle,
  BiStore,
  BiGridHorizontal,
  BiMessageAltDetail,
  BiBell,
  BiStopwatch,
} from "react-icons/bi";
import { IoGameControllerSharp } from "react-icons/io5";
import { MdExpandMore, MdGroups } from "react-icons/md";
import { useSession } from "next-auth/react";

function Sidebar() {
  const { data: session } = useSession();
  return (
    <div className="hidden lg:inline-flex flex-col py-2 pl-2 max-w-xl lg:min-w-[302px]">
      <div className="flex items-center space-x-2 py-3 pl-4 hover:bg-gray-200 rounded-l-xl cursor-pointer">
        <Image
          className="rounded-full cursor-pointer"
          src={session?.user.image}
          alt="Logo"
          height={40}
          width={40}
        />
        <p className="hidden sm:inline-flex font-medium">{session?.user.name}</p>
      </div>
      <SidebarItem Icon={HiUsers} value="Friends" />
      <SidebarItem Icon={MdGroups} value="Groups" />
      <SidebarItem Icon={BiStore} value="Marketplace" />
      <SidebarItem Icon={BiPlayCircle} value="Watch" />
      <SidebarItem Icon={BiStopwatch} value="Menories" />
      <SidebarItem Icon={MdExpandMore} value="See More" />
    </div>
  );
}

export default Sidebar;
