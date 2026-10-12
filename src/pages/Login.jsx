import React from 'react'
import ParticlesBg from '../components/ParticlesBg/ParticlesBg'

const Login = () => {
    return (
        <div>
            <div className="relative flex items-center justify-center min-h-screen p-4 gradient-background overflow-hidden">
                {/* <div className="absolute top-10 left-10 w-72 h-72 bg-purple-300 rounded-full blur-3xl opacity-30"></div> */}
                {/* <div className="absolute bottom-10 right-10 w-72 h-72 bg-blue-300 rounded-full blur-3xl opacity-30"></div> */}

                <ParticlesBg />
                <div className="grid w-full max-w-5xl overflow-hidden bg-white shadow-lg rounded-3xl md:grid-cols-2 relative">


                    <div className="relative hidden p-10 text-white md:flex bg-gradient-to-br from-blue-400 via-purple-500 to-indigo-400 

  text-white p-10">

                        <div className="absolute w-4 h-4 text-4xl font-bold top-6 left-6 bg-red">
                        </div>

                        <div className="flex flex-col my-auto">
                            <div className="flex items-center gap-4 mb-4">
                                <div>
                                    <span className='flex items-center justify-center text-4xl font-semibold text-purple-500 bg-white h-13 w-13'>A</span>
                                </div>
                                <div>
                                    <h4 className='text-3xl font-bold'>APEX A13</h4>
                                    <p>Enterprises AI Platform prototype</p>
                                </div>
                            </div>

                            <div>
                                <h2 className="pb-4 text-xl font-semibold leading-snug">
                                    Sign in to manage providers and chat.
                                </h2>
                                <p className="mb-3 text-sm opacity-90">
                                    Model catalog + configuration
                                </p>
                                <p className="mb-3 text-sm opacity-90">
                                    Chat plaground with icon useage
                                </p>
                                <p className="mb-3 text-sm opacity-90">
                                    Data sources + orchestration groundwork
                                </p>
                                <br />
                                <br />
                            </div>
                            <p className="mb-3 text-sm opacity-60">
                                Tip: Use the seeded admin credentials for the prototype
                            </p>
                        </div>
                    </div>


                    <div className="p-8 md:p-12 relative">
                        <div className="bubble w-10 h-10 bg-purple-300 left-10 animation-delay-0"></div>
                        <div className="bubble w-6 h-6 bg-blue-300 left-1/3 animation-delay-2000"></div>
                        <div className="bubble w-8 h-8 bg-indigo-300 left-2/3 animation-delay-4000"></div>
                        <div className="bubble w-5 h-5 bg-purple-200 left-1/2 animation-delay-6000"></div>

                        <div className="mb-8">
                            <h2 className="text-2xl font-semibold text-gray-800">
                                Welcome Back
                            </h2>
                            <p className="mt-2 text-sm text-gray-500">
                                Enter Credential to access the platform
                            </p>
                        </div>


                        <form className="space-y-5">
                            <div>
                                <label className="block mb-2 text-sm text-gray-600">
                                    Your email
                                </label>
                                <input
                                    type="email"
                                    placeholder="example@gmail.com"
                                    className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                />
                            </div>

                            <div>
                                <label className="block mb-2 text-sm text-gray-600">
                                    Password
                                </label>
                                <input
                                    type="password"
                                    placeholder="********"
                                    className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                />
                            </div>

                            <button
                                type="submit"
                                className="w-full py-3 font-medium text-white transition duration-300 bg-indigo-600 rounded-lg shadow-md hover:bg-indigo-700"
                            >
                                Get Started
                            </button>
                        </form>

                        <div className="flex items-center my-6">
                            <div className="flex-1 h-px bg-gray-300"></div>
                            <span className="px-4 text-sm text-gray-400">or continue with</span>
                            <div className="flex-1 h-px bg-gray-300"></div>
                        </div>



                        <p className="mt-6 text-sm text-center text-gray-500">
                            Don't have an account?{" "}
                            <span className="font-medium text-indigo-600 cursor-pointer hover:underline">
                                Sign up
                            </span>
                        </p>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Login