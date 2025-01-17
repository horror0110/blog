"use client";
import React from "react";

import { Lato } from "next/font/google";
import Link from "next/link";
import { AiOutlineMail, AiFillPhone, AiFillGithub } from "react-icons/ai";
import { FaLocationArrow } from "react-icons/fa";

const lato = Lato({ subsets: ["latin"], weight: "400" });

const Resume = () => {
  return (
    <div className={lato.className}>
      <div className="flex flex-col items-center mx-5">
        <div className="md:w-[800px] md:h-[850px] text-gray-800 mb-5  border-[5px] border-black  md:mt-10 mt-20  flex flex-col">
          <div className="bg-gray-600 text-white p-4 text-center">
            <h1 className="text-4xl mb-4">GAN-ERDENE GANBAT</h1>
            <h2 className="text-xl">JUNIOR WEB DEVELOPER</h2>
          </div>

          <div className="flex flex-col   md:flex-row md:gap-16 gap-4 p-4">
            <div className="md:w-[30%]  flex flex-col">
              <div className="flex flex-col text-end items-end">
                <h1 className="font-bold text-2xl mb-2">CONTACT</h1>
                <div className="flex items-center gap-1">
                  ganaa.12396@yahoo.com <AiOutlineMail color="gray" />
                </div>
                <div className="flex items-center gap-1">
                  80857067 <AiFillPhone color="gray" />
                </div>
                <div className="flex items-center gap-1">
                  Ulaanbaatar , Mongolia <FaLocationArrow color="gray" />
                </div>
                <Link
                  className="flex items-center gap-1 underline text-blue-600"
                  target="_blank"
                  href="https://github.com/horror0110"
                >
                  GitHub <AiFillGithub color="gray" />
                </Link>
              </div>

              <div className="flex flex-col text-end items-end my-6">
                <h1 className="font-bold text-2xl mb-2">EDUCATION</h1>
                <div>Mongeni Complex School</div>
                <div>
                  University of the Humanities <strong>Graduated</strong>
                </div>
              </div>

              <div className="flex flex-col text-end items-end">
                <h1 className="font-bold text-2xl mb-2">SKILLS</h1>
                <div className="font-bold">• HTML5/CSS3</div>
                <div className="font-bold">• TailwindCSS(UI libraries)</div>
                <div className="font-bold">• Javascript</div>
                <div className="font-bold">• Typescript</div>
                <div className="font-bold">• ReactJS</div>
                <div className="font-bold">• NextJS</div>
                <div className="font-bold">• ExpressJS</div>
                <div className="font-bold">• MongoDB</div>
                <div className="font-bold">• Mongoose</div>
                <div className="font-bold">• Prisma</div>
                <div className="font-bold">• Role Based Managment (Clerk , NextAuth)</div>
                <div className="font-bold">• Stripe Payment</div>
                <div className="font-bold">• Graphql (learning)</div>
              </div>
            </div>

            <div className="flex flex-col gap-12">
              <div>
                <h1 className="font-bold mb-2 text-2xl">WORK EXPERIENCE</h1>
                <p>
                When I was a student, I did internships in many companies.
                </p>
              </div>

              <div>
                <h1 className="font-bold mb-2 text-2xl">PROJECTS</h1>
                <div className="text-lg font-bold mb-4">
                  Full Stack NextJS projects
                </div>
                <ul>
                  <li>• Personal and Company portfolio web app</li>
                  <li>• Food order website projects web app</li>
                  <li>• Ecommerce projects web app</li>
                  <li>• Learning managment system web app</li>
                  <li>• Learning video course web app </li>
                  <li>• Meeting Zoom Clone </li>
                  <li>• Realtime chatting clone web app </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
