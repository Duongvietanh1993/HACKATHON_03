import Link from "antd/es/typography/Link";
import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import {
  KeyOutlined,
  LoginOutlined,
  ShoppingCartOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Button, Dropdown, Modal } from "antd";

export default function Header() {
  const navigate = useNavigate();
  //lấy thông tin user đã đăng nhập
  const userLogin = JSON.parse(localStorage.getItem("userLocal"));

  const handleLogout = () => {
    localStorage.removeItem("userLocal");
    navigate("/");
  };
  // hàm xử lý đăng xuất
  const handleConfirmLogout = () => {
    Modal.confirm({
      title: "Xác nhận",
      content: "Bạn có chắc chắn muốn đăng xuất",
      onOk() {
        handleLogout();
      },
      cancelText: "Hủy bỏ",
      okText: "Đăng xuất",
    });
  };

  const items = [
    {
      key: "1",
      label: (
        <Link to="/profile" target="_blank">
          <UserOutlined />
          Thông tin cá nhân
        </Link>
      ),
    },
    {
      key: "2",
      label: (
        <NavLink to="/change-password" target="_blank">
          <KeyOutlined />
          Đổi mật khẩu
        </NavLink>
      ),
    },
    {
      key: "3",
      label: (
        <a target="_blank" onClick={handleConfirmLogout}>
          <LoginOutlined /> Đăng xuất
        </a>
      ),
    },
  ];
  return (
    <>
      <div className="w-full bg-orange-600 h-14 text-white flex items-center justify-between px-5">
        <div className="flex gap-4 items-center">
          <NavLink to={"/"}>LOGO</NavLink>
          <NavLink to={"/"}>Trang chủ</NavLink>
          <NavLink to={"/list-product"}>Sản phẩm</NavLink>
          <NavLink to={"/cart"}>
            <ShoppingCartOutlined className={"text-2xl relative"} />
            <span className="bg-white px-2 rounded-xl text-black absolute">
              2
            </span>
          </NavLink>
        </div>
        <div className="flex gap-4 items-center">
          <NavLink to="/about">Giới thiệu</NavLink>
          <NavLink to="/contact">Liên hệ</NavLink>

          {userLogin !== null ? (
            <Dropdown
              menu={{
                items,
              }}
              placement="bottom"
              arrow
            >
              <Button className="border-none shadow-none text-white">
                <div className="flex items-center gap-2">
                  <img
                    src={userLogin.image}
                    alt=""
                    height={27}
                    width={27}
                    className="rounded-full"
                  />
                  {userLogin.username}
                </div>
              </Button>
            </Dropdown>
          ) : (
            <>
              <NavLink to="/register">Đăng ký</NavLink>
              <NavLink to="/login">Đăng nhập</NavLink>
            </>
          )}
        </div>
      </div>
    </>
  );
}
