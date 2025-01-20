import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Pagination, Navigation } from 'swiper/modules';
import { LeftOutlined, RightOutlined } from '@ant-design/icons';
import { ArrowRightOutlined } from '@ant-design/icons';

const NewAndEvent = () => {
    const swiperRef = useRef(null);

    const handlePrev = () => {
        if (swiperRef.current) {
            swiperRef.current.slidePrev();
        }
    };

    const handleNext = () => {
        if (swiperRef.current) {
            swiperRef.current.slideNext();
        }
    };

    const items = [
        { id: 1, title: 'Title 1', img: 'nae1.png' },
        { id: 2, title: 'Title 2', img: 'nae2.png' },
        { id: 3, title: 'Title 3', img: 'nae3.png' },
        { id: 4, title: 'Title 4', img: 'nae4.png' },
        { id: 5, title: 'Title 5', img: 'nae1.png' },
        { id: 6, title: 'Title 6', img: 'nae2.png' },
    ];

    return (
        <div className="relative max-w-[80%] mx-auto">
    <div className="py-4">
        <p className="text-2xl sm:text-4xl lg:text-5xl font-bold text-main opacity-65 leading-snug text-center py-3">
            Tin Tức & Sự Kiện
        </p>

        {/* Swiper */}
        <Swiper
            spaceBetween={10}
            loop={true}
            modules={[Pagination, Navigation]}
            onSwiper={(swiper) => {
                swiperRef.current = swiper;
            }}
            breakpoints={{
                640: {
                    slidesPerView: 2,
                    spaceBetween: 15,
                },
                768: {
                    slidesPerView: 3,
                    spaceBetween: 20,
                },
                1024: {
                    slidesPerView: 4,
                    spaceBetween: 25,
                },
            }}
            className="my-5"
        >
            {items.map((item) => (
                <SwiperSlide key={item.id}>
                    <div className="bg-white shadow-xl flex flex-col h-full">
                        <img
                            src={item.img}
                            alt="new and event"
                            className="object-cover h-[160px] lg:h-[200px] w-full"
                        />
                        <div className="p-3 flex-grow">
                            <h3 className="text-xl font-semibold">{item.title}</h3>
                            <p className="text-[#6A7682] text-xs font-bold opacity-65">
                                28, Aug, 2025, 2026 19:55
                            </p>
                            <p className="text-[#6A7682] text-sm">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            </p>
                        </div>
                    </div>
                </SwiperSlide>
            ))}
        </Swiper>

        <button
            onClick={handlePrev}
            className="absolute border border-1 top-[50%] lg:left-[-60px] left-[-40px] transform -translate-y-1/2 w-10 h-10 lg:w-12 lg:h-12 bg-white shadow-lg rounded-full flex items-center justify-center text-main hover:bg-main hover:text-white transition z-10"
        >
            <LeftOutlined />
        </button>
        <button
            onClick={handleNext}
            className="absolute border border-1 top-[50%] lg:right-[-60px] right-[-40px] transform -translate-y-1/2 w-10 h-10 lg:w-12 lg:h-12 bg-white shadow-lg rounded-full flex items-center justify-center text-main hover:bg-main hover:text-white transition z-10"
        >
            <RightOutlined />
        </button>

        <div className="flex justify-center mt-6">
            <button className="bg-main text-white px-6 py-2 rounded-full font-semibold hover:bg-black transition">
                Xem Tất Cả <ArrowRightOutlined />
            </button>
        </div>
    </div>
</div>

    );
};

export default NewAndEvent;
