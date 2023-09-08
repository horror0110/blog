import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import User from "@/models/User";
import connectDB from "@/utils/db";
import bcrypt from "bcryptjs";

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      id: "credentials",
      name: "Credentials",
      async authorize(credentials) {
        // Check if the user exists.
        await connectDB();

        try {
          const user = await User.findOne({
            email: credentials.email.toLowerCase(),
          });

          if (user) {
            const isPasswordCorrect = await bcrypt.compare(
              credentials.password,
              user.password
            );

            if (isPasswordCorrect) {
              return user;
            } else {
              throw new Error("Email or password is incorrect");
            }
          } else {
            throw new Error("User not found");
          }
        } catch (err) {
          throw new Error(err.message);
        }
      },
    }),
  ],
  pages: {
    error: "/admin",
  },
});

export { handler as GET, handler as POST };