import React, { useState } from "react";
import "./product.css";
import { notification } from "antd";
import { useDispatch } from "react-redux";
import { createProduct } from "../services/productService";


export default function FormAdd({ handleCloseAdd }) {
  const [product, setProduct] = useState({
    ProductName: "",
    Price: 0,
    From: "",
  });

  // Hàm lấy giá trị từ các ô input
  const handleChange = (e) => {
    const { value, name } = e.target;
    setProduct({
      ...product,
      [name]: value,
    });
  };
const dispatch = useDispatch()
  // Hàm thêm mới product
  const handleSubmit = (e) => {
    e.preventDefault();
    // Gọi API thêm mới
    dispatch(createProduct(product))
    handleCloseAdd()
    
  };

  return (
    <>
      <div className="product-container">
        <form className="form-container" onSubmit={handleSubmit}>
          <h2 className="mb-3">Thêm mới sản phẩm</h2>
          <div className="mb-3 text-start">
            <label htmlFor="productName" className="form-label">
              Tên sản phẩm
            </label>
            <input
              onChange={handleChange}
              type="text"
              className="form-control"
              id="productName"
              name="ProductName"
            />
          </div>
          <div className="mb-3 text-start">
            <label htmlFor="price" className="form-label">
              Giá
            </label>
            <input
              onChange={handleChange}
              type="number"
              className="form-control"
              id="price"
              name="Price"
            />
          </div>
          <div className="mb-3 text-start">
            <label htmlFor="from" className="form-label">
              Xuất xứ
            </label>
            <input
              onChange={handleChange}
              type="text"
              className="form-control"
              id="from"
              name="From"
            />
          </div>
          <div className="d-flex gap-3 justify-content-center">
            <button type="submit" className="btn btn-primary">
              Thêm mới
            </button>
            <button
              onClick={handleCloseAdd}
              type="button"
              className="btn btn-danger"
            >
              Hủy
            </button>
          </div>
        </form>
      </div>
    </>
  );
}