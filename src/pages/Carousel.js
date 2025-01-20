import { ArrowRightOutlined } from '@ant-design/icons';

const Carousel = () => {
  return (
    <div className="w-full h-full">
      <div className="relative flex flex-col lg:flex-row justify-start items-center lg:items-start w-full h-full py-20 lg:py-40">
        <img
          src="carousel.png"
          alt="carousel background"
          className="w-full h-full object-cover absolute top-0 left-0 z-0 hidden lg:block"
        />

        <div className="relative z-10 flex flex-col lg:flex-row justify-start items-center lg:items-start w-full lg:ml-[10%]">
          <div className="text-center lg:text-left lg:mr-8">
            <p className="text-[35px] sm:text-[40px] md:text-[45px] lg:text-[50px] xl:text-[60px] tracking-wider font-bold">
              From <span className="text-main font-extrabold drop-shadow-xl">Stress</span> <br />
              To <span className="text-main font-extrabold drop-shadow-xl">Serenity</span>
            </p>

            <div className="mt-8">
              <button className="bg-main rounded-3xl px-8 py-2 hover:bg-white hover:text-main text-white flex items-center justify-center">
                Discover More
                <ArrowRightOutlined className="ml-3" />
              </button>
            </div>
          </div>

          <div className="mt-6 lg:-mt-28 flex justify-center lg:justify-start">
            <img
              src="carousel1.png"
              alt="hi logo"
              className="w-[250px] sm:w-[200px] md:w-[250px] lg:w-[300px] h-auto"
            />
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 space-x-4 hidden lg:flex">
          <div className="w-10 h-2 bg-main rounded-full cursor-pointer"></div>
          <div className="w-2 h-2 bg-gray-500 rounded-full cursor-pointer"></div>
          <div className="w-2 h-2 bg-gray-500 rounded-full cursor-pointer"></div>
          <div className="w-2 h-2 bg-gray-500 rounded-full cursor-pointer"></div>
          <div className="w-2 h-2 bg-gray-500 rounded-full cursor-pointer"></div>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
