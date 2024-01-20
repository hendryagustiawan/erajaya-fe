import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import ListCart from "../components/ListCart";
import axios from "axios";
import { errorMsg, successMsg } from "../lib/toastNotification";

export default function Cart() {
  const [cart, setCart] = useState([]);

  const getCart = () => {
    axios
      .get("http://localhost:3000/cart")
      .then(({ data }) => {
        setCart(data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getCart();
  }, []);

  const handleEdit = (id, price, quantity, name, category, imageUrl, description) => {
    axios
      .put(`http://localhost:3000/cart/${id}`, {
        name,
        category,
        description,
        price,
        quantity,
        imageUrl,
      })
      .then((data) => {
        console.log(data);
        successMsg();
        getCart();
      })
      .catch((error) => {
        errorMsg(error);
      });
  };

  const handleDelete = (id) => {
    axios
      .delete(`http://localhost:3000/cart/${id}`)
      .then(() => {
        successMsg();
        getCart();
      })
      .catch((error) => {
        errorMsg(error);
      });
  };

  return (
    <div>
      <Navbar />
      <div className="bg-white my-5">
        <h3 className="fw-bold mb-3 container">Cart Product</h3>

        {cart.map((el) => {
          return <ListCart key={el.id} handleDelete={handleDelete} handleEdit={handleEdit} category={el.category} title={el.name} imgURL={el.imageUrl} price={el.price} id={el.id} description={el.description} quantity={el.quantity} />;
        })}
      </div>
    </div>
  );
}
