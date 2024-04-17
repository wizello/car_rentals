import React from 'react';

const SignIn = () => {
  const router = typeof window !== 'undefined' && require('next/router').useRouter();

  const handleSignIn = () => {
    // Handle sign-in logic
    // After successful sign-in, navigate to the homepage
    if (router) {
      router.push('/');
    }
  };
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Sign in to your account</h2>
        </div>
        <form className="mt-8 space-y-6">
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <label htmlFor="email-address" className="sr-only">Email address</label>
              <input id="email-address" name="email" type="email" autoComplete="email" required className="appearance-none rounded-none relative block w-full px-3 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-primary-green focus:border-primary-green focus:z-10 sm:text-sm" placeholder="Email address" />
            </div>
            <div>
              <label htmlFor="password" className="sr-only">Password</label>
              <input id="password" name="password" type="password" autoComplete="current-password" required className="appearance-none rounded-none relative block w-full px-3 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-primary-green focus:border-primary-green focus:z-10 sm:text-sm" placeholder="Password" />
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input id="remember-me" name="remember-me" type="checkbox" className="h-4 w-4 text-primary-green focus:ring-primary-green border-gray-300 rounded" />
              <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">Remember me</label>
            </div>

            <div className="text-sm">
              <a href="#" className="font-medium text-primary-green hover:text-primary-green">Forgot your password?</a>
            </div>
          </div>

          <div>
            <button type="submit" className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-primary-green hover:bg-primary-green focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-green">
              <span className="absolute left-0 inset-y-0 flex items-center pl-3">

                  <path fillRule="evenodd" d="M10 12a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  <path fillRule="evenodd" d="M4 7a8 8 0 1112.635 6.17c.01-.02.036-.048.074-.082l1.545-1.44A1 1 0 0118 12.248V13a2 2 0 01-2 2H4a2 2 0 01-2-2v-1.75a1 1 0 01.268-.67l1.442-1.545a.5.5 0 00.082-.074A7.963 7.963 0 014 7zm8 3a1 1 0 11-2 0 1 1 0 012 0zm-5-3a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
           
              </span>
              Sign in
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
