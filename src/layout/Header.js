import React, { useState } from "react";
import { SearchOutlined, UserOutlined, ShoppingCartOutlined, MenuOutlined, CloseOutlined } from "@ant-design/icons";
import Menu from "./Menu";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div>
      {/* Header Top */}
      <div className="h-[116px] bg-main">
        <div className="mx-4 sm:mx-[10%] flex items-center justify-between h-full">
          {/* Logo */}
          <img
            className="block w-[120px] sm:w-[147px] h-auto object-cover"
            src="/logo.png"
            alt="Company Logo"
          />

          {/* Search Bar */}
          <div className="relative w-full sm:w-[454px] hidden sm:block">
            <input
              className="w-full h-[26px] pl-[16px] pr-[40px] py-[26px] rounded-lg border border-white placeholder-opacity-40"
              placeholder="Từ khóa tìm kiếm..."
            />
            <SearchOutlined className="absolute top-1/2 right-4 transform -translate-y-1/2 w-5 h-5" />
          </div>

          {/* User and Cart Section */}
          <div className="flex items-center space-x-4">
            <UserOutlined className="w-[30px] h-[30px] sm:w-[35px] sm:h-[36px] text-white" />
            <ShoppingCartOutlined className="w-6 h-6 sm:w-6 sm:h-6 text-white rounded-full bg-white bg-opacity-20 p-[5px] hover:bg-opacity-40" />
          </div>

          {/* Mobile Menu Icon */}
          <div className="sm:hidden">
            {isMenuOpen ? (
              <CloseOutlined
                className="text-white text-2xl cursor-pointer"
                onClick={() => setIsMenuOpen(false)}
              />
            ) : (
              <MenuOutlined
                className="text-white text-2xl cursor-pointer"
                onClick={() => setIsMenuOpen(true)}
              />
            )}
          </div>
        </div>
      </div>

      {/* Header Bottom */}
      <div className="h-[56px] bg-black flex items-center">
        <div className="mx-4 sm:mx-[10%] text-white w-full">
          {/* Desktop Menu */}
          <div className="hidden sm:block">
            <Menu isMobile={false} />
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="absolute top-[172px] left-0 w-full bg-black z-50">
              <Menu isMobile={true} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Header;
