import { SearchOutlined, UserOutlined, ShoppingCartOutlined } from "@ant-design/icons";
import Menu from "./Menu";

function Header() {
  return (
    <div>
      {/* Header Top */}
      <div className="h-[116px] bg-main">
        <div className="mx-[100px] flex items-center justify-between h-full">
          {/* Logo */}
          <img
            className="block w-[147px] h-[49px] object-cover"
            src="/logo.png"
            alt="Company Logo"
          />

          {/* Search Bar */}
          <div className="relative w-[454px]">
            <input
              className="w-full h-[26px] pl-[16px] pr-[40px] py-[26px] rounded-lg border border-white placeholder-opacity-40"
              placeholder="Từ khóa tìm kiếm..."
            />
            <SearchOutlined className="absolute top-1/2 right-4 transform -translate-y-1/2 w-5 h-5" />
          </div>

          {/* User and Cart Section */}
          <div className="flex items-center space-x-8">
            {/* User Icon */}
            <div className="flex items-center">
              <UserOutlined className="w-[35px] h-[36px] text-white" />
              <button className="text-white text-base leading-[22px]">
                Đăng ký/Đăng nhập
              </button>
            </div>
            {/* Shopping Cart Icon */}
            <ShoppingCartOutlined className="w-6 h-6 text-white rounded-full bg-white bg-opacity-20 p-[5px] hover:bg-opacity-40" />
          </div>
        </div>
      </div>

      {/* Header Bottom */}
      <div className="h-[56px] bg-black flex items-center">
        <div className="mx-[100px] text-white w-full">
          <Menu />
        </div>
      </div>
    </div>
  );
}

export default Header;
