"use client";
import React, { useContext, useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { GlobalContext } from "@/context/GlobalContext";
import { useSession } from "next-auth/react";
import { 
  AiOutlineDelete, 
  AiOutlineSelect, 
  AiOutlineEye, 
  AiOutlineCalendar,
  AiOutlineArrowLeft,
  AiOutlineArrowRight,
  AiOutlineSearch,
  AiOutlineFilter
} from "react-icons/ai";
import { BiTime, BiUser } from "react-icons/bi";

const Blog = () => {
  const [blog, setBlog] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [message, setMessage] = useState("");
  const [selectedItems, setSelectedItems] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const { toggleDelete, isDelete } = useContext(GlobalContext);
  const session = useSession();
  const [expandedBlogs, setExpandedBlogs] = useState([]);

  // READ MORE
  const toggleExpansion = (blogId) => {
    if (expandedBlogs.includes(blogId)) {
      setExpandedBlogs(expandedBlogs.filter((id) => id !== blogId));
    } else {
      setExpandedBlogs([...expandedBlogs, blogId]);
    }
  };

  // FETCH DATA
  const fetchItems = () => {
    setLoading(true);
    fetch(`/api/blog?page=${currentPage}`, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    })
      .then((response) => response.json())
      .then((data) => {
        setBlog(data.data);
        setTotalPages(data.pagination.totalPages);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
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

  // CHECKBOX
  const handleCheckboxChange = (event, itemId) => {
    if (event.target.checked) {
      setSelectedItems([...selectedItems, itemId]);
    } else {
      setSelectedItems(selectedItems.filter((id) => id !== itemId));
    }
  };

  // SELECT ALL
  const handleSelectAll = () => {
    if (selectedItems.length === blog.length) {
      setSelectedItems([]);
    } else {
      setSelectedItems(blog.map(item => item._id));
    }
  };

  // DELETE CHECKED ITEMS
  const deleteSelectedBlogs = () => {
    const data = { ids: selectedItems };
    setLoading(true);
    fetch("/api/blog", {
      method: "DELETE",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((response) => {
        if (response.ok) {
          setMessage(
            <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded-lg mb-6 flex items-center space-x-2">
              <span className="text-green-500">✓</span>
              <span>Successfully deleted {selectedItems.length} blog(s)!</span>
            </div>
          );
          setSelectedItems([]);
          fetchItems();
        } else {
          setMessage(
            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-lg mb-6 flex items-center space-x-2">
              <span className="text-red-500">✕</span>
              <span>Error deleting blogs!</span>
            </div>
          );
        }
        setLoading(false);
        setTimeout(() => setMessage(""), 3000);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  };

  // Filter blogs based on search
  const filteredBlogs = blog.filter(item =>
    item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.text.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 py-8 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-slate-800 via-blue-600 to-indigo-600 bg-clip-text text-transparent mb-4">
            Blog Posts
          </h1>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto">
            Discover insights, tutorials, and thoughts on web development, technology, and more.
          </p>
        </div>

        {/* Search and Filter Bar */}
        <div className="bg-white/70 backdrop-blur-sm rounded-2xl border border-white/50 p-6 mb-8 shadow-lg">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="relative flex-1 max-w-md">
              <AiOutlineSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400" size={20} />
              <input
                type="text"
                placeholder="Search blog posts..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-white/80 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
              />
            </div>
            
            {session.status === "authenticated" && (
              <div className="flex items-center space-x-3">
                {selectedItems.length > 0 && (
                  <span className="text-sm text-slate-600 bg-blue-100 px-3 py-1 rounded-full">
                    {selectedItems.length} selected
                  </span>
                )}
                
                {isDelete && (
                  <>
                    <button
                      onClick={handleSelectAll}
                      className="flex items-center space-x-2 px-4 py-2 bg-blue-500 text-white rounded-xl hover:bg-blue-600 transition-colors duration-200"
                    >
                      <AiOutlineSelect size={16} />
                      <span>{selectedItems.length === blog.length ? 'Deselect All' : 'Select All'}</span>
                    </button>
                    
                    <button
                      onClick={() => {
                        deleteSelectedBlogs();
                        toggleDelete();
                      }}
                      disabled={selectedItems.length === 0 || loading}
                      className="flex items-center space-x-2 px-4 py-2 bg-red-500 text-white rounded-xl hover:bg-red-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200"
                    >
                      <AiOutlineDelete size={16} />
                      <span>Delete Selected</span>
                    </button>
                  </>
                )}
                
                <button
                  onClick={toggleDelete}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-xl transition-colors duration-200 ${
                    isDelete 
                      ? 'bg-slate-500 text-white hover:bg-slate-600' 
                      : 'bg-indigo-500 text-white hover:bg-indigo-600'
                  }`}
                >
                  <AiOutlineSelect size={16} />
                  <span>{isDelete ? 'Cancel' : 'Select Mode'}</span>
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Message Display */}
        {message && (
          <div className="mb-8">
            {message}
          </div>
        )}

   

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {filteredBlogs.map((el, index) => (
            <article 
              key={el._id} 
              className="group bg-white/80 backdrop-blur-sm rounded-2xl border border-white/50 overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105"
            >
              {/* Checkbox for delete mode */}
              {isDelete && (
                <div className="p-4 bg-slate-50/80">
                  <label className="flex items-center space-x-2 cursor-pointer">
                    <input
                      type="checkbox"
                      className="w-5 h-5 text-blue-600 border-2 border-slate-300 rounded focus:ring-blue-500 transition-all duration-200"
                      onChange={(event) => handleCheckboxChange(event, el._id)}
                      checked={selectedItems.includes(el._id)}
                    />
                    <span className="text-sm text-slate-600">Select this post</span>
                  </label>
                </div>
              )}

              {/* Blog Image */}
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={el.image}
                  alt={el.title}
                  layout="fill"
                  objectFit="cover"
                  className="transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              {/* Blog Content */}
              <div className="p-6">
                {/* Meta Information */}
                <div className="flex items-center justify-between text-sm text-slate-500 mb-3">
                  <div className="flex items-center space-x-2">
                    <AiOutlineCalendar size={14} />
                    <span>{el.createdDate}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <BiUser size={14} />
                    <span>Blog #{index + 1}</span>
                  </div>
                </div>

                {/* Title */}
                <h2 className="text-xl font-bold text-slate-800 mb-3 line-clamp-2 group-hover:text-blue-600 transition-colors duration-200">
                  {el.title}
                </h2>

                {/* Excerpt */}
                <p className="text-slate-600 text-sm mb-4 line-clamp-3">
                  {el.text}
                </p>

                {/* Read More Button */}
                <button
                  onClick={() => toggleExpansion(el._id)}
                  className="flex items-center space-x-2 text-blue-600 hover:text-blue-700 font-medium transition-colors duration-200"
                >
                  <span>{expandedBlogs.includes(el._id) ? 'Read Less' : 'Read More'}</span>
                  <AiOutlineEye size={16} />
                </button>

                {/* Expanded Content */}
                {expandedBlogs.includes(el._id) && (
                  <div className="mt-4 pt-4 border-t border-slate-200">
                    <p className="text-slate-700 text-sm leading-relaxed">
                      {el.detail}
                    </p>
                  </div>
                )}
              </div>
            </article>
          ))}
        </div>

        {/* Empty State */}
        {filteredBlogs.length === 0 && !loading && (
          <div className="text-center py-12">
            <div className="bg-white/70 backdrop-blur-sm rounded-2xl border border-white/50 p-12 max-w-md mx-auto">
              <div className="text-slate-400 mb-4">
                <AiOutlineSearch size={48} className="mx-auto" />
              </div>
              <h3 className="text-xl font-semibold text-slate-700 mb-2">No posts found</h3>
              <p className="text-slate-500">
                {searchTerm ? 'Try adjusting your search terms.' : 'No blog posts available yet.'}
              </p>
            </div>
          </div>
        )}

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex justify-center items-center space-x-4">
            <button
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage <= 1}
              className="flex items-center space-x-2 px-6 py-3 bg-white/80 backdrop-blur-sm border border-white/50 rounded-xl text-slate-700 hover:bg-blue-50 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 shadow-lg"
            >
              <AiOutlineArrowLeft size={16} />
              <span>Previous</span>
            </button>

            <div className="flex items-center space-x-2">
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                <button
                  key={page}
                  onClick={() => handlePageChange(page)}
                  className={`w-10 h-10 rounded-xl font-medium transition-all duration-200 ${
                    currentPage === page
                      ? 'bg-blue-500 text-white shadow-lg'
                      : 'bg-white/80 backdrop-blur-sm border border-white/50 text-slate-700 hover:bg-blue-50'
                  }`}
                >
                  {page}
                </button>
              ))}
            </div>

            <button
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage >= totalPages}
              className="flex items-center space-x-2 px-6 py-3 bg-white/80 backdrop-blur-sm border border-white/50 rounded-xl text-slate-700 hover:bg-blue-50 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 shadow-lg"
            >
              <span>Next</span>
              <AiOutlineArrowRight size={16} />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Blog;