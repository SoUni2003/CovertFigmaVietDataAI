import React from 'react';

const Footer = () => {
    return (
        <div className="bg-black opacity-90 text-white py-24">
            <div className="container mx-auto px-4 md:px-8 flex flex-col lg:flex-row justify-between items-start space-y-8 lg:space-y-0">
                <div className="lg:w-1/3 flex flex-col space-y-4">
                    <img
                        src="logofooter.png"
                        alt="logo footer"
                        className="w-20 h-auto md:w-28 lg:w-32 object-contain"
                    />
                    <h1 className="text-lg">CÔNG TY TNHH ABC SPORT</h1>
                    <div className="opacity-75 space-y-2 text-sm md:text-base">
                        <p>Giấy CNĐKDN: 0316165103.</p>
                        <p>Ngày cấp: 26-02-2020.</p>
                        <p>Cấp bởi: Sở Kế hoạch và Đầu tư TP. HCM.</p>
                        <p>Địa chỉ ĐKD: Số 8, đường Phú Mỹ 2B, Khu Phú Mỹ 2-S10, KP6, P. Tân Phú, Quận 7.</p>
                        <p>Email: abcsportvietnam@gmail.com.</p>
                    </div>
                    <div className="flex space-x-4 items-center mt-4">
                    <div className="flex space-x-4 items-center mt-4">
                        <img
                            src="socia.png"
                            alt="social"
                            className="w-32 h-auto sm:w-40 md:w-48 lg:w-56 object-contain"
                        />
                        <img
                            src="footer1.png"
                            alt="footer vector"
                            className="w-48 h-auto sm:w-56 md:w-64 lg:w-72 object-contain"
                        />
                    </div>
                    </div>
                </div>

                <div className="lg:w-2/3 flex flex-wrap justify-between space-y-6 lg:space-y-0">
                    <div className="w-1/2 lg:w-1/3">
                        <h3 className="text-lg md:text-2xl font-normal mb-3">Về chúng tôi</h3>
                        <ul className="space-y-2 text-sm md:text-base opacity-70">
                            <li>Về chúng tôi.</li>
                            <li>Định hướng phát triển.</li>
                            <li>Chính sách bảo mật.</li>
                            <li>Cam kết về thông tin.</li>
                            <li>Trả góp qua thẻ tín dụng.</li>
                        </ul>
                    </div>

                    <div className="w-1/2 lg:w-1/3">
                        <h3 className="text-lg md:text-2xl font-normal mb-3">Hướng dẫn</h3>
                        <ul className="space-y-2 text-sm md:text-base opacity-70">
                            <li>Tiêu chí bán hàng.</li>
                            <li>Chính sách thanh toán.</li>
                            <li>Chính sách đổi trả.</li>
                            <li>Chính sách vận chuyển.</li>
                            <li>Chính sách bảo hành.</li>
                        </ul>
                    </div>

                    <div className="w-1/2 lg:w-1/3">
                        <h3 className="text-lg md:text-2xl font-normal mb-3">Xem thêm</h3>
                        <ul className="space-y-2 text-sm md:text-base opacity-70">
                            <li>Tin tức.</li>
                            <li>Thông tin tuyển dụng.</li>
                            <li>Video.</li>
                            <li>Hệ thống phân phối.</li>
                            <li>Liên hệ.</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="mt-8">
                <div className="border-t border-opacity-50 border-white mx-auto w-full md:w-[90%]"></div>
                <p className="text-center mt-4 opacity-75 text-sm md:text-base">
                    © 2025 Convert Figma by Tran Quoc Nghi.
                </p>
            </div>
        </div>
    );
};

export default Footer;
