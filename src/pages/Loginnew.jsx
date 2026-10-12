import React from 'react'

const Loginnew = () => {
  return (
    <div>
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="grid w-full h-screen overflow-hidden bg-white shadow-lg md:grid-cols-2">

 
          <div className="relative justify-center hidden p-10 text-white rounded-r-4xl md:flex" style={{
            backgroundImage:
              'url("https://affixtheme.com/html/xmee/demo/img/figure/bg33-1.jpg")',
          }}>
            <div className='flex items-center  h-full px-4 py-4  bg-black-400 bg-red rounded-3xl backdrop-blur-3xl max-width[515px] justify-center max-h-[680px]'>

              <div className="">
                <p className="mb-3 text-sm opacity-80">
                  You can easily
                </p>
                <h2 className="text-3xl font-semibold leading-snug">
                  Get access your personal hub for clarity and productivity
                </h2>
              </div>
            </div>
          </div>
        
          <div className="p-8 md:p-12 max-width[454px] flex items-center">
          <div className="">
            <div className="mb-8">
              <div className="mb-4 text-3xl font-bold text-indigo-600">*</div>
              <h2 className="text-2xl font-semibold text-gray-800">
                Create an account
              </h2>
              <p className="mt-2 text-sm text-gray-500">
                Access your tasks, notes, and projects anytime, anywhere – and
                keep everything flowing in one place.
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

            <div className="flex gap-4">
              <button className="flex-1 py-2 transition border rounded-lg hover:bg-gray-50">
                Be
              </button>
              <button className="flex-1 py-2 transition border rounded-lg hover:bg-gray-50">
                G
              </button>
              <button className="flex-1 py-2 transition border rounded-lg hover:bg-gray-50">
                f
              </button>
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
    </div>
  )
}

export default Loginnew