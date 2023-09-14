import React, { useEffect, useState } from "react";
import "./product.css";
import { notification } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { editProduct, getAllProduct } from "../services/productService";


export default function FormEdit({ handleCloseEdit, idEdit }) {
  const dispatch = useDispatch();
  const listProduct = useSelector((state) => state.product.data);
  console.log(listProduct);
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

  const getProductById = () => {
    const product = listProduct.find((pro) => pro.id === idEdit);
    setProduct(product);
  };
  useEffect(() => {
    getProductById();
  }, []);

  // Hàm thêm mới product
  const handleSubmit = (e) => {
    e.preventDefault();
    // Gọi API thêm mới
    dispatch(editProduct(product));
    dispatch(getAllProduct());
    handleCloseEdit();
  };

  return (
    <>
      <div className="product-container">
        <form className="form-container" onSubmit={handleSubmit}>
          <h2 className="mb-3">Cập nhật sản phẩm</h2>
          <div className="mb-3 text-start">
            <label htmlFor="productName" className="form-label">
              Tên sản phẩm
            </label>
            <input
              value={product.ProductName}
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
              value={product.Price}
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
              value={product.From}
              onChange={handleChange}
              type="text"
              className="form-control"
              id="from"
              name="From"
            />
          </div>
          <div className="d-flex gap-3 justify-content-center">
            <button type="submit" className="btn btn-primary">
              Cập nhật
            </button>
            <button
              onClick={handleCloseEdit}
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
