import React, { useEffect } from 'react';
import { FiUser, FiMail, FiLock, FiArrowRight } from 'react-icons/fi';
import { FcGoogle } from 'react-icons/fc';

const Login = () => {
  useEffect(() => {
    // Auto-fill test credentials when component mounts
    const emailInput = document.querySelector('input[name="email"]');
    const passwordInput = document.querySelector('input[name="password"]');
    
    if (emailInput && passwordInput) {
      emailInput.value = "test@example.com";
      passwordInput.value = "password123";
    }
  }, []);

  return (
    <div className="w-screen h-screen flex items-center justify-center bg-gradient-to-tr from-indigo-100 via-purple-100 to-pink-100">
      <div className="backdrop-blur-sm bg-white/80 p-8 rounded-2xl shadow-lg w-full max-w-sm border border-gray-200/50">
        <div className="flex flex-col items-center mb-6">
          <div className="bg-gradient-to-r from-pink-500 to-indigo-600 p-3 rounded-full shadow-md">
            <FiUser className="text-white text-2xl" />
          </div>
          <h2 className="text-2xl font-bold text-gray-800 mt-4 bg-gradient-to-r from-pink-500 via-violet-500 to-indigo-800 inline-block text-transparent bg-clip-text">
            Welcome Back
          </h2>
          <p className="text-gray-500 text-sm mt-1">Sign in to continue</p>
        </div>

        <button className="w-full flex items-center justify-center gap-2 bg-white text-gray-700 font-medium py-2.5 px-4 rounded-xl hover:bg-gray-50 transition mb-5 border border-gray-300/50 shadow-xs">
          <FcGoogle className="text-lg" />
          <span>Sign in with Google</span>
        </button>

        <div className="relative mb-5">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-300/50"></div>
          </div>
          <div className="relative flex justify-center">
            <span className="px-2 bg-white text-sm text-gray-500">or continue with email</span>
          </div>
        </div>

        <form
      className="space-y-4"
      onSubmit={(e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;

        if (email === "test@example.com" && password === "password123") {
          localStorage.setItem("loggedIn", "true");
          setIsLoggedIn(true);
          window.location.hash = "/dashboard";  // Update hash navigation
        } else {
          alert("Invalid credentials");
        }
      }}
    >
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <FiMail className="text-gray-400" />
            </div>
            <input
              name="email"
              type="email"
              placeholder="Email"
              className="w-full pl-10 pr-4 py-2.5 text-sm border border-gray-300/50 rounded-xl bg-white/90 focus:outline-none focus:ring-1 focus:ring-indigo-400 focus:border-indigo-400"
            />
          </div>
          
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <FiLock className="text-gray-400" />
            </div>
            <input
              name="password"
              type="password"
              placeholder="Password"
              className="w-full pl-10 pr-4 py-2.5 text-sm border border-gray-300/50 rounded-xl bg-white/90 focus:outline-none focus:ring-1 focus:ring-indigo-400 focus:border-indigo-400"
            />
          </div>
          
          <button
            type="submit"
            className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-pink-500 to-indigo-600 text-white font-medium py-2.5 px-4 rounded-xl hover:opacity-90 transition shadow-md"
          >
            <span>Login</span>
            <FiArrowRight className="text-sm" />
          </button>
        </form>

        <p className="mt-5 text-sm text-center text-gray-600">
          Don't have an account?{" "}
          <a href="#" className="text-indigo-600 hover:underline font-medium">
            Sign up
          </a>
        </p>
      </div>
    </div>
  );
};

export default Login;