import React from 'react';
import { LoginForm } from "./LoginForm";
import { Link } from 'react-router-dom'; 

function LoginPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-900 dark:to-gray-800 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="bg-white dark:bg-gray-700 rounded-2xl shadow-xl p-8 space-y-8">
          <div className="text-center space-y-2">
            <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-200">Welcome back</h1>
            <p className="text-gray-500 dark:text-gray-400">Sign in to your account</p>
          </div>
          
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-200 dark:border-gray-600"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-4 bg-white dark:bg-gray-700 text-gray-500 dark:text-gray-400">Continue with email</span>
            </div>
          </div>

          <LoginForm />
          
          <p className="text-center text-sm text-gray-500 dark:text-gray-400">
            Don't have an account?{' '}
            <Link to='/signup' className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-600 font-medium">
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
