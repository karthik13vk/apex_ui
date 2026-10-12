import { motion } from "framer-motion";
import { FcGoogle } from "react-icons/fc";
import { FaFacebookF, FaApple } from "react-icons/fa";

export default function SignUpNew() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-400 to-blue-300 p-6">
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
      <div className="flex w-full max-w-6xl bg-white/30 backdrop-blur-lg rounded-2xl shadow-xl overflow-hidden">

        {/* LEFT SIDE */}
        <div className="hidden md:flex w-1/2 relative items-center justify-center bg-gradient-to-br from-blue-500 to-blue-300 p-10">

          <div
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="text-white max-w-md"
          >
            <h1 className="text-4xl font-bold mb-4">
              Advanture <br /> start here
            </h1>

            <p className="text-white/80">
              Create an account to join Our Community
            </p>
          </div>

          {/* floating bubbles */}
          <div
            animate={{ y: [0, -20, 0] }}
            transition={{ repeat: Infinity, duration: 4 }}
            className="absolute w-20 h-20 bg-white/20 rounded-full top-20 left-20"
          ></div>

          <div
            animate={{ y: [0, 20, 0] }}
            transition={{ repeat: Infinity, duration: 5 }}
            className="absolute w-14 h-14 bg-white/20 rounded-full bottom-20 right-20"
          ></div>

        </div>

        {/* RIGHT SIDE */}
        <div className="w-full md:w-1/2 bg-white p-10 flex flex-col justify-center">

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

          {/* Email */}
          <input
            type="email"
            placeholder="Enter your email address"
            className="w-full border rounded-lg px-4 py-3 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />

          {/* Password */}
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

          {/* Sign In */}
          <button className="bg-gradient-to-r from-blue-500 to-blue-400 text-white py-3 rounded-lg font-medium hover:opacity-90 transition">
            Sign In
          </button>

          {/* Divider */}
          <div className="flex items-center my-5">
            <div className="flex-grow h-px bg-gray-300"></div>
            <span className="px-3 text-gray-400 text-sm">Or</span>
            <div className="flex-grow h-px bg-gray-300"></div>
          </div>

          {/* Social Login */}
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
  );
}