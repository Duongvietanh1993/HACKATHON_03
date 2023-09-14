import { createAsyncThunk } from "@reduxjs/toolkit";
import instance from "../api/axios";

// gọi API lấy thông tin tất cả product
export const getAllProduct = createAsyncThunk(
    "product/getAllProduct",
    async () => {
      try {
        const response = await instance.get("products");
        return response.data;
      } catch (error) {
        console.log(error);
      }
    }
  );
  
  //gọi API xóa thông tin một product theo id
  export const deleteById = createAsyncThunk(
    "product/deleteById",
    async (productId) => {
      try {
        await instance.delete(`products/${productId}`);
        return productId;
      } catch (error) {
        console.log(error);
      }
    }
  );
  
  //API thêm mới sản phẩm
  export const createProduct = createAsyncThunk(
    "product/createProduct",
    async (product) => {
      try {
        const response = await instance.post(
          "products",
          product
        );
        return response.data;
      } catch (error) {
        console.log(error);
      }
    }
  );
  
  //edit sản phẩm
  export const editProduct = createAsyncThunk(
    "product/editProduct",
    async (product) => {
      try {
        const response = await instance.put(
          `products/${product.id}`,
          product
        );
        return response.data;
      } catch (error) {
        console.log(error);
      }
    }
  );