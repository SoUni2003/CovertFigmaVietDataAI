import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { ArrowRightOutlined } from '@ant-design/icons';

const CategoryProduct = () => {
  const products = [
    { id: 1, name: 'Sản phẩm 1', image: 'cate1.png', price: '3 sản phẩm' },
    { id: 2, name: 'Ghế Massage', image: 'cate2.png', price: '10 sản phẩm' },
    { id: 3, name: 'Máy Chạy Bộ', image: 'cate3.png', price: '15 sản phẩm' },
    { id: 4, name: 'Xe Đạp', image: 'cate4.png', price: '10 sản phẩm' },
    { id: 5, name: 'Xe Đạp', image: 'cate5.png', price: '16 sản phẩm' },
    { id: 6, name: 'Sản phẩm 7', image: 'cate2.png', price: '17 sản phẩm' },
    { id: 7, name: 'Sản phẩm 8', image: 'cate2.png', price: '18 sản phẩm' },
    { id: 8, name: 'Sản phẩm 5', image: 'cate2.png', price: '19 sản phẩm' },
  ];

  return (
    <div className="h-full">
      <div className='py-20 sm:py-16'>
        <div className="">
            <div className="flex items-center text-center justify-center">
            <img
                src="logocategory.png"
                className="h-12 w-12 sm:h-16 sm:w-16 mb-4"
                alt="logo category"
            />
            <p className="text-2xl sm:text-4xl lg:text-5xl font-bold text-main opacity-80 leading-snug">
                Danh Mục Sản Phẩm
            </p>
            </div>
        </div>

        {/* Swiper Section */}
        <div className="mx-4 sm:mx-10 lg:mx-[10%] mt-10">
            <Swiper
            pagination={{ clickable: true }}
            spaceBetween={20}
            slidesPerView={1.5}
            breakpoints={{
                640: { slidesPerView: 2.5, spaceBetween: 20 },
                1024: { slidesPerView: 4.5, spaceBetween: 20 },
            }}
            centeredSlides={true}
            >
            {products.map((product) => (
                <SwiperSlide key={product.id}>
                <div className="relative overflow-hidden rounded-lg shadow-lg">
                    <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-[200px] sm:h-[280px] lg:h-[320px] object-cover"
                    />
                    <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black to-transparent p-4">
                    <h3 className="font-bold text-white text-sm sm:text-base lg:text-lg">
                        {product.name}
                    </h3>
                    <p className="text-white text-sm sm:text-lg opacity-75">
                        {product.price}
                    </p>
                    </div>
                </div>
                </SwiperSlide>
            ))}
            </Swiper>
        </div>

        <div className="flex justify-center mt-6 sm:mt-10">
            <button className="bg-main uppercase rounded-3xl px-6 sm:px-10 py-2 sm:py-3 hover:bg-white hover:text-main text-white flex items-center justify-center text-sm sm:text-base">
            Xem tất cả
            <ArrowRightOutlined className="ml-3" />
            </button>
        </div>
      </div>
    </div>
  );
};

export default CategoryProduct;
