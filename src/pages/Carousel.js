import { ArrowRightOutlined } from '@ant-design/icons';

const Carousel = () => {
  return (
    <div className="w-full h-full">
      <div className="lg:bg-carousel bg-contain bg-no-repeat bg-top min-h-screen relative flex flex-col justify-between">
        <div className="ml-[10%] relative z-10">
          <div className="pt-[10%] xl:flex lg:flex flex-col lg:flex-row">
            <div className="lg:mr-10">
              <p className="text-[60px] sm:text-[30px] md:text-[40px] lg:text-[50px] tracking-wider">
                From <b className="text-main font-extrabold drop-shadow-xl">Stress</b> <br />
                To <b className="text-main font-extrabold drop-shadow-xl">Serenity</b>
              </p>

              <div className="mt-8">
                <button className="bg-main rounded-3xl px-10 py-2 hover:bg-white hover:text-main text-white flex items-center justify-center">
                  Discover More
                  <ArrowRightOutlined className="ml-3" />
                </button>
              </div>
            </div>

            <div className="-mt-[7%]">
              <img
                src="carousel1.png"
                alt="hi logo"
                className="w-[350px] sm:w-[200px] md:w-[250px] lg:w-[300px] h-auto"
              />
            </div>
          </div>
        </div>

        {/* Paginator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 space-x-4 flex lg:hidden">
          <div className="w-10 h-2 bg-main rounded-full cursor-pointer"></div>
          <div className="w-2 h-2 bg-gray-500 rounded-full cursor-pointer"></div>
          <div className="w-2 h-2 bg-gray-500 rounded-full cursor-pointer"></div>
          <div className="w-2 h-2 bg-gray-500 rounded-full cursor-pointer"></div>
          <div className="w-2 h-2 bg-gray-500 rounded-full cursor-pointer"></div>
        </div>

        {/* Large screen paginator */}
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
