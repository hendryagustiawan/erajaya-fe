import React, { useState } from "react";

export default function ListCart({ title, category, imgURL, handleEdit, price, id, description, quantity, handleDelete }) {
  const [editName, setEditName] = useState("");
  const [editCategory, setEditCategory] = useState("");
  const [editDescription, setEditDescription] = useState("");
  const [editImage, setEditImage] = useState("");
  const [editPrice, setEditPrice] = useState("");
  const [editTotal, setEditTotal] = useState("");

  const formatMoney = (price) => {
    const formattedAmount = new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
    }).format(price);

    return formattedAmount;
  };

  const onEdit = (priceData, totalData, titleData, categoryData, imgURLData, descriptionData) => {
    setEditName(titleData);
    setEditCategory(categoryData);
    setEditImage(imgURLData);
    setEditDescription(descriptionData);
    setEditPrice(priceData);
    setEditTotal(totalData);
  };

  return (
    <div>
      <div className="bg-muted container-lg border border-1 rounded mt-3 ">
        <div className="my-4 container">
          <p className="fw-light">{category}</p>
          <p className="fs-4 fw-bold">{title}</p>
          <div className="border-bottom border-primary my-2"></div>
          <div className="mt-5">
            <div className="row align-items-start">
              <div className="col-6">
                <img src={imgURL} className="card-img-top img-fluid" alt="product" style={{ width: "50%", height: "auto" }} />
              </div>
              <div className="col-6 d-flex align-self-center">
                <div className="" style={{ width: "25rem" }}>
                  <div className="card-body">
                    <p className="fs-5">{description}</p>
                    <p className=" fw-semibold">Price : {formatMoney(price)}</p>
                    <p className=" fw-semibold">Total : {quantity}</p>
                  </div>

                  <div className="d-grid d-md-block ">
                    <button onClick={() => onEdit(price, quantity, title, category, imgURL, description)} type="button" className="btn btn-success text-white  px-5  fw-semibold mx-3" data-bs-toggle="modal" data-bs-target="#exampleModal">
                      Edit
                    </button>
                    {/* <!-- Modal --> */}
                    <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                      <div className="modal-dialog">
                        <div className="modal-content">
                          <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">
                              Edit Cart
                            </h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                          </div>
                          <div className="modal-body">
                            <div className="mb-3">
                              <label for="exampleInputEmail1" className="form-label">
                                Name
                              </label>
                              <input value={editName} onChange={(e) => setEditName(e.target.value)} type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                            </div>
                            <div className="mb-3">
                              <label for="exampleInputEmail1" className="form-label">
                                Category
                              </label>
                              <input value={editCategory} onChange={(e) => setEditCategory(e.target.value)} type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                            </div>
                            <div className="mb-3">
                              <label for="exampleInputEmail1" className="form-label">
                                Description
                              </label>
                              <input value={editDescription} onChange={(e) => setEditDescription(e.target.value)} type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                            </div>
                            <div className="mb-3">
                              <label for="exampleInputEmail1" className="form-label">
                                Image
                              </label>
                              <input value={editImage} onChange={(e) => setEditImage(e.target.value)} type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                            </div>
                            <div className="mb-3">
                              <label for="exampleInputEmail1" className="form-label">
                                Price
                              </label>
                              <input value={editPrice} onChange={(e) => setEditPrice(e.target.value)} type="number" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                            </div>
                            <div className="mb-3">
                              <label for="exampleInputPassword1" className="form-label">
                                Total
                              </label>
                              <input value={editTotal} onChange={(e) => setEditTotal(e.target.value)} type="number" className="form-control" id="exampleInputPassword1" />
                            </div>
                          </div>
                          <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">
                              Close
                            </button>
                            <button type="button" data-bs-dismiss="modal" onClick={() => handleEdit(id, editPrice, editTotal, editName, editCategory, editImage, editDescription)} className="btn btn-primary">
                              Save changes
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                    <button onClick={() => handleDelete(id)} type="button" className="btn btn-danger text-white  px-5  fw-semibold">
                      Delete
                    </button>
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
