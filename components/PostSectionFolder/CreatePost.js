import React, { useRef, useState } from "react";
import Image from "next/image";
import { useSession } from "next-auth/react";
import { HiPhotograph, HiOutlineVideoCamera } from "react-icons/hi";
import { FaRegSmile } from "react-icons/fa";
import { RiDeleteBinFill } from "react-icons/ri";
import { useDispatch } from "react-redux";
import { addPost } from "@/public/src/features/postSlice";

const CreatePost = () => {
  const FACEBOOK_CLONE_ENDPOINT = "";
  const { data: session } = useSession();
  const inputRef = useRef(null);
  const hiddenFileInput = useRef(null);
  const [imageToPost, setImageToPost] = useState(null);
  const dispatch = useDispatch();

  const handleClick = () => {
    hiddenFileInput.current.click();
  };

  const addImageToPost = (e) => {
    const reader = new FileReader();
    if (e.target.files[0]) {
      reader.readAsDataURL(e.target.files[0]);
      reader.onload = (e) => {
        setImageToPost(e.target.result);
      };
    }
  };

  const removeImage = (e) => {
    setImageToPost(null);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!inputRef.current.value) return;
    const formData = new FormData();

    formData.append("file", imageToPost);
    formData.append("post", inputRef.current.value);
    formData.append("name", session?.user.name);
    formData.append("email", session?.user.email);
    formData.append("profilePic", session?.user.profilePic);

    axios
      .post(FACEBOOK_CLONE_ENDPOINT, formData, {
        headers: { Accept: "application/json" },
      })
      .then((response) => {
        inputRef.current.value = "";
        dispatch(addPost(response.data));
        removeImage();
      })
      .catch((error) => {
        console.log(error);
      });
  };

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
            ref={inputRef}
            placeholder={`What's happening today, ${
              session?.user.name.split(" ")[0]
            }?`}
          />
          <button hidden onClick={handleSubmit}></button>
        </form>
      </div>

      {imageToPost && (
        <div
          onClick={removeImage}
          className="flex items-center px-4 py-2 space-x-4 filter hover:brightness-110 transition duration-150 cursor-pointer"
        >
          <img
            src={imageToPost}
            alt="image"
            className="h-10 object-contain"
            height={30}
            width={30}
          />
          <RiDeleteBinFill className="h-8 hover:text-red-500" />
        </div>
      )}
      <div className="flex justify-evenly py-2">
        <div className="flex items-center p-1 space-x-1 flex-grow justify-center hover:bg-gray-100 rounded-md cursor-pointer">
          <HiOutlineVideoCamera size={20} className="text-red-500" />
          <p className="font-semibold text-gray-6">Live Video</p>
        </div>
        <div
          onClick={handleClick}
          className="flex items-center p-1 space-x-1 flex-grow justify-center hover:bg-gray-100 rounded-md cursor-pointer"
        >
          <HiPhotograph size={20} className="text-green-500" />
          <p className="font-semibold text-gray-6">Photo/Video</p>
          <input
            onChange={addImageToPost}
            type="file"
            ref={hiddenFileInput}
            hidden
            accept="image/*"
          />
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
