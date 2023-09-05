import React, { useEffect, useState } from "react";

const ProductLists = [
  {
    id: 1,
    name: "Iphone 14 ProMax",
    price: "$1000",
    quantity: 10,
    imageSrc:
      "https://shopdunk.com/images/thumbs/0008734_iphone-14-pro-128gb.png",
  },
  {
    id: 2,
    name: "Product 1",
    price: "$900",
    quantity: 10,
    imageSrc: "https://shopdunk.com/images/thumbs/0000595_ipad-air-5.png",
  },
  {
    id: 3,
    name: "Apple Watch SE Nhôm 2022",
    price: "$300",
    quantity: 10,
    imageSrc:
      "https://shopdunk.com/images/thumbs/0000896_apple-watch-se-2022-nhom-gps.png",
  },
  {
    id: 4,
    name: "Apple Watch Series 8 45mm",
    price: "$700",
    quantity: 10,
    imageSrc:
      "https://shopdunk.com/images/thumbs/0014071_apple-watch-series-8-45mm-thep.png",
  },
  {
    id: 5,
    name: "iPad Pro M1 11-inch Wi-Fi",
    price: "$600",
    quantity: 10,
    imageSrc:
      "https://shopdunk.com/images/thumbs/0012308_ipad-pro-m1-11-inch-wi-fi-256gb_550.webp",
  },
  {
    id: 6,
    name: "Iphone 14",
    price: "$800",
    quantity: 10,
    imageSrc: "https://shopdunk.com/images/thumbs/0009181_iphone-14-128gb.png",
  },
];
export default function ProductList() {
  const [cart, setCart] = useState(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart"));
    return storedCart || [];
  });

  const handleAddToCart = (product) => {
    const updatedCart = [...cart, product];
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  // Xóa dữ liệu trong localStorage khi component bị unmount
  useEffect(() => {
    return () => {
      localStorage.removeItem("cart");
    };
  }, []);

  return (
    <div className="d-flex gap-10 justify-center  flex-wrap m-16 ml-72 mr-72">
      {ProductLists.map((product) => (
        <div
          key={product.id}
          className="card text-center"
          style={{ width: "20rem" }}
        >
          <img src={product.imageSrc} className="card-img-top" alt="..." />
          <div className="card-body">
            <h3 className="card-title">{product.name}</h3>
            <p className="card-text">{product.price}</p>
            <a
              href="#"
              className="btn btn-primary w-100"
              onClick={() => handleAddToCart(product)}
            >
              Thêm Giỏ Hàng
            </a>
          </div>
        </div>
      ))}
    </div>
  );
}
