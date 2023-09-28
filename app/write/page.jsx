"use client";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import React, { useState } from "react";


const Write = () => {
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const [detail, setDetail] = useState("");
  const [file, setFile] = useState("");
  const [message, setMessage] = useState("");
  const session = useSession();

  const router = useRouter();

  const CLOUD_NAME= "dz5ldrnic";
  const UPLOAD_PRESET = "my_blog_project_ganaa";


  const uploadImage = async () => {
    if (!file) return;
  
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", UPLOAD_PRESET);
  
    try {
      const response = await fetch(
        `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`,
        {
          method: "POST",
          body: formData,
        }
      );
  
      const data = await response.json();
      const imageUrl = data['secure_url'];

      return imageUrl
    } catch (error) {
      console.error(error);
    }
  };
  
  const createBlog = async () => { 
    const imageUrl = await uploadImage();
  
    if (title.trim() && text.trim() && detail.trim() !== "") {
      const data = {
        title: title,
        text: text,
        detail: detail,
        image: imageUrl, // Correctly include the imageUrl in the data object
      };
  
      fetch("api/blog", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(data),
      })
        .then((response) => {
          if (response.ok) {
            setMessage(
              <div className="text-lg text-green-500">Blog created!</div>
            );
          } else {
            setMessage(<div className="text-lg text-red-500">Error!</div>);
          }
        })
        .catch((err) => console.log(err));
    }
  };
  
     if(session.status === "unauthenticated"){
      router?.push("/");
     }

          if(session.status === "authenticated"){
            return (
              <div className="flex flex-col justify-center p-10 md:mt-0 mt-10">
                <h1 className="my-5 text-xl font-bold">Write new Blog</h1>
                <input
                  className="border-[1px] border-gray-400 px-4 py-3 rounded-md"
                  onChange={(e) => setTitle(e.target.value)}
                  type="text"
                  placeholder="title"
                />
                <input
                  className="border-[1px] border-gray-400 px-4 py-3 rounded-md"
                  onChange={(e) => setText(e.target.value)}
                  type="text"
                  placeholder="text"
                />
                <input
                  className="border-[1px] border-gray-400 px-4 py-3 rounded-md"
                  onChange={(e) => setDetail(e.target.value)}
                  type="text"
                  placeholder="detail"
                />
                <input
                  className=""
                  onChange={(e) => setFile(e.target.files[0])}
                  type="file"
                  id="image"
                  placeholder="upload image"
                />
          
                <button
                  className="glow-on-hover"
                  onClick={createBlog}
                >
                  SAVE
                </button>
                {message}
          
              </div>
            );
          }
 
};

export default Write;
