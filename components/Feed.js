import React from "react";
import CreatePost from "./PostSectionFolder/CreatePost";
import Posts from "./PostSectionFolder/Posts";

const Feed = () => {
  return (
    <div className="flex-grow h-screen pt-6 mr-6 overflow-y-auto no-scrollbar">
      <div className="mx-auto max-w-md md:max-w-xl lg:max-w-2xl">
        {/* Post Box */}
        <CreatePost />
        {/* Posts */}
        <Posts />
      </div>
    </div>
  );
};

export default Feed;
