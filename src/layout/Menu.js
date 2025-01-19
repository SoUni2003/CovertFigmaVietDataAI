import React from "react";
import { ShopOutlined, DownOutlined } from "@ant-design/icons";

const Menu = ({ isMobile }) => {
  return (
    <div
      className={`${
        isMobile
          ? "flex flex-col space-y-6 p-6 text-xl"
          : "flex items-center justify-between w-full"
      }`}
    >
      <ul
        className={`${
          isMobile
            ? "flex flex-col space-y-6"
            : "flex items-center space-x-8 text-sm sm:text-lg font-medium text-white"
        }`}
      >
        <li className="hover:text-main">
          <a href="#">Về chúng tôi</a>
        </li>
        <li className="hover:text-main flex items-center">
          <a href="#">Sản phẩm</a>
          <DownOutlined className="ml-2 h-4 w-4" />
        </li>
        <li className="hover:text-main">
          <a href="#">Khuyến mãi</a>
        </li>
        <li className="hover:text-main">
          <a href="#">Tin tức</a>
        </li>
        <li className="hover:text-main">
          <a href="#">Liên hệ</a>
        </li>
      </ul>

      <div className="flex items-center space-x-4">
        <ShopOutlined className="text-main text-lg hover:opacity-90 w-8 h-8" />
        <span className="text-lg font-medium text-main">
          120 Showroom toàn quốc
        </span>
      </div>
    </div>
  );
};

export default Menu;
