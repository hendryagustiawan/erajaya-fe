import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar({ handleSearch }) {
  const [searchKey, setSearchKey] = useState("");

  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-warning">
        <div className="container">
          <Link to={"/"} style={{ textDecoration: "none" }}>
            <a className="navbar-brand fw-bold text-white" href="#">
              SHOPEDY
            </a>
          </Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link to={"/"} style={{ textDecoration: "none" }}>
                  <a className="nav-link fw-semibold text-white" aria-current="page">
                    Product
                  </a>
                </Link>
              </li>
              <li className="nav-item ">
                <Link to={"/cart"} style={{ textDecoration: "none" }}>
                  <a className="nav-link fw-semibold text-white" href="#">
                    Cart
                  </a>
                </Link>
              </li>
            </ul>

            <form className="d-flex" role="search">
              <input value={searchKey} onChange={(e) => setSearchKey(e.target.value)} className="form-control me-2" type="search" placeholder="Search by Name" aria-label="Search" />
              <button onClick={() => handleSearch(searchKey)} type="button" className="btn btn-danger">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
}
