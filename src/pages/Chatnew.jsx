import React from 'react'

const Chatnew = () => {
    return (
        <div>
            <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-gray-50 to-gray-200">

                <h1 className="text-5xl font-bold mb-10 bg-gradient-to-r from-teal-400 to-purple-500 text-transparent bg-clip-text">
                    What can I help with?
                </h1>

                <div className="w-full max-w-2xl bg-white shadow-xl rounded-2xl p-4 flex items-center gap-3">
                    <input
                        className="flex-1 outline-none text-gray-700"
                        placeholder="Ask anything..."
                    />

                    <button className="px-4 py-2 bg-gray-100 rounded-lg">
                        Voice
                    </button>

                    <button className="w-10 h-10 bg-purple-500 text-white rounded-full">
                        ↑
                    </button>
                </div>
            </div>
            <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-indigo-50 to-purple-100">

                <h1 className="text-5xl font-bold bg-gradient-to-r from-teal-400 via-blue-500 to-purple-500 bg-clip-text text-transparent mb-10">
                    What can I help with?
                </h1>

                <div className="backdrop-blur-lg bg-white/60 border border-white/30 shadow-xl rounded-2xl p-4 w-[90%] max-w-2xl flex items-center gap-3">
                    <input
                        type="text"
                        placeholder="Ask anything..."
                        className="flex-1 bg-transparent outline-none text-gray-700"
                    />

                    <button className="px-4 py-2 border rounded-lg">Voice</button>

                    <button className="w-10 h-10 rounded-full bg-gradient-to-r from-purple-500 to-indigo-500 text-white flex items-center justify-center">
                        🎤
                    </button>
                </div>
            </div>
            <div className="min-h-screen flex flex-col items-center justify-center bg-white">

                <h1 className="text-4xl font-semibold text-gray-800 mb-8">
                    What can I help with?
                </h1>

                <div className="w-full max-w-2xl border rounded-xl shadow-sm p-3 flex items-center gap-2">
                    <input
                        className="flex-1 outline-none text-gray-700"
                        placeholder="Ask anything"
                    />

                    <button className="px-3 py-1 border rounded-md">Voice</button>

                    <button className="bg-black text-white px-4 py-2 rounded-md">
                        Send
                    </button>
                </div>
            </div>
            <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50">

                <h1 className="text-5xl font-bold mb-6 text-gray-800">
                    What can I help with?
                </h1>

                <div className="w-full max-w-xl border rounded-xl p-3 flex items-center">
                    <input className="flex-1 outline-none" placeholder="Ask anything..." />
                </div>

                <div className="mt-6 grid grid-cols-2 gap-4 w-full max-w-xl">
                    {["Write code", "Summarize text", "Generate ideas", "Debug issue"].map((item) => (
                        <div className="p-3 bg-white rounded-xl shadow hover:shadow-md cursor-pointer">
                            {item}
                        </div>
                    ))}
                </div>
            </div>
            <div className="min-h-screen flex flex-col items-center justify-center bg-black text-white">

                <h1 className="text-5xl font-bold mb-10 text-purple-400">
                    What can I help with?
                </h1>

                <div className="w-full max-w-xl border border-purple-500 rounded-xl p-3 flex items-center shadow-[0_0_20px_rgba(168,85,247,0.5)]">
                    <input className="flex-1 bg-transparent outline-none text-white" placeholder="Ask anything..." />

                    <button className="bg-purple-500 px-4 py-2 rounded-lg ml-2">
                        🚀
                    </button>
                </div>
            </div>
            <div className="min-h-screen grid grid-cols-1 md:grid-cols-2">

                <div className="flex items-center justify-center bg-gradient-to-br from-blue-500 to-purple-500 text-white text-4xl font-bold">
                    AI Assistant
                </div>

                <div className="flex flex-col items-center justify-center p-10">
                    <h1 className="text-4xl font-semibold mb-6">What can I help with?</h1>

                    <div className="w-full max-w-md border rounded-xl p-3 flex items-center">
                        <input className="flex-1 outline-none" placeholder="Ask anything..." />
                    </div>
                </div>
            </div>
            <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-gray-50 to-gray-200">

                <h1 className="text-5xl font-bold mb-10 bg-gradient-to-r from-teal-400 to-purple-500 text-transparent bg-clip-text">
                    What can I help with?
                </h1>

                <div className="w-full max-w-2xl bg-white shadow-xl rounded-2xl p-4 flex items-center gap-3">
                    <input
                        className="flex-1 outline-none text-gray-700"
                        placeholder="Ask anything..."
                    />

                    <button className="px-4 py-2 bg-gray-100 rounded-lg">
                        Voice
                    </button>

                    <button className="w-10 h-10 bg-purple-500 text-white rounded-full">
                        ↑
                    </button>
                </div>
            </div>
            <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-gray-50 to-gray-200">

                <h1 className="text-5xl font-bold mb-10 bg-gradient-to-r from-teal-400 to-purple-500 text-transparent bg-clip-text">
                    What can I help with?
                </h1>

                <div className="w-full max-w-2xl bg-white shadow-xl rounded-2xl p-4 flex items-center gap-3">
                    <input
                        className="flex-1 outline-none text-gray-700"
                        placeholder="Ask anything..."
                    />

                    <button className="px-4 py-2 bg-gray-100 rounded-lg">
                        Voice
                    </button>

                    <button className="w-10 h-10 bg-purple-500 text-white rounded-full">
                        ↑
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Chatnew
