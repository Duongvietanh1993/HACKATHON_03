import React, { useEffect, useState } from "react";
import Header from "../../../components/user/header/Header";
import axios from "axios";
import { Button, Pagination } from "antd";

export default function ListProduct() {
  const [categorier, setCategorier] = useState([]);
  const [categoryId, setCategoryId] = useState(0);
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(8);
  //lấy ra danh sách tất cả category
  useEffect(() => {
    axios
      .get(`http://localhost:3000/category`)
      .then((response) => {
        setCategorier(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  //lấy ra id của category
  const getCategoryId = (id) => {
    setCategoryId(id);
  };

  //gọi API products tất cả sản phẩm
  const loadDataProduct = () => {
    axios
      .get(`http://localhost:3000/products`)
      .then((response) => {
        if (categoryId === 0) {
          setProducts(response.data);
        } else {
          const listProduct = response.data.filter(
            (product) => product.category_id === categoryId
          );
          setProducts(listProduct);
        }
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    loadDataProduct();
  }, [categoryId]);

  //tính toán chỉ mục sản phẩmbắt đầu vafchir mục san phẩm kết thúc
  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = currentPage * pageSize;
  const displayedProduct = products.slice(startIndex, endIndex);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };
  return (
    <>
      <Header />
      <div className="p-4 flex gap-8">
        <div className="w-1/6 bodrder rounded shadow-md h-screen">
          <ul>
            <li
              style={
                categoryId === 0
                  ? { backgroundColor: "gray", color: "#fff" }
                  : {}
              }
              onClick={() => getCategoryId(0)}
              className="p-3 hover:bg-slate-100 cursor-pointer"
            >
              Xem tất cả sản phẩm
            </li>
            {categorier.map((cat) => (
              <li
                style={
                  categoryId === cat.category_id
                    ? { backgroundColor: "gray", color: "#fff" }
                    : {}
                }
                onClick={() => getCategoryId(cat.category_id)}
                key={cat.category_id}
                className="p-3 hover:bg-slate-100 cursor-pointer"
              >
                {cat.category_name}
              </li>
            ))}
          </ul>
        </div>
        <div className="w-5/6">
          <div className="flex flex-wrap gap-6 justify-center">
            {displayedProduct.map((product) => (
              <div key={product.id} className="w-1/5 border p-2 h-fit">
                <img src={product.image} alt="" />
                <h3 className="text-center py-3">{product.product_name}</h3>
                <div className="text-center py-3">
                  <span>{product.price}</span>
                  <div className="text-center py-3">
                    <Button type="primary " className="q-btn-primary">
                      Thêm vào giỏ hàng
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-4 ">
            <Pagination
              current={currentPage}
              pageSize={pageSize}
              total={products.length}
              onChange={handlePageChange}
            />
          </div>
        </div>
      </div>
    </>
  );
}
