"use client";
import React, { useContext, useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { GlobalContext } from "@/context/GlobalContext";
import { useSession } from "next-auth/react";

const Blog = () => {
  const [blog, setBlog] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [message, setMessage] = useState("");
  const [selectedItems, setSelectedItems] = useState([]);
  const router = useRouter();

  const { toggleDelete, isDelete } = useContext(GlobalContext);

   const session = useSession();

  const [expandedBlogs, setExpandedBlogs] = useState([]);

 //READ MORE

  const toggleExpansion = (blogId) => {
    if (expandedBlogs.includes(blogId)) {
      setExpandedBlogs(expandedBlogs.filter((id) => id !== blogId));
    } else {
      setExpandedBlogs([...expandedBlogs, blogId]);
    }
  };

 // FETCH DATA

  const fetchItems = () => {
    fetch(`/api/blog?page=${currentPage}`, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    })
      .then((response) => response.json())
      .then((data) => {
        setBlog(data.data);
        setTotalPages(data.pagination.totalPages);
      })
      .catch((err) => console.log(err));
  };

   // SEC BVR RENDER

  useEffect(() => {
    fetchItems();

    const intervalId = setInterval(fetchItems, 1000);

    return () => clearInterval(intervalId);
  }, [currentPage]);

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
    router.push(`/blog?page=${newPage}`);
  };

  //CHECKBOX 

  const handleCheckboxChange = (event, itemId) => {
    if (event.target.checked) {
      setSelectedItems([...selectedItems, itemId]);
    } else {
      setSelectedItems(selectedItems.filter((id) => id !== itemId));
    }
  };

  // DELETE CHECKED ITEMS

  const deleteSelectedBlogs = () => {
    const data = {
      ids: selectedItems,
    };
    fetch("/api/blog", {
      method: "DELETE",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((response) => {
        console.log("Delete response:", response); // Log the response
        if (response.ok) {
          setMessage(<div className="text-lg text-red-500">Deleted!</div>);
        } else {
          setMessage(
            <div className="text-lg text-red-500">Error deleting blogs!</div>
          );
        }
      })
      .catch((err) => console.error(err));
  };

  return (
    <div className="flex flex-col justify-center p-10">
      {message}
      {session.status === "authenticated" && (
        <div className="flex justify-center items-center gap-5 mb-10">
          <button
            onClick={() => {
              deleteSelectedBlogs();
              toggleDelete();
            }}
            className="bg-red-500 px-4 py-2  text-white rounded-md"
          >
            DELETE SELECTED ITEMS
          </button>

          <button
            onClick={toggleDelete}
            className="bg-red-500  px-4 py-1 text-white rounded-md"
          >
            SELECT
          </button>
        </div>
      )}

      <div className="flex flex-col items-center ">
        <div className="w-[800px] grid grid-cols-2 gap-10">
          {blog.map((el, index) => (
            <div className="shadow p-5" key={el._id}>
              {isDelete && (
                <input
                  type="checkbox"
                  className="form-checkbox h-5 w-5 text-green-600 border-2 border-gray-300 rounded-md checked:bg-green-600 checked:border-transparent focus:ring-2 focus:ring-green-600"
                  onChange={(event) => handleCheckboxChange(event, el._id)}
                  checked={selectedItems.includes(el._id)}
                />
              )}

              <div className="relative w-full h-[300px] overflow-hidden mb-5">
                <Image
                  src={`/${el.image}`}
                  alt="Blog Image"
                  layout="fill"
                  objectFit="cover"
                />
              </div>

              <div className="flex gap-3 items-center">
                <span className="text-green-500">{el.createdDate}</span>
                <span>Blog {index + 1}</span>
              </div>

              <h1 className="my-3">{el.title}</h1>

              <p>{el.text}</p>

              <button onClick={()=>toggleExpansion(el._id)} className="text-gray-800 my-5">Read More</button>

              {expandedBlogs.includes(el._id) && <p className="text-sm">{el.detail}</p>}

            </div>
          ))}
        </div>
      </div>

      {/* Pagination */}
      <div className="flex justify-center mt-5">
        {currentPage > 1 && (
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            className="bg-gray-200 hover:bg-gray-300 px-4 py-2 mr-2"
          >
            Previous
          </button>
        )}
        {currentPage < totalPages && (
          <button
            onClick={() => handlePageChange(currentPage + 1)}
            className="bg-gray-200 hover:bg-gray-300 px-4 py-2"
          >
            Next
          </button>
        )}
      </div>
    </div>
  );
};

export default Blog;
