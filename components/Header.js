import { signOut, useSession } from "next-auth/react";
import Image from "next/image";
import React from "react";
import {
  BiSearchAlt,
  BiHome,
  BiFlag,
  BiPlayCircle,
  BiStore,
  BiGridHorizontal,
  BiMessageAltDetail,
  BiBell,
} from "react-icons/bi";
import { IoGameControllerSharp } from "react-icons/io5";
import { MdExpandMore } from "react-icons/md";

function Header() {
  const { data: session } = useSession();
  return (
    <div className="bg=white flex items-center p-2 shadow-md top-0 sticky z-50 h-16">
      {/* Header Left Portion */}
      <div className="flex min-w-fit">
        <Image
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/2021_Facebook_icon.svg/800px-2021_Facebook_icon.svg.png"
          alt="Logo"
          height={40}
          width={40}
        />
      </div>
      <div className="flex items-center space-x-2 px-2 ml-2 rounded-full bg-gray-100 text-gray-500">
        <BiSearchAlt size={35} />
        <input
          className="hidden lg:inline-flex bg-transparent focus:outline-none"
          type="text"
          placeholder="Search Facebook"
        />
      </div>
      {/* Header Center Portion */}
      <div className="flex flex-grow justify-center mx-2">
        <div className="flex items-center">
          <div className="flex items-center h-14 px-4 md:px-10 rounded-md md:hover:bg-gray-100 cursor-pointer">
            <BiHome className="mx-auto" size={25} />
          </div>

          <div className="flex items-center h-14 px-4 md:px-10 rounded-md md:hover:bg-gray-100 cursor-pointer">
            <BiFlag className="mx-auto" size={25} />
          </div>

          <div className="flex items-center h-14 px-4 md:px-10 rounded-md md:hover:bg-gray-100 cursor-pointer">
            <BiPlayCircle className="mx-auto" size={25} />
          </div>

          <div className="flex items-center h-14 px-4 md:px-10 rounded-md md:hover:bg-gray-100 cursor-pointer">
            <BiStore className="mx-auto" size={25} />
          </div>

          <div className="flex items-center h-14 px-4 md:px-10 rounded-md md:hover:bg-gray-100 cursor-pointer">
            <IoGameControllerSharp className="mx-auto" size={25} />
          </div>
        </div>
      </div>
      {/* Header Right Portion */}
      <div className="flex items-center justify-end min-w-fit space-x-2">
        <Image
          onClick={signOut}
          className="rounded-full cursor-pointer"
          src={session?.user.image}
          alt="userLogo"
          height={40}
          width={40}
        />
        <p
          className="hidden cursor-pointer xl:inline-flex
         font-semibold text-sm whitespace-nowrap p-3 max-w-xs"
        >
          {session?.user.name.split(" ")[0]}
        </p>

        <BiGridHorizontal
          size={20}
          className="hidden lg:inline-flex h-9 w-9 bg-gray-200 text-gray-600 rounded-full p-2 cursor-pointer hover:bg-gray-300"
        />

        <BiMessageAltDetail
          size={20}
          className="hidden lg:inline-flex h-9 w-9 bg-gray-200 text-gray-600 rounded-full p-2 cursor-pointer hover:bg-gray-300"
        />

        <BiBell
          size={20}
          className="hidden lg:inline-flex h-9 w-9 bg-gray-200 text-gray-600 rounded-full p-2 cursor-pointer hover:bg-gray-300"
        />

        <MdExpandMore
          size={20}
          className="hidden lg:inline-flex h-9 w-9 bg-gray-200 text-gray-600 rounded-full p-2 cursor-pointer hover:bg-gray-300"
        />
      </div>
    </div>
  );
}

export default Header;
