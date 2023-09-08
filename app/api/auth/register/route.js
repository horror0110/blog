import User from "@/models/User";
import connectDB from "@/utils/db";
import bcrypt from "bcryptjs";
import { NextResponse } from "next/server";

export const POST = async (request) => {
  const { email, password } = await request.json();

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return new NextResponse("Invalid email", {
      status: 404,
    });
  }

  const lowercaseEmail = email.toLowerCase(); 

  await connectDB();

  const hashedPassword = await bcrypt.hash(password, 5);

  const existingUser = await User.findOne({ email: lowercaseEmail });

  if (existingUser) {
    return new NextResponse("Email already exists", {
      status: 400,
    });
  }

  const newUser = new User({
    email: lowercaseEmail, // Save lowercase email in the database
    password: hashedPassword,
  });

  try {
    await newUser.save();
    return new NextResponse("User has been created", {
      status: 201,
    });
  } catch (err) {
    return new NextResponse(err.message, {
      status: 500,
    });
  }
};