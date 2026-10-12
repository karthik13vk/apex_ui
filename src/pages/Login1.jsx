import React from "react";
import { FaGoogle, FaFacebookF, FaApple } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { RiLockPasswordLine } from "react-icons/ri";

export default function Login() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-[#5a7be8] to-[#d7dbe6]  relative p-6">

            {/* DOT PATTERNS */}
            <div className="absolute top-20 left-20 grid grid-cols-6 gap-2 opacity-30">
                {[...Array(30)].map((_, i) => (
                    <div key={i} className="w-1.5 h-1.5 bg-white rounded-full"></div>
                ))}
            </div>

            <div className="absolute bottom-20 right-32 grid grid-cols-6 gap-2 opacity-30">
                {[...Array(30)].map((_, i) => (
                    <div key={i} className="w-1.5 h-1.5 bg-white rounded-full"></div>
                ))}
            </div>

            {/* WAVE SHAPES */}
            <svg
                className="absolute bottom-0 left-0 w-full opacity-40"
                viewBox="0 0 1440 320"
            >
                <path
                    fill="#ffffff"
                    fillOpacity="0.4"
                    d="M0,192L60,170.7C120,149,240,107,360,106.7C480,107,600,149,720,186.7C840,224,960,256,1080,250.7C1200,245,1320,203,1380,181.3L1440,160L1440,320L0,320Z"
                ></path>
            </svg>

            <svg
                className="absolute bottom-0 left-0 w-full opacity-30"
                viewBox="0 0 1440 320"
            >
                <path
                    fill="#ffffff"
                    fillOpacity="0.5"
                    d="M0,256L80,224C160,192,320,128,480,112C640,96,800,128,960,170.7C1120,213,1280,267,1360,293.3L1440,320L1440,320L0,320Z"
                ></path>
            </svg>

            {/* MAIN CARD */}
            <div className="w-full max-w-6xl rounded-2xl overflow-hidden flex shadow-2xl backdrop-blur-lg">

                {/* LEFT PANEL */}
                <div className="hidden md:flex w-1/2 relative bg-gradient-to-br from-[#5a7be8] to-[#6b8df0] text-white p-16 overflow-hidden">

                    {/* abstract circles */}
                    <div className="absolute w-[350px] h-[350px] border border-white/10 rounded-full top-[-100px] right-[-80px] animate-float"></div>

                    <div className="absolute w-[280px] h-[280px] border border-white/10 rounded-full bottom-[-120px] left-[-80px] animate-floatSlow"></div>

                    {/* dotted pattern */}
                    <div className="absolute top-20 left-16 grid grid-cols-5 gap-2 opacity-40">
                        {Array.from({ length: 25 }).map((_, i) => (
                            <div key={i} className="w-1.5 h-1.5 bg-white rounded-full"></div>
                        ))}
                    </div>

                    {/* small floating circle */}
                    <div className="absolute bottom-24 left-24 w-6 h-6 bg-cyan-300 rounded-full animate-bounce"></div>

                    {/* bottom arc */}
                    <div className="absolute bottom-[-140px] right-[-80px] w-[300px] h-[300px] border-[10px] border-white/40 rounded-full"></div>

                    {/* text */}
                    <div className="relative z-10">
                        <h1 className="text-5xl font-bold leading-tight mb-6">
                            Advanture <br /> start here
                        </h1>

                        <p className="text-lg opacity-90">
                            Create and account to Join Our Community
                        </p>
                    </div>
                </div>

                {/* RIGHT PANEL */}
                {/* RIGHT PANEL */}
                <div className="w-full md:w-1/2 bg-white/90 backdrop-blur-lg p-6 sm:p-8 md:p-12 flex flex-col justify-center">

                    {/* logo */}
                    <div className="flex justify-center mb-4 sm:mb-6">
                        <div className="w-12 h-12 sm:w-14 sm:h-14 bg-blue-500 rounded-xl"></div>
                    </div>

                    <h2 className="text-center text-lg sm:text-xl font-semibold mb-6 sm:mb-8">
                        Hello ! Welcome back
                    </h2>

                    {/* email */}
                    <div className="relative mb-4">
                        <HiOutlineMail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-lg" />
                        <input
                            type="email"
                            placeholder="Enter your email address"
                            className="w-full border rounded-md pl-10 pr-3 py-3 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-blue-400"
                        />
                    </div>

                    {/* password */}
                    <div className="relative mb-4">
                        <RiLockPasswordLine className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-lg" />
                        <input
                            type="password"
                            placeholder="Password"
                            className="w-full border rounded-md pl-10 pr-3 py-3 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-blue-400"
                        />
                    </div>

                    {/* options */}
                    <div className="flex justify-between items-center text-xs sm:text-sm mb-4">
                        <label className="flex items-center gap-2">
                            <input type="checkbox" />
                            Remember me
                        </label>

                        <button className="text-blue-500 hover:underline">
                            Reset Password!
                        </button>
                    </div>

                    {/* login button */}
                    <button className="w-full bg-blue-500 text-white py-3 rounded-md mb-6 hover:bg-blue-600 transition">
                        Login
                    </button>

                    {/* divider */}
                    <div className="flex items-center mb-6">
                        <div className="flex-grow border"></div>
                        <span className="mx-3 text-gray-400 text-sm">or</span>
                        <div className="flex-grow border"></div>
                    </div>

                    {/* social */}
                    <div className="flex justify-center gap-3 sm:gap-4 mb-6">
                        <button className="p-3 border rounded-md hover:bg-gray-100">
                            <FaGoogle />
                        </button>

                        <button className="p-3 border rounded-md hover:bg-gray-100">
                            <FaFacebookF />
                        </button>

                        <button className="p-3 border rounded-md hover:bg-gray-100">
                            <FaApple />
                        </button>
                    </div>

                    <p className="text-center text-xs sm:text-sm">
                        Dont Have an account?{" "}
                        <span className="text-blue-500 cursor-pointer hover:underline">
                            Create Account
                        </span>
                    </p>
                </div>
            </div>
        </div>
    );
}