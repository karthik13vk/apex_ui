import React from 'react';
import { Paperclip, Mic } from "lucide-react";
import { TbMapSearch } from "react-icons/tb";

const AIScreen = () => {
    return (
        <>
            <div className="mx-auto space-y-6 max-w-7xl">
                <div className="min-h-screen flex items-center justify-center bg-[#f3f4f6] px-4">
                    <div className="w-full text-center">

                        {/* Headings */}
                        <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold text-gray-800">
                            Good Morning
                        </h1>

                        <h2 className="mt-4 text-4xl sm:text-5xl md:text-6xl font-semibold bg-gradient-to-r from-green-500 via-blue-500 to-purple-500 bg-clip-text text-transparent">
                            What can I help with?
                        </h2>

                        <p className="mt-5 text-gray-500 text-sm sm:text-base">
                            Subscribe now and start exploring the playground
                        </p>

                        {/* Input Card */}
                        <div className="mt-12 bg-white/80 backdrop-blur-md border
                         border-gray-200 rounded-2xl shadow-cardshadow
                          p-[1px] transition-all  bg-gradient-to-r from-[#5234C9] to-[#FFF5F5]">
                            <div className="bg-white rounded-xl p-6">
                                <div className="flex items-start gap-3 text-gray-400">
                                    <Mic />
                                    <textarea
                                        rows={3}
                                        placeholder="Initial a query or send a command to AI"
                                        className="w-full bg-transparent resize-none outline-none text-gray-700 placeholder-gray-400 text-base sm:text-lg"
                                    />
                                </div>
                                <div className="mt-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">

                                    <div className="flex gap-3 flex-wrap">
                                        <button className="px-4 py-2 text-sm font-medium bg-gray-100 hover:bg-gray-200 rounded-full flex items-center gap-2 transition shadow-cardbtn">
                                            <Paperclip size={16} />  Attachment
                                        </button>

                                        <button className="px-4 py-2 text-sm font-medium bg-gray-100 hover:bg-gray-200 rounded-full flex items-center gap-2 transition shadow-cardbtn">
                                            <TbMapSearch size={16} />
                                            Deep Research
                                        </button>
                                    </div>

                                    <button className="px-7 py-2.5 text-sm font-medium text-white rounded-full bg-gradient-to-r from-purple-500 to-indigo-500 shadow-[0_8px_25px_rgba(124,58,237,0.45)] hover:shadow-[0_10px_30px_rgba(124,58,237,0.6)] transition-all duration-300">
                                        Generate
                                    </button>

                                </div>
                            </div>


                            {/* Bottom Controls */}

                        </div>

                    </div>
                </div>

                <div className="bg-white rounded-3xl shadow-2xl p-6 border relative">

                    <div className="flex items-center gap-3 text-gray-400">
                        <Mic />
                        <input
                            type="text"
                            placeholder="Ask something to get started..."
                            className="w-full outline-none"
                        />
                    </div>

                    <div className="flex items-center justify-between mt-6">

                        <div className="flex gap-3">
                            <button className="px-4 py-2 bg-gray-100 rounded-full flex items-center gap-2">
                                <Paperclip size={16} /> Attachment
                            </button>

                            <button className="px-4 py-2 bg-gray-100 rounded-full">
                                Deep Research
                            </button>
                        </div>

                        <button className="px-6 py-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg">
                            Generate
                        </button>

                    </div>
                </div>
            </div>

        </>
    );
};
export default AIScreen;