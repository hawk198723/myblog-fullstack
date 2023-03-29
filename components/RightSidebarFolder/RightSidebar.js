import React from "react";
import { BiVideoPlus, BiSearchAlt } from "react-icons/bi";
import { FiMoreHorizontal } from "react-icons/fi";
import Contacts from "./Contacts";

const RightSidebar = () => {
  return (
    <div className="hidden md:inline-flex flex-col pt-4 max-w-xl md:min-w-[200px] lg:min-w-[250px]">
      <div className="flex items-center text-gray-500">
        <p className="flex text-lg font-semibold flex-grow">Contacts</p>
        <div className="flex space-x-1 px-2">
          <div className="rounded-full p-2 hover:bg-gray-200 cursor-pointer">
            <BiVideoPlus />
          </div>

          <div className="rounded-full p-2 hover:bg-gray-200 cursor-pointer">
            <BiSearchAlt />
          </div>

          <div className="rounded-full p-2 hover:bg-gray-200 cursor-pointer">
            <FiMoreHorizontal />
          </div>
        </div>
      </div>
      <Contacts
        src="https://render.fineartamerica.com/images/images-profile-flow/400/images/artworkimages/mediumlarge/2/tiger-woods-2019-masters-tournament-champion-april-22-2019-sports-illustrated-cover.jpg"
        name="Jason"
      />

      <Contacts
        src="https://render.fineartamerica.com/images/images-profile-flow/400/images/artworkimages/mediumlarge/2/a-star-is-born-michael-jordan-lights-up-the-nba-december-10-1984-sports-illustrated-cover.jpg"
        name="Bryan"
      />

      <Contacts
        src="https://render.fineartamerica.com/images/images-profile-flow/400/images-medium-large-5/4-johnny-cash-retro-images-archive.jpg"
        name="Peter"
      />

      <Contacts
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/2021_Facebook_icon.svg/800px-2021_Facebook_icon.svg.png"
        name="Nina"
      />
    </div>
  );
};

export default RightSidebar;
