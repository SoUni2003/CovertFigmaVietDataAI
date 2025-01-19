import React from 'react';

const MassageChair = () => {
  return (
    <div className="w-full h-full bg-[#FDF3FA]">
      <div className='py-20'>
      <div className="">
            <div className="flex items-center text-center justify-center space-x-2">
                <img
                    src="best-seller.png"
                    className="h-12 w-12 sm:h-16 sm:w-16"
                    alt="logo category"
                />
                <p className="text-2xl sm:text-4xl lg:text-5xl font-bold text-main opacity-80 leading-snug">
                    Ghế Massage ABCSport
                </p>
            </div>
            <p className='mt-6 text-center'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin <br /> lobortis sed sapien in pretium. Donec tincidunt, quam.
            </p>
        </div>
        <div className="mx-[10%] mt-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="border p-4 rounded-lg relative bg-white">
              <div className="w-full h-[300px] oject-cover mb-4 rounded-t-lg">
                <img src="flash1.png" alt="Product Image" className="w-full h-full object-cover" />
              </div>
              <div className="absolute top-4 left-4 bg-main text-white text-xs px-2 py-1 rounded-sm">
                -30%
              </div>
              <div className="text-left">
                <p className='font-medium text-base'>Ghế Massage ABCSSport A35</p>
                <p className="line-through text-gray-500 text-sm">16.900.000đ</p>
                <p className="text-base font-bold text-main">12.900.000đ</p>
              </div>
            </div>

            <div className="border p-4 rounded-lg relative bg-white">
              <div className="w-full h-[300px] oject-cover mb-4 rounded-t-lg">
                <img src="flash2.png" alt="Product Image" className="w-full h-full object-cover" />
              </div>
              <div className="absolute top-4 left-4 bg-main text-white text-xs px-2 py-1 rounded-sm">
                -20%
              </div>
              <div className="text-left">
                <p className='font-medium text-base'>Ghế Massage ABCSSport A35</p>
                <p className="line-through text-gray-500 text-sm">16.900.000đ</p>
                <p className="text-base font-bold text-main">12.900.000đ</p>
              </div>
            </div>

            <div className="border p-4 rounded-lg relative bg-white">
              <div className="w-full h-[300px] oject-cover mb-4 rounded-t-lg">
                <img src="flash3.png" alt="Product Image" className="w-full h-full object-cover" />
              </div>
              <div className="absolute top-4 left-4 bg-main text-white text-xs px-2 py-1 rounded-sm">
                -25%
              </div>
              <div className="text-left">
                <p className='font-medium text-base'>Ghế Massage ABCSSport A35</p>
                <p className="line-through text-gray-500 text-sm">16.900.000đ</p>
                <p className="text-base font-bold text-main">12.900.000đ</p>
              </div>
            </div>

            <div className="border p-4 rounded-lg relative bg-white">
              <div className="w-full h-[300px] oject-cover mb-4 rounded-t-lg">
                <img src="flash4.png" alt="Product Image" className="w-full h-full object-cover" />
              </div>
              <div className="absolute top-4 left-4 bg-main text-white text-xs px-2 py-1 rounded-sm">
                -15%
              </div>
              <div className="text-left">
                <p className='font-medium text-base'>Ghế Massage ABCSSport A35</p>
                <p className="line-through text-gray-500 text-sm">16.900.000đ</p>
                <p className="text-base font-bold text-main">12.900.000đ</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MassageChair;
