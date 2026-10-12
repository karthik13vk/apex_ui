import React from 'react'
import { FcGoogle } from "react-icons/fc";
import { FaFacebookF, FaApple } from "react-icons/fa";

const SignUpPage = () => {
  return (
    <div>
  <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-500 to-blue-300 p-6 relative overflow-hidden">

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
      <div className="flex w-full max-w-6xl bg-white/40 backdrop-blur-md rounded-2xl shadow-xl overflow-hidden">

        {/* LEFT SIDE */}
        <div className="hidden md:flex w-1/2 items-center justify-center p-10 text-white">
          <div>
            <h1 className="text-4xl font-bold mb-4">
              Advanture <br /> start here
            </h1>

            <p className="text-white/80">
              Create an account to join Our Community
            </p>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="w-full md:w-1/2 bg-white p-10">

          <div className="text-center mb-6">
            <div className="bg-blue-500 w-12 h-12 mx-auto rounded-lg flex items-center justify-center text-white text-xl">
              👤
            </div>

            <h2 className="text-2xl font-semibold mt-4">
              Welcome Back!
            </h2>

            <p className="text-gray-500 text-sm">
              Sign in to your account
            </p>
          </div>

          {/* EMAIL */}
          <input
            type="email"
            placeholder="Enter your email address"
            className="w-full border rounded-lg px-4 py-3 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />

          {/* PASSWORD */}
          <input
            type="password"
            placeholder="Password"
            className="w-full border rounded-lg px-4 py-3 mb-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />

          <div className="flex justify-between items-center text-sm mb-4">
            <label className="flex items-center gap-2">
              <input type="checkbox" />
              Remember me
            </label>

            <a href="#" className="text-blue-500">
              Forgot Password?
            </a>
          </div>

          {/* SIGN IN */}
          <button className="w-full bg-gradient-to-r from-blue-500 to-blue-400 text-white py-3 rounded-lg font-medium hover:opacity-90">
            Sign In
          </button>

          {/* DIVIDER */}
          <div className="flex items-center my-5">
            <div className="flex-grow h-px bg-gray-300"></div>
            <span className="px-3 text-gray-400 text-sm">Or</span>
            <div className="flex-grow h-px bg-gray-300"></div>
          </div>

          {/* SOCIAL */}
          <div className="flex justify-center gap-4 mb-4">

            <button className="border p-3 rounded-lg hover:bg-gray-100">
              <FcGoogle size={20} />
            </button>

            <button className="border p-3 rounded-lg hover:bg-gray-100">
              <FaFacebookF />
            </button>

            <button className="border p-3 rounded-lg hover:bg-gray-100">
              <FaApple />
            </button>

          </div>

          <p className="text-center text-sm text-gray-500">
            Don’t have an account?
            <span className="text-blue-500 ml-1 cursor-pointer">
              Sign up now
            </span>
          </p>

        </div>
      </div>
    </div>
    </div>
  )
}

export default SignUpPage