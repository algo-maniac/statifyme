"use client";

import StyleCard from "@/components/StyleCard";
import { Add, People } from "@mui/icons-material";
import axios from "axios";
import { useSession } from "next-auth/react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { useSelector, useDispatch } from "react-redux";

export default function Home() {
  const dispatch = useDispatch();

  const globalUser = useSelector((state) => state.auth.userData);

  return (
    <div className="font-face">
      <Toaster position="top-right" reverseOrder={false} className="absolute" />

      <div className={`flex flex-col justify-center h-full p-4`}>
        <div className={`flex flex-col items-center justify-center`}>
          <div className="text-xl sm:text-xl md:text-3xl lg:text-5xl text-tertiary text-center mt-10">
            Welcome to StatifyMe
          </div>
          <div className="text-md sm:text-lg md:text-xl lg:text-2xl text-tertiary text-center mt-10 mb-5">
            Unlock Your Profile's Potential with Data Insights.
          </div>
          <hr className="bg-tertiary text-tertiary border-tertiary h-[2px] w-[100%] mt-20" />
          <br />

          <div className="relative h-[300px] md:h-[400px] lg:h-[500px] xl:h-[600px] w-[90%]">
            <Image src="/images/landing_page.jpg" fill alt="Error Loading" />
          </div>
        </div>
        <hr className="bg-tertiary text-tertiary border-tertiary h-[2px] w-[100%] mt-20" />
        <br />
        <div className="flex flex-col items-center justify-center">
          <div className="text-md sm:text-lg md:text-xl lg:text-2xl text-tertiary text-center mt-10">
            We help you understand your online presence better by analyzing your
            profile data. Simply input your username, age, gender, and
            qualification, and unlock valuable insights into your online
            persona.
          </div>
        </div>

        <div className="flex flex-col justify-center items-center text-lg sm:text-xl md:text-2xl lg:text-4xl my-20">
          <div className="my-6 form-shade p-3 rounded-lg shadow-sm shadow-tertiary">
            How it Works:
          </div>

          <div className="flex flex-col md:flex-row justify-around">
            <StyleCard
              description={
                "Input Your Profile Data: Enter your username, age, gender, and qualification into the provided fields to get started."
              }
            />
            <StyleCard
              description={
                "Advanced Data Analysis: Our sophisticated algorithms analyze your profile data, examining demographic trends, educational background, and online behavior."
              }
            />
            <StyleCard
              description={
                "Visual Insights: Receive personalized insights presented through visually engaging charts, graphs, and statistics for easy interpretation."
              }
            />
            <StyleCard
              description={
                "Actionable Recommendations: Benefit from tailored recommendations based on the analysis, empowering you to optimize your online presence and make informed decisions."
              }
            />
          </div>
        </div>

        <hr className="bg-tertiary text-tertiary border-tertiary h-[2px] w-[100%] mt-20" />
        <br />
        <div className="flex flex-col justify-center items-center text-lg sm:text-xl md:text-2xl lg:text-4xl my-20">
          <div className="my-6 form-shade p-3 rounded-lg shadow-sm shadow-tertiary">
            Why choose StatifyMe?
          </div>
          <ul className="flex flex-col justify-around list-disc">
            <li className="m-3 text-lg sm:text-xl">
              Gain Valuable Insights: By inputting their profile data into the
              app, users can gain valuable insights into their online presence.
            </li>
            <li className="m-3 text-lg sm:text-xl">
              Optimize Online Presence: With personalized recommendations based
              on the analysis, users can take actionable steps to optimize their
              online presence.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
