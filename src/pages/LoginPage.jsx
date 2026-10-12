import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

export default function LoginPage() {
  return (
    <div className="min-h-screen flex">

      {/* LEFT SIDE */}
      <div className="hidden lg:flex w-1/2 relative bg-gradient-to-br from-blue-600 to-indigo-500 text-white overflow-hidden">

        {/* abstract circles */}
        <div className="absolute w-[400px] h-[400px] border border-white/10 rounded-full top-10 right-10"></div>
        <div className="absolute w-[300px] h-[300px] border border-white/10 rounded-full bottom-10 left-10"></div>

        {/* dots */}
        <div className="absolute bottom-20 right-24 grid grid-cols-6 gap-2 opacity-40">
          {Array.from({ length: 36 }).map((_, i) => (
            <div key={i} className="w-1 h-1 bg-white rounded-full"></div>
          ))}
        </div>

        {/* content */}
        <div className="relative z-10 flex flex-col justify-center px-20">

          {/* logo */}
          <div className="flex items-center gap-3 mb-16">
            <div className="w-10 h-10 bg-white rounded-full"></div>
            <span className="font-semibold tracking-wider">YOUR LOGO</span>
          </div>

          {/* heading */}
          <h1 className="text-6xl font-bold leading-tight mb-8">
            Hello,
            <br />
            welcome!
          </h1>

          <p className="max-w-sm text-white/80">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Phasellus nisi risus.
          </p>

        </div>
      </div>

      {/* RIGHT SIDE */}
      <div className="w-full lg:w-1/2 bg-gray-100 flex items-center justify-center">

        <div className="w-full max-w-md px-10 py-12">

          {/* EMAIL */}
          <div className="mb-6">
            <input
              type="email"
              placeholder="Email address"
              className="w-full border-2 border-blue-400 rounded-md px-4 py-3 focus:outline-none"
            />
          </div>

          {/* PASSWORD */}
          <div className="mb-4">
            <input
              type="password"
              placeholder="Password"
              className="w-full border-2 border-blue-400 rounded-md px-4 py-3 focus:outline-none"
            />
          </div>

          {/* options */}
          <div className="flex justify-between items-center text-sm mb-8">
            <label className="flex items-center gap-2">
              <input type="checkbox" />
              Remember me
            </label>

            <button className="text-blue-500 hover:underline">
              Forgot password?
            </button>
          </div>

          {/* buttons */}
          <div className="flex gap-4 mb-16">
            <button className="flex-1 bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition">
              Login
            </button>

            <button className="flex-1 border-2 border-blue-600 text-blue-600 py-2 rounded-md hover:bg-blue-50 transition">
              Sign up
            </button>
          </div>

          {/* social */}
<div className="flex items-center gap-6 text-blue-500">
  <span className="text-gray-500 text-sm">FOLLOW</span>
  <FaFacebookF />
  <FaTwitter />
  <FaInstagram />
</div>

        </div>
      </div>
    </div>
  );
}