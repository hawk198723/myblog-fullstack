import Image from "next/image";
import React from "react";
import { FaRegComment, FaRegHeart, FaShareAlt } from "react-icons/fa";

const isValidUrl = (url) => {
  try {
    new URL(url);
    return true;
  } catch {
    return false;
  }
};

const Post = ({ post }) => {
  // const profilePic =
  //   "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/2021_Facebook_icon.svg/800px-2021_Facebook_icon.svg.png";
  const profilePic = isValidUrl(post.profilePic)
    ? post.profilePic
    : "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/2021_Facebook_icon.svg/800px-2021_Facebook_icon.svg.png";
  const postImage = isValidUrl(post.image) ? post.image : "";

  return (
    <div className="flex flex-col" key={post.id}>
      <div className="bg-white mt-6 rounded-md p-4">
        <div className="flex item-center">
          <Image
            src={profilePic}
            alt="userlogo"
            className="rounded-full w-10 h-10"
            width={10}
            height={10}
          />
          <div>
            <p className="font-medium">{post.name}</p>
            <p className="text-xs text-gray-500">{post.timeStamp}</p>
          </div>
        </div>
        <p className="py-4">{post.post}</p>
      </div>
      {/* Any Images? */}
      {postImage && (
        <div className="relative h-60 md:h-96 bg-white">
          <Image
            src={postImage}
            layout="fill"
            alt="postImage"
            objectFit="cover"
          />
        </div>
      )}

      {/* Post Footer? Comment? Like? Retweet?  */}
      <div className="flex items-center justify-center bg-white p-2">
        <div className="flex items-center space-x-1 hover:bg-gray-100 flex-grow justify-center p-2 rounded-xl cursor-pointer">
          <FaRegComment className="h-4 " />
          <p className="text-xs sm:text-base">Comment</p>
        </div>

        <div className="flex items-center space-x-1 hover:bg-gray-100 flex-grow justify-center p-2 rounded-xl cursor-pointer">
          <FaRegHeart className="h-4 " />
          <p className="text-xs sm:text-base">Like</p>
        </div>

        <div className="flex items-center space-x-1 hover:bg-gray-100 flex-grow justify-center p-2 rounded-xl cursor-pointer">
          <FaShareAlt className="h-4 " />
          <p className="text-xs sm:text-base">Share</p>
        </div>
      </div>
    </div>
  );
};

export default Post;
