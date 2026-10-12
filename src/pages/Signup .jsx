import React from 'react'

const Signup  = () => {
  return (
    <div>
    <div className="flex items-center justify-center min-h-screen p-6 bg-gradient-to-br from-blue-200 via-blue-100 to-blue-300">
      
      <div className="flex w-full max-w-6xl overflow-hidden bg-white shadow-2xl rounded-3xl">
        
        <div className="flex flex-col justify-center w-1/2 p-16">
          <h1 className="mb-6 text-4xl font-bold text-gray-800">
            Fast, Efficient and Productive
          </h1>
          <p className="mb-10 text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
          </p>

          <div className="flex items-center justify-between mt-auto text-sm text-gray-500">
            <span>🇺🇸 English</span>
            <div className="space-x-4">
              <a href="#" className="hover:text-blue-600">Terms</a>
              <a href="#" className="hover:text-blue-600">Plans</a>
              <a href="#" className="hover:text-blue-600">Contact Us</a>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-center w-1/2 p-12 bg-gray-50">
          <div className="w-full max-w-md">
            
            <h2 className="mb-1 text-2xl font-bold text-gray-800">Sign Up</h2>
            <p className="mb-6 text-sm text-gray-500">Your Social Campaigns</p>

            <form className="space-y-4">
              
              <div>
                <label className="block mb-1 text-sm font-medium text-gray-600">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="Enter email"
                  className="w-full px-4 py-2 border rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label className="block mb-1 text-sm font-medium text-gray-600">
                  Password
                </label>
                <input
                  type="password"
                  placeholder="Enter password"
                  className="w-full px-4 py-2 border rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
                />
                <p className="mt-1 text-xs text-gray-400">
                  Use 8 or more characters with a mix of letters, numbers &
                  symbols.
                </p>
              </div>

              <div>
                <label className="block mb-1 text-sm font-medium text-gray-600">
                  Repeat Password
                </label>
                <input
                  type="password"
                  placeholder="Repeat password"
                  className="w-full px-4 py-2 border rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div className="flex items-center text-sm">
                <input type="checkbox" className="mr-2" />
                <span>
                  I accept the{" "}
                  <a href="#" className="text-blue-600 hover:underline">
                    Terms
                  </a>
                </span>
              </div>

              <div className="text-sm text-center text-gray-500">Or with</div>

              <div className="flex gap-4">
                <button
                  type="button"
                  className="flex-1 py-2 border rounded-lg hover:bg-gray-100"
                >
                  Sign up with Google
                </button>

                <button
                  type="button"
                  className="flex-1 py-2 border rounded-lg hover:bg-gray-100"
                >
                  Sign up with Apple
                </button>
              </div>

              <button
                type="submit"
                className="w-full py-2 text-white transition duration-300 bg-blue-600 rounded-lg hover:bg-blue-700"
              >
                Sign Up
              </button>

              <p className="text-sm text-center text-gray-500">
                Already have an account?{" "}
                <a href="#" className="text-blue-600 hover:underline">
                  Sign in
                </a>
              </p>
            </form>

          </div>
        </div>

      </div>
    </div>
     </div>
  )
}

export default Signup 