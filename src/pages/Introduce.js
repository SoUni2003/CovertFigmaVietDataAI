import React from 'react';
import { DownOutlined, ShopOutlined  } from '@ant-design/icons';

const Introduce = () => {
  return (
    <div className="flex justify-between items-center w-full">
      <div>
        <ul className="flex space-x-8 text-[20px] font-medium opacity-100">
            <li className=" hover:text-main">
            <a href="#">Về chúng tôi</a>
            </li>
            <li className=" hover:text-main">
            <a href="#">Sản Phẩm</a>
            <DownOutlined className="ml-2 h-6 w-6" />
            </li>
            <li className=" hover:text-main">
            <a href="#">Khuyến Mãi</a>
            </li>
            <li className=" hover:text-main">
            <a href="#">Tin Tức</a>
            </li>
            <li className=" hover:text-main">
            <a href="#">Liên Hệ</a>
            </li>
        </ul>
      </div>
      <div className="flex items-center space-x-4">
        <ShopOutlined  className="text-main text-lg hover:opacity-90 w-8 h-8" />
        <span className="text-lg font-medium text-main text-[20px]">120 Showroom toàn quốc</span>
      </div>
    </div>
  );
};

export default Introduce;
