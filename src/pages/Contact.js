import { ArrowRightOutlined } from "@ant-design/icons";

const Contact = () => {
    return (
        <div className="bg-main flex items-center py-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 items-center max-w-7xl mx-auto px-4 gap-6">
                <div className="hidden lg:block">
                    <img
                        src="contact.png"
                        alt="contact"
                        className="h-full w-full object-cover"
                    />
                </div>

                <div className="flex flex-col items-center lg:items-start justify-center space-y-6 text-center lg:text-left">
                    <div className="flex flex-col items-center lg:flex-row lg:items-center space-x-0 lg:space-x-4">
                        <img
                            src="iconcontact.png"
                            alt="icon contact"
                            className="h-20 w-20 lg:h-28 lg:w-28 object-cover mb-4 lg:mb-0"
                        />
                        <p className="text-2xl sm:text-3xl lg:text-4xl text-white font-extrabold leading-snug">
                            ABCSport luôn sẵn sàng <br /> đồng hành cùng bạn
                        </p>
                    </div>

                    <div className="flex flex-col sm:flex-row sm:space-x-4 space-y-4 sm:space-y-0 w-full lg:w-auto">
                    <button className="flex justify-start items-center px-6 sm:px-12 py-3 border-2 border-opacity-60 border-white text-white rounded-3xl hover:bg-white hover:text-main transition-all w-full sm:w-auto">
                            <p className="m-0 text-left">Họ Và Tên</p>
                        </button>

                        <button className="flex items-center justify-between border-opacity-60 space-x-6 px-1 border-2 border-white text-white rounded-3xl hover:bg-white hover:text-main transition-all w-full sm:w-auto">
                            <div className="mx-4">Số Điện Thoại</div>
                            <span className="border border-1-solid bg-white border-white text-main px-4 py-2 rounded-full font-bold">
                                Tư Vấn
                                <ArrowRightOutlined className="text-lg ml-2" />
                            </span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
