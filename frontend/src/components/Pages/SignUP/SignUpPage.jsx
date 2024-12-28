import React from 'react';
import { SignUpForm } from './SignUpForm';
import { Link } from 'react-router-dom'; // corrected import statement

function SignUpPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-900 dark:to-gray-800 flex items-center justify-center py-12">
      <div className="w-full max-w-lg">
        <div className="bg-white dark:bg-gray-700 rounded-2xl shadow-xl p-8 space-y-8">
          <div className="text-center space-y-2">
            <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-200">Create Account</h1>
            <p className="text-gray-500 dark:text-gray-400">Join us today and get started</p>
          </div>
          
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-200 dark:border-gray-600"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-4 bg-white dark:bg-gray-700 text-gray-500 dark:text-gray-400">Fill in your details</span>
            </div>
          </div>

          <SignUpForm />
          
          <p className="text-center text-sm text-gray-500 dark:text-gray-400">
            Already have an account?{' '}
            <Link to='/login' className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-600 font-medium">
              Log in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default SignUpPage;
