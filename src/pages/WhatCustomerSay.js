import { ArrowLeftOutlined, ArrowRightOutlined } from '@ant-design/icons';

const WhatCustomerSay = () => {
    return (
        <div className="w-full relative grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 z-0">
            <div className="bg-main opacity-65 flex justify-center items-center lg:pl-[20%] flex-col h-full p-10 lg:p-0 z-10">
                <div className="items-center">
                    <div>
                        <p className="text-4xl text-white font-black tracking-wider">
                            Khách hàng nói gì về ABCSport
                        </p>
                    </div>
                    <div className="mt-10 lg:w-[70%]">
                        <p className="text-left text-lg text-white">
                            “Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur lobortis erat posuere, tincidunt sem at, sagittis dolor. Sed malesuada orci erat, ut interdum lorem rhoncus eu. Donec justo urna, mattis non maximus.” 
                        </p>
                    </div>
                    <div className="mt-5">
                        <p className="text-left text-2xl text-white leading-8">Nikky Kimso</p>
                    </div>
                    <div className="mt-2">
                        <p className="text-left text-lg text-white">Customer</p>
                    </div>
                </div>
                <div className="lg:flex hidden justify-end items-center space-x-4 mt-4">
                    <ArrowLeftOutlined className="text-white text-lg px-6" />
                    <ArrowRightOutlined className="text-white text-lg" />
                </div>
            </div>
            <div className="hidden lg:block">
                <img
                    className="w-full h-[582px] object-cover"
                    src="whatcustomersay.png"
                    alt="What Customer Say"
                />
            </div>

            {/* <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 z-20 overflow-hidden">
                <svg width="400" height="120" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M 50 120 A 120 120 0 0 1 350 150"
                        fill="none"
                        stroke="orange"
                        stroke-width="50"
                    />
                </svg>
            </div> */}
        </div>
    );
};

export default WhatCustomerSay;
