import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import axios from "axios";
import ListProduct from "../components/ListProduct";

export default function Home() {
  const [product, setProduct] = useState([]);
  const [searchName, setSearchName] = useState("");

  useEffect(() => {
    axios
      .get(`http://localhost:3000/product?name=${searchName}`)
      .then(({ data }) => {
        setProduct(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [searchName]);

  const handleSearch = (searchData) => {
    setSearchName(searchData);
  };

  if (product.length === 0 || product === null) {
    return (
      <>
        <Navbar handleSearch={handleSearch} />
        <div className="container mt-5">
          <h3 className="fw-bold mb-3">Customers also purchased</h3>
          <div className="border border-1 bg-light text-dark rounded d-flex justify-content-center p-5">
            <h3 className="fw-bold mx-auto text-dark">Data not Found</h3>
          </div>
        </div>
      </>
    );
  }

  return (
    <div>
      <Navbar handleSearch={handleSearch} />
      <div className="container mt-5">
        <h3 className="fw-bold mb-3">Customers also purchased</h3>
        <div className="border border-1 bg-light text-dark rounded">
          <div className="d-flex flex-wrap justify-content-around">
            {product.map((el) => {
              return <ListProduct key={el.id} title={el.name} imgURL={el.imageUrl} price={el.price} id={el.id} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
