import { Button, Input } from "antd";
import React from "react";
import { signInWithPopup } from "firebase/auth";
import { Link, useNavigate } from "react-router-dom";
import { auth, provider } from "../../../firebase/firebaseConfig";

export default function Login() {
    const navigate = useNavigate()
  //đăng nhập với API có sẵn

  //đăng nhập với google
  const signInWithGoogle = () => {
    signInWithPopup(auth, provider)
      .then((response) => {
        console.log(response);
        const useLocation = {
          email: response.user.email,
          username: response.user.displayName,
          image: response.user.photoURL,
          userId: response.user.uid,
        };
        //lưu thông tin lên local
        localStorage.setItem("userLocal",JSON.stringify(useLocation));
        //chuyển hướng trang home
        navigate("/")
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <>
      <div className="flex items-center justify-center min-h-screen">
        <form className="p-6 border rounded w-96">
          <h3 className="text-center text-3xl mb-4">Đăng Nhập</h3>
          <div className="mb-4">
            <label htmlFor="email">Email</label>
            <Input
              type="email"
              id="email"
              className="mt-2"
              placeholder="Nhập địa chỉ email"
              status="error"
            />
            <div className="text-red-400">Email không được để trống.</div>
          </div>
          <div className="mb-4">
            <label htmlFor="password">Password</label>
            <Input
              type="password"
              id="password"
              className="mt-2"
              placeholder="Nhập mật khẩu"
              status="error"
            />
            <div className="text-red-400">Password không được để trống.</div>
          </div>
          <div className="mb-4">
            <Button type="primary" className="w-full q-btn-primary">
              Đăng Nhập
            </Button>
          </div>
          <div className="flex text-center justify-between gap-2">
            <Link to="/">Quay lại</Link>
            <Link to="/forget-password">Quên mật khẩu</Link>
          </div>
          <div className="text-center my-3">
            <span>Hoặc</span>
          </div>
          <div>
            <Button
              onClick={signInWithGoogle}
              className="w-full flex items-center justify-center gap-2"
            >
              <img
                width={20}
                height={20}
                src="https://banner2.cleanpng.com/20181108/bow/kisspng-google-logo-google-search-search-engine-optimizati-5be4b4e62f2cf8.5260885315417151741932.jpg"
              />
              Đăng nhập với tài khoản Google
            </Button>
          </div>
          <div className="text-center my-3">
            Bạn có tài khoản? <Link to="/register">Đăng ký</Link>
          </div>
        </form>
      </div>
    </>
  );
}
