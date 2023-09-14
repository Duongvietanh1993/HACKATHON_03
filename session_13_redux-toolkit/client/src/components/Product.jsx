import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import FormAdd from "./FormAdd";
import FormEdit from "./FormEdit";
import confirm from "antd/es/modal/confirm";
import { deleteById, getAllProduct } from "../services/productService";
import Modal from "./base/modal/modal";

export default function Product() {
  const [showAdd, setShowAdd] = useState(false);
  const [showEdit, setShowEdit] = useState(false);
  const [idEdit, setIdEdit] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [idDelete, setIdDelete] = useState(null);

  const dispatch = useDispatch();
  const listProduct = useSelector((state) => state.product.data);
  console.log(listProduct);

  useEffect(() => {
    dispatch(getAllProduct());
  }, []);

  //hàm xóa thông tin một product theo id
  // const handleDelete = (id) => {
  //   // confirm({
  //   //   title: "Xác nhận xóa",
  //   //   content: "Bạn có chắc chắn muốn xóa sản phẩm này?",
  //   //   onOk() {
  //   //     dispatch(deleteById(id));
  //   //   },
  //   //   onCancel() {
  //   //     // Hành động khi người dùng hủy bỏ xóa
  //   //   },
  //   // });
  //   setShowModal(true)
  // };

  //hàm đóng, mở modal
  const handleShow = (id) => {
    setShowModal(true);
    setIdDelete(id);
  };
  const handleCancel = () => {
    setShowModal(false);
  };
  const handleDelete = () => {
    dispatch(deleteById(idDelete));
    setShowModal(false);
  };

  const handleShowAdd = () => {
    setShowAdd(true);
  };
  const handleCloseAdd = () => {
    setShowAdd(false);
  };

  const handleShowEdit = (id) => {
    setShowEdit(true);
    setIdEdit(id);
  };
  const handleCloseEdit = (id) => {
    setShowEdit(false);
  };

  return (
    <>
      {showAdd && <FormAdd handleCloseAdd={handleCloseAdd} />}

      {showEdit && (
        <FormEdit handleCloseEdit={handleCloseEdit} idEdit={idEdit} />
      )}

      {showModal && (
        <Modal
          title={"Bạn có chắc chắn muốn xóa"}
          onOk={handleDelete}
          onCancel={handleCancel}
        />
      )}
      <h1>List Product</h1>
      <button onClick={handleShowAdd} className="btn btn-primary m-3">
        Thêm mới
      </button>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>#</th>
            <th>Product name</th>
            <th>Price</th>
            <th>From</th>
            <th colSpan={2}>Option</th>
          </tr>
        </thead>
        <tbody>
          {listProduct.map((product, index) => (
            <tr key={product.id}>
              <td>{index + 1}</td>
              <td>{product.ProductName}</td>
              <td>{product.Price}</td>
              <td>{product.from}</td>
              <td>
                <button
                  onClick={() => handleShowEdit(product.id)}
                  className="btn btn-primary"
                >
                  sửa
                </button>
              </td>
              <td>
                <button
                  className="btn btn-danger"
                  onClick={() => handleShow(product.id)}
                >
                  xóa
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
