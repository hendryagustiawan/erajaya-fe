import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import { useParams } from "react-router-dom";
import axios from "axios";
import { errorMsg, successMsg } from "../lib/toastNotification";

export default function Detail() {
  const { id } = useParams();
  const [detailProduct, setDetailProduct] = useState({});

  useEffect(() => {
    getProduct();
  }, []);

  const getProduct = () => {
    axios
      .get(`http://localhost:3000/product/${id}`)
      .then(({ data }) => {
        setDetailProduct(data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const formatMoney = (price) => {
    const formattedAmount = new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
    }).format(price);

    return formattedAmount;
  };

  const handleAddCart = (name, category, description, price, quantity, imageUrl) => {
    axios
      .post(`http://localhost:3000/cart`, {
        name,
        category,
        description,
        price,
        quantity,
        imageUrl,
      })
      .then(() => {
        successMsg();
      })
      .catch((error) => {
        errorMsg(error);
      });
  };

  return (
    <div>
      <Navbar />
      <div className="bg-white my-5">
        <h3 className="fw-bold mb-3 container">Detail Product</h3>

        <div className="bg-muted container-lg border border-1 rounded ">
          <div className="my-4 container">
            <p className="fw-light">{detailProduct.category}</p>
            <p className="fs-4 fw-bold">{detailProduct.name}</p>
            <div className="border-bottom border-primary my-2"></div>
            <div className="mt-5">
              <div className="row align-items-start">
                <div className="col-6">
                  <img src={detailProduct.imageUrl} className="card-img-top img-fluid" alt="product" style={{ width: "50%", height: "auto" }} />
                </div>
                <div className="col-6 d-flex align-self-center">
                  <div className="" style={{ width: "25rem" }}>
                    <div className="card-body">
                      <p className="fs-5">{detailProduct.description}</p>
                      <p className=" fw-semibold">Price : {formatMoney(detailProduct.price)}</p>
                      <p className=" fw-semibold">Total : {detailProduct.quantity}</p>
                    </div>
                    <div className="d-grid gap-5 mt-3">
                      <button
                        onClick={() => handleAddCart(detailProduct.name, detailProduct.category, detailProduct.description, detailProduct.price, detailProduct.quantity, detailProduct.imageUrl)}
                        type="button"
                        style={{ backgroundColor: "#9b59b6" }}
                        className="btn text-white btn-lg  gap-2 fw-semibold"
                      >
                        Add to Cart
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
