import React from 'react';

const RewardPage = () => (
  <div className="py-16 bg-gray-50 overflow-hidden">
    <div className="relative max-w-xl mx-auto px-4 sm:px-6 lg:px-8 lg:max-w-screen-xl">
      <svg className="hidden lg:block absolute left-full transform -translate-x-1/2 -translate-y-1/4" width="404" height="784" fill="none" viewBox="0 0 404 784">
        <defs>
          <pattern id="b1e6e422-73f8-40a6-b5d9-c8586e37e0e7" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
            <rect x="0" y="0" width="4" height="4" className="text-gray-200" fill="currentColor" />
          </pattern>
        </defs>
        <rect width="404" height="784" fill="url(#b1e6e422-73f8-40a6-b5d9-c8586e37e0e7)" />
      </svg>

      <div className="relative">
        <h1 className="md:text-5xl font-extrabold tracking-tight text-gray-900 sm:text-4xl ">
          Reward Your
          <br />
          Customers
        </h1>
        <p className="mt-6 max-w-5xl leading-7 text-gray-500">
          Please confirm your monthly payment per completed user profile.
        </p>
        <div className="mt-10">
          <div className="mt-1 relative rounded-md shadow-sm md:w-64 sm:w-full">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <span className="text-gray-500 sm:text-sm sm:leading-5">
                $
              </span>
            </div>
            <input id="price" className="form-input block w-full py-3 pl-7 pr-12 sm:text-sm sm:leading-5" placeholder="0.00" aria-describedby="price-currency" />
            <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
              <span className="text-gray-500 sm:text-sm sm:leading-5" id="price-currency">
                USD
              </span>
            </div>
          </div>
          <p className=" max-w-5xl leading-7 text-gray-500"><i>Average Payment is $1 month.</i></p>
          <div className="mt-6 sm:max-w-sm md:max-w-md">
            <span className="block w-full rounded-md shadow-sm">
              <button type="submit" className="w-64 flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-500 focus:outline-none focus:border-blue-700 focus:shadow-outline-blue active:bg-blue-700 transition duration-150 ease-in-out">
                Confirm
              </button>
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default RewardPage;
