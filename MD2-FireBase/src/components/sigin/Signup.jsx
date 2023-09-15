import React, { useState } from "react";
import { CloseOutlined } from "@ant-design/icons";
import { Input, Radio } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import { Button, message, Upload } from "antd";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { storage } from "../../firebase/configFireBase";

export default function Signup() {
  const [gender, setGender] = useState(1);
  const [imageUrl, setImageUrl] = useState(null);
  const [email,setEmail] = useState("");
  
  
  const imageListRef = ref(storage, `images/`);
  
  const handleCheck = (e) => {
    console.log("radio checked", e.target.value);
    setGender(e.target.value);
  };

  // props của Upload
  const props = {
    name: "file",
    headers: {
      authorization: "authorization-text",
    },
    onChange(info) {
      if (info.file.status !== "uploading") {
        console.log(info.file, info.fileList);
      }
      if (info.file.status === "done") {
        // lấy đường dẫn của ảnh sau khi hoàn tất quá trình tải
        const downloadURL = info.file.response.url;
        // lưu đường dẫn vào trong 1 sate
        setImageUrl(downloadURL);
        message.success("Tải lên hình ảnh thành công");
      } else if (info.file.status === "error") {
        message.error("Tải lên hình ảnh thất bại");
      }
    },
    customRequest: async ({file,onSuccess,onError}) => {
      try {
        // Tạo 1 tham chiếu đến kho ảnh trên firebase
        const imageRef = ref(imageListRef,file.name);
        // tải ảnh lên firebase
        await uploadBytes(imageRef, file);
        //  lấy url từ firebase về sau khi upload thành công
        const downloadURL = await getDownloadURL(imageRef);
        // gọi hàm onsuccess để thông báo là upload ảnh thành công
        onSuccess({ url: downloadURL });
      } catch (error) {
        onError(error)
      }
    }
  };
  return (
    <>
      <div className="fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center bg-rgba-black">
        <form className="bg-white p-6 rounded w-2/6 ">
          <div className="flex items-center justify-between py-1.5 mb-5">
            <h2 className="text-3xl">SignUp</h2>
            <CloseOutlined className="cursor-pointer hover:bg-slate-300 p-2 rounded-full" />
          </div>
          <div className="mb-3">
            <label htmlFor="name">Họ và tên</label>
            <Input placeholder="Nhập họ và tên" className="mt-2" id="name" />
          </div>
          <div className="mb-3">
            <label htmlFor="date">Ngày sinh</label>
            <Input
              type="date"
              placeholder="Nhập ngày sinh"
              className="mt-2"
              id="date"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="">Giới tính</label>
            <div className="mt-2 mb-3">
              <Radio.Group onChange={handleCheck} value={gender}>
                <Radio value={0}>Nam</Radio>
                <Radio value={1}>Nữ</Radio>
                <Radio value={2}>Khác</Radio>
              </Radio.Group>
            </div>
            <div className="mb-3">
              <label htmlFor="">Hình ảnh</label>
              <div className="text-center mt-2">

                <Upload {...props}>
                  <Button icon={<UploadOutlined />}>Click to Upload</Button>
                </Upload>
              </div>
            </div>
            <div className="mb-3">
              <label htmlFor="email">Email</label>
              <Input placeholder="Nhập Email" className="mt-2" id="email" />
            </div>
            <div className="mb-3">
              <label htmlFor="password">Mật Khẩu</label>
              <Input
                placeholder="Nhập Mật Khẩu"
                className="mt-2"
                id="password"
              />
            </div>
            <Button type="primary" className="w-full btn-primary mt-3">
              Đăng ký
            </Button>
          </div>
        </form>
      </div>
    </>
  );
}
