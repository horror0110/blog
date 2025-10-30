"use client";
import { GlobalContext } from "@/context/GlobalContext";
import { useSession } from "next-auth/react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useContext, useEffect, useState } from "react";
import {
  AiOutlineArrowLeft,
  AiOutlineArrowRight,
  AiOutlineCalendar,
  AiOutlineDelete,
  AiOutlineEye,
  AiOutlineSearch,
  AiOutlineSelect,
  AiOutlineClockCircle,
} from "react-icons/ai";
import { BiUser, BiBookmark, BiShare } from "react-icons/bi";
import { BsThreeDotsVertical } from "react-icons/bs";

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

  const toggleExpansion = (blogId) => {
    if (expandedBlogs.includes(blogId)) {
      setExpandedBlogs(expandedBlogs.filter((id) => id !== blogId));
    } else {
      setExpandedBlogs([...expandedBlogs, blogId]);
    }
  };

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

  useEffect(() => {
    fetchItems();
    const intervalId = setInterval(fetchItems, 1000);
    return () => clearInterval(intervalId);
  }, [currentPage]);

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
    router.push(`/blog?page=${newPage}`);
  };

  const handleCheckboxChange = (event, itemId) => {
    if (event.target.checked) {
      setSelectedItems([...selectedItems, itemId]);
    } else {
      setSelectedItems(selectedItems.filter((id) => id !== itemId));
    }
  };

  const handleSelectAll = () => {
    if (selectedItems.length === blog.length) {
      setSelectedItems([]);
    } else {
      setSelectedItems(blog.map((item) => item._id));
    }
  };

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
            <div className="fixed top-4 right-4 z-50 animate-slide-in">
              <div className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-6 py-4 rounded-2xl shadow-2xl flex items-center space-x-3">
                <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                  <span className="text-xl">✓</span>
                </div>
                <div>
                  <p className="font-semibold">Success!</p>
                  <p className="text-sm opacity-90">
                    Deleted {selectedItems.length} post(s)
                  </p>
                </div>
              </div>
            </div>
          );
          setSelectedItems([]);
          fetchItems();
        } else {
          setMessage(
            <div className="fixed top-4 right-4 z-50 animate-slide-in">
              <div className="bg-gradient-to-r from-red-500 to-rose-500 text-white px-6 py-4 rounded-2xl shadow-2xl flex items-center space-x-3">
                <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                  <span className="text-xl">✕</span>
                </div>
                <div>
                  <p className="font-semibold">Error!</p>
                  <p className="text-sm opacity-90">Failed to delete posts</p>
                </div>
              </div>
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

  const filteredBlogs = blog.filter(
    (item) =>
      item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.text.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-12 px-4 md:px-8 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className="px-4 py-2 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 border border-purple-500/30 rounded-full text-purple-300 text-sm font-medium">
              📚 Knowledge Hub
            </span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="bg-gradient-to-r from-white via-purple-200 to-cyan-200 bg-clip-text text-transparent">
              Explore Blog Posts
            </span>
          </h1>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto leading-relaxed">
            Dive into a collection of insights, tutorials, and thoughts on web
            development, technology, and innovation.
          </p>
        </div>

        {/* Search and Control Bar */}
        <div className="bg-slate-800/50 backdrop-blur-xl rounded-3xl border border-slate-700/50 p-6 mb-12 shadow-2xl">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            {/* Search Box */}
            <div className="relative flex-1 w-full max-w-2xl group">
              <AiOutlineSearch
                className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400 group-focus-within:text-cyan-400 transition-colors duration-200"
                size={22}
              />
              <input
                type="text"
                placeholder="Search articles by title or content..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-6 py-4 bg-slate-900/50 border border-slate-700 rounded-2xl text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500 transition-all duration-300"
              />
            </div>

            {/* Action Buttons */}
            {session.status === "authenticated" && (
              <div className="flex items-center space-x-3 w-full lg:w-auto">
                {selectedItems.length > 0 && (
                  <span className="text-sm text-cyan-400 bg-cyan-500/20 px-4 py-2 rounded-xl border border-cyan-500/30 font-medium">
                    {selectedItems.length} selected
                  </span>
                )}

                {isDelete && (
                  <>
                    <button
                      onClick={handleSelectAll}
                      className="flex items-center space-x-2 px-5 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-xl hover:from-blue-700 hover:to-cyan-700 transition-all duration-200 shadow-lg hover:shadow-cyan-500/25"
                    >
                      <AiOutlineSelect size={18} />
                      <span className="font-medium">
                        {selectedItems.length === blog.length
                          ? "Deselect"
                          : "Select All"}
                      </span>
                    </button>

                    <button
                      onClick={() => {
                        deleteSelectedBlogs();
                        toggleDelete();
                      }}
                      disabled={selectedItems.length === 0 || loading}
                      className="flex items-center space-x-2 px-5 py-3 bg-gradient-to-r from-red-600 to-rose-600 text-white rounded-xl hover:from-red-700 hover:to-rose-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 shadow-lg hover:shadow-red-500/25"
                    >
                      <AiOutlineDelete size={18} />
                      <span className="font-medium">Delete</span>
                    </button>
                  </>
                )}

                <button
                  onClick={toggleDelete}
                  className={`flex items-center space-x-2 px-5 py-3 rounded-xl font-medium transition-all duration-200 shadow-lg ${
                    isDelete
                      ? "bg-slate-700 text-white hover:bg-slate-600"
                      : "bg-gradient-to-r from-purple-600 to-indigo-600 text-white hover:from-purple-700 hover:to-indigo-700 hover:shadow-purple-500/25"
                  }`}
                >
                  <AiOutlineSelect size={18} />
                  <span>{isDelete ? "Cancel" : "Manage"}</span>
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Message Display */}
        {message}

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {filteredBlogs.map((el, index) => (
            <article
              key={el._id}
              className="group relative bg-slate-800/40 backdrop-blur-xl rounded-3xl border border-slate-700/50 overflow-hidden hover:border-cyan-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-cyan-500/10 hover:-translate-y-2"
            >
              {/* Checkbox */}
              {isDelete && (
                <div className="absolute top-4 left-4 z-20">
                  <label className="flex items-center space-x-2 cursor-pointer">
                    <input
                      type="checkbox"
                      className="w-6 h-6 text-cyan-600 bg-slate-900 border-2 border-slate-600 rounded-lg focus:ring-cyan-500 focus:ring-2 transition-all duration-200"
                      onChange={(event) => handleCheckboxChange(event, el._id)}
                      checked={selectedItems.includes(el._id)}
                    />
                  </label>
                </div>
              )}

              {/* Image with Overlay */}
              <div className="relative h-56 overflow-hidden">
                <Image
                  src={el.image}
                  alt={el.title}
                  layout="fill"
                  objectFit="cover"
                  className="transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent opacity-60"></div>

                {/* Floating Badge */}
                <div className="absolute top-4 right-4 bg-slate-900/80 backdrop-blur-sm px-3 py-1 rounded-full border border-slate-700">
                  <span className="text-cyan-400 text-xs font-semibold">
                    #{index + 1}
                  </span>
                </div>

                {/* Category Tag */}
                <div className="absolute bottom-4 left-4">
                  <span className="px-3 py-1 bg-purple-500/20 backdrop-blur-sm border border-purple-500/30 rounded-full text-purple-300 text-xs font-medium">
                    Article
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Meta Info */}
                <div className="flex items-center justify-between text-xs text-slate-400 mb-4">
                  <div className="flex items-center space-x-2">
                    <AiOutlineCalendar size={14} className="text-cyan-400" />
                    <span>{el.createdDate}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <AiOutlineClockCircle
                      size={14}
                      className="text-purple-400"
                    />
                    <span>5 min read</span>
                  </div>
                </div>

                {/* Title */}
                <h2 className="text-xl font-bold text-white mb-3 line-clamp-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-cyan-400 group-hover:bg-clip-text transition-all duration-300">
                  {el.title}
                </h2>

                {/* Excerpt */}
                <p className="text-slate-400 text-sm mb-5 line-clamp-3 leading-relaxed">
                  {el.text}
                </p>

                {/* Actions */}
                <div className="flex items-center justify-between pt-4 border-t border-slate-700/50">
                  <button
                    onClick={() => toggleExpansion(el._id)}
                    className="flex items-center space-x-2 text-cyan-400 hover:text-cyan-300 font-medium transition-colors duration-200 group/btn"
                  >
                    <span className="text-sm">
                      {expandedBlogs.includes(el._id)
                        ? "Show Less"
                        : "Read More"}
                    </span>
                    <AiOutlineEye
                      size={16}
                      className="group-hover/btn:translate-x-1 transition-transform duration-200"
                    />
                  </button>

                  <div className="flex items-center space-x-2">
                    <button className="p-2 bg-slate-700/50 hover:bg-slate-600/50 rounded-lg transition-colors duration-200">
                      <BiBookmark
                        size={16}
                        className="text-slate-400 hover:text-cyan-400"
                      />
                    </button>
                    <button className="p-2 bg-slate-700/50 hover:bg-slate-600/50 rounded-lg transition-colors duration-200">
                      <BiShare
                        size={16}
                        className="text-slate-400 hover:text-purple-400"
                      />
                    </button>
                  </div>
                </div>

                {/* Expanded Content */}
                {expandedBlogs.includes(el._id) && (
                  <div className="mt-5 pt-5 border-t border-slate-700/50 animate-fade-in">
                    <p className="text-slate-300 text-sm leading-relaxed">
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
          <div className="text-center py-20">
            <div className="bg-slate-800/40 backdrop-blur-xl rounded-3xl border border-slate-700/50 p-16 max-w-md mx-auto">
              <div className="w-20 h-20 bg-slate-700/50 rounded-full flex items-center justify-center mx-auto mb-6">
                <AiOutlineSearch size={40} className="text-slate-500" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">
                No Posts Found
              </h3>
              <p className="text-slate-400">
                {searchTerm
                  ? "Try different keywords or clear your search."
                  : "No blog posts available at the moment."}
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
              className="flex items-center space-x-2 px-6 py-3 bg-slate-800/50 backdrop-blur-xl border border-slate-700/50 rounded-2xl text-white hover:bg-slate-700/50 hover:border-cyan-500/50 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 shadow-lg"
            >
              <AiOutlineArrowLeft size={18} />
              <span className="font-medium">Previous</span>
            </button>

            <div className="flex items-center space-x-2">
              {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                (page) => (
                  <button
                    key={page}
                    onClick={() => handlePageChange(page)}
                    className={`w-12 h-12 rounded-2xl font-semibold transition-all duration-200 ${
                      currentPage === page
                        ? "bg-gradient-to-r from-purple-600 to-cyan-600 text-white shadow-lg shadow-cyan-500/25"
                        : "bg-slate-800/50 backdrop-blur-xl border border-slate-700/50 text-slate-400 hover:bg-slate-700/50 hover:text-white"
                    }`}
                  >
                    {page}
                  </button>
                )
              )}
            </div>

            <button
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage >= totalPages}
              className="flex items-center space-x-2 px-6 py-3 bg-slate-800/50 backdrop-blur-xl border border-slate-700/50 rounded-2xl text-white hover:bg-slate-700/50 hover:border-cyan-500/50 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 shadow-lg"
            >
              <span className="font-medium">Next</span>
              <AiOutlineArrowRight size={18} />
            </button>
          </div>
        )}
      </div>

      {/* Animations */}
      <style jsx global>{`
        @keyframes slide-in {
          from {
            transform: translateX(100%);
            opacity: 0;
          }
          to {
            transform: translateX(0);
            opacity: 1;
          }
        }

        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-slide-in {
          animation: slide-in 0.3s ease-out;
        }

        .animate-fade-in {
          animation: fade-in 0.3s ease-out;
        }

        .delay-500 {
          animation-delay: 500ms;
        }

        .delay-1000 {
          animation-delay: 1000ms;
        }
      `}</style>
    </div>
  );
};

export default Blog;
