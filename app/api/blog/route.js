// Import necessary modules and models
import Blog from "@/models/Blog";
import connectDB from "@/utils/db";
import { NextResponse } from "next/server";

export const POST = async (request) => {
  await connectDB();

  const { title, image, text, detail } = await request.json();

  const newBlog = new Blog({
    title,
    image,
    text,
    detail,
  });

  const blog = await Blog.create(newBlog);

  return new NextResponse(JSON.stringify(blog), {
    status: 200,
    headers: { "content-type": "application/json" },
  });
};

export const GET = async (request) => {
  const url = new URL(request.url);
  const page = parseInt(url.searchParams.get("page")) || 1;
  const perPage = 4;

  await connectDB();

  const skip = (page - 1) * perPage;

  const blogs = await Blog.find()
    .skip(skip)
    .limit(perPage);

  const totalBlogs = await Blog.countDocuments();

  const totalPages = Math.ceil(totalBlogs / perPage);

  const response = {
    data: blogs,
    pagination: {
      currentPage: page,
      totalPages: totalPages,
      perPage: perPage,
      totalItems: totalBlogs,
    },
  };

  return new NextResponse(JSON.stringify(response), {
    status: 200,
    headers: { "content-type": "application/json" },
  });
};


export const DELETE = async (request) => {
    await connectDB();
  
    const { ids } = await request.json();
  
    try {
    
      const result = await Blog.deleteMany({ _id: { $in: ids } });
  
      console.log('Deleted blogs:', result);
  
      if (result.deletedCount > 0) {
        return new NextResponse(
          JSON.stringify({ message: `Deleted ${result.deletedCount} blogs` }),
          {
            status: 200,
            headers: { "content-type": "application/json" },
          }
        );
      } else {

        return new NextResponse(
          JSON.stringify({ message: "No blogs were deleted" }),
          {
            status: 404,
            headers: { "content-type": "application/json" },
          }
        );
      }
    } catch (error) {
      console.error("Error deleting blogs:", error);
  
      return new NextResponse(
        JSON.stringify({ error: "Error deleting blogs" }),
        {
          status: 500,
          headers: { "content-type": "application/json" },
        }
      );
    }
  };
  
  
