import React from "react";
import Image from "next/image";
import { useSession } from "next-auth/react";
import { HiPhotograph, HiOutlineVideoCamera } from "react-icons/hi";
import { FaRegSmile } from "react-icons/fa";

const CreatePost = () => {
  const { data: session } = useSession();
  return (
    <div className="bg-white rounded-md shadow-md text-gray-500 p-2">
      <div className="flex p-4 space-x-2 items-center">
        <Image
          className="rounded-full cursor-pointer"
          src={session?.user.image}
          alt="userLogo"
          height={40}
          width={40}
        />
        <form action="" className="flex flex-1">
          <input
            className="rounded-full h-12 flex-grow focus:outline-none font-medium bg-gray-100 px-4 "
            type="text"
            placeholder={`What's happening today, ${
              session?.user.name.split(" ")[0]
            }?`}
          />
          <button hidden></button>
        </form>
      </div>

      <div className="flex justify-evenly py-2">
        <div className="flex items-center p-1 space-x-1 flex-grow justify-center hover:bg-gray-100 rounded-md cursor-pointer">
          <HiOutlineVideoCamera size={20} className="text-red-500" />
          <p className="font-semibold text-gray-6">Live Video</p>
        </div>
        <div className="flex items-center p-1 space-x-1 flex-grow justify-center hover:bg-gray-100 rounded-md cursor-pointer">
          <HiPhotograph size={20} className="text-green-500" />
          <p className="font-semibold text-gray-6">Photo/Video</p>
        </div>
        <div className="flex items-center p-1 space-x-1 flex-grow justify-center hover:bg-gray-100 rounded-md cursor-pointer">
          <FaRegSmile size={20} className="text-yellow-500" />
          <p className="font-semibold text-gray-6">Feeling/Activity</p>
        </div>
      </div>
    </div>
  );
};

export default CreatePost;
