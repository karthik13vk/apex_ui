import React from "react";
import { motion } from "framer-motion";
import { FaEye } from "react-icons/fa";
import ParticlesBg from "../components/ParticlesBg/ParticlesBg";

const Loginscreen = () => {
    return (
        <div className="min-h-screen overflow-hidden bg-[#070B14] flex items-center justify-center px-6 py-14 relative">
            <ParticlesBg />
            {/* BACKGROUND GLOW */}
            <div className="absolute top-[-120px] left-[-120px] w-[420px] h-[420px] bg-purple-600/30 rounded-full blur-3xl"></div>

            <div className="absolute bottom-[-120px] right-[-120px] w-[420px] h-[420px] bg-cyan-500/20 rounded-full blur-3xl"></div>

            {/* MAIN CARD */}
            <motion.div
                initial={{ opacity: 0, y: 30, scale: 0.96 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.6 }}
                className="
          relative
          z-10
          w-full
          max-w-6xl
          rounded-[34px]
          overflow-hidden
          border
          border-white/10
          bg-white/5
          backdrop-blur-xl
          shadow-[0_10px_60px_rgba(0,0,0,0.6)]">

                <div className="flex flex-col md:flex-row min-h-[680px]">

                    {/* LEFT SECTION */}
                    <div className="md:w-1/2 relative p-14 flex items-center bg-gradient-to-br from-violet-600/70 to-blue-600/60">

                        {/* GLASS OVERLAY */}
                        <div className="absolute inset-0 bg-black/10 backdrop-blur-md"></div>

                        <div className="relative z-10 text-white">

                            <h1 className="text-6xl font-bold mb-5 tracking-wide">
                                APEX AI3
                            </h1>

                            <p className="text-white/80 text-lg mb-12">
                                Enterprise AI Operations Platform
                            </p>

                            <h2 className="text-4xl font-semibold leading-snug mb-10">
                                Secure AI operations for modern enterprises
                            </h2>

                            <div className="space-y-5 text-white/90 text-lg">
                                <p>✔ Unified AI model management</p>
                                <p>✔ Secure playground & analytics</p>
                                <p>✔ Enterprise governance & monitoring</p>
                            </div>
                        </div>
                    </div>

                    {/* RIGHT SECTION */}
                    <div className="md:w-1/2 relative flex items-center justify-center p-14">

                        {/* STRONG WHITE GLASS */}
                        <div
                            className=" w-full
                max-w-md
                rounded-[30px]
                border
                border-white/40
                bg-white/70
                backdrop-blur-3xl
                shadow-[0_8px_40px_rgba(255,255,255,0.18)]
                p-10">

                            <h2 className="text-4xl font-bold text-gray-800 mb-3">
                                Welcome Back
                            </h2>

                            <p className="text-gray-600 mb-10">
                                Sign in to continue to your dashboard
                            </p>

                            {/* EMAIL */}
                            <div className="mb-6">
                                <label className="block mb-3 text-gray-700 font-medium">
                                    Email
                                </label>

                                <input
                                    type="email"
                                    placeholder="admin@apex.local"
                                    className="
                    w-full
                    px-5
                    py-4
                    rounded-2xl
                    bg-white/80
                    border
                    border-white/60
                    outline-none
                    text-gray-800
                    placeholder-gray-500
                    backdrop-blur-2xl
                    shadow-inner
                    focus:ring-4
                    focus:ring-violet-300/40
                  "
                                />
                            </div>

                            {/* PASSWORD */}
                            <div className="mb-8">
                                <label className="block mb-3 text-gray-700 font-medium">
                                    Password
                                </label>

                                <div className="relative">

                                    <input
                                        type="password"
                                        placeholder="••••••••"
                                        className="
                      w-full
                      px-5
                      py-4
                      rounded-2xl
                      bg-white/80
                      border
                      border-white/60
                      outline-none
                      text-gray-800
                      placeholder-gray-500
                      backdrop-blur-2xl
                      shadow-inner
                      focus:ring-4
                      focus:ring-violet-300/40
                    "
                                    />

                                    <FaEye className="absolute right-5 top-5 text-gray-500 cursor-pointer" />
                                </div>
                            </div>

                            {/* BUTTON */}
                            <button
                                className="
                  w-full
                  py-4
                  rounded-2xl
                  text-white
                  text-lg
                  font-semibold
                  bg-gradient-to-r
                  from-violet-600
                  to-blue-600
                  hover:scale-[1.02]
                  transition-all
                  duration-300
                  shadow-xl
                  shadow-violet-400/30
                "
                            >
                                SIGN IN
                            </button>

                            {/* FOOTER */}
                            <p className="text-center mt-8 text-gray-700">
                                Don’t have an account?{" "}
                                <span className="text-violet-700 font-semibold cursor-pointer">
                                    Register
                                </span>
                            </p>
                        </div>
                    </div>
                </div>
            </motion.div>
        </div>
    )
}

export default Loginscreen
