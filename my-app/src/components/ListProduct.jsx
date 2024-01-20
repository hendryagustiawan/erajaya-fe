import React from "react";
import { Link } from "react-router-dom";

export default function ListProduct({ price, title, id, imgURL }) {
  const formatMoney = (price) => {
    const formattedAmount = new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
    }).format(price);

    return formattedAmount;
  };
  return (
    <div>
      <div className="my-3" style={{ width: "18rem", height: "100%" }}>
        <Link to={`/detail/${id}`}>
          <img src={imgURL} className="card-img-top rounded img-fluid" alt="product" style={{ height: "300px", objectFit: "cover" }} />
        </Link>
        <div className="card-body mt-2" style={{ height: "100%" }}>
          <h6 className="card-title">{title}</h6>
          <p className="card-text mt-2 fs-6 fw-semibold fst-italic ">{formatMoney(price)}</p>
        </div>
      </div>
    </div>
  );
}
