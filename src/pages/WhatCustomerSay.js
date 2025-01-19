import { ArrowLeftOutlined  , ArrowRightOutlined  } from '@ant-design/icons';

const WhatCustomerSay = () => {
    return (
        <div className="w-full grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-2">
            <div className="bg-main opacity-65 flex justify-center items-center pl-[20%] flex-col h-full">
                <div className="items-center">      
                    <div>
                        <p className="text-4xl text-white font-black tracking-wider">Khách hàng nói gì <br /> về ABCSport</p>
                    </div>
                    <div className="mt-10 w-[70%]">
                        <p className="text-left text-lg text-white">“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur lobortis erat posuere, tincidunt sem at, sagittis dolor. Sed malesuada orci erat, ut interdum lorem rhoncus eu. Donec justo urna, mattis non maximus.”</p>
                    </div>
                    <div className="mt-5">
                        <p className="text-left text-2xl text-white leading-8">Nikky Kimso</p>
                    </div>
                    <div className="mt-2">
                        <p className="text-left text-lg text-white">Customer</p>
                    </div>
                </div>
                {/* Icons container at the bottom */}
                <div className="flex justify-center items-center space-x-4">
                    <ArrowLeftOutlined   className="text-white text-lg" />
                    <ArrowRightOutlined  className="text-white text-lg" />
                </div>
            </div>
            <div>
                <img
                    className="w-full h-[582px] object-cover"
                    src="whatcustomersay.png"
                    alt="What Customer Say"
                />
            </div>
        </div>
    );
}

export default WhatCustomerSay;
