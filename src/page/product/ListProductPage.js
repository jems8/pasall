import React, { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";

import { Link, useNavigate } from "react-router-dom";

import { listProducts } from "../../store/slices/productSlice";

const ListProductPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { products, status, error, listProductLoading } = useSelector(
    (state) => state.products
  );

  useEffect(() => {
    dispatch(listProducts());
  }, []);

  if (listProductLoading) {
    return <div>Loading...</div>;
  }

  if (status === "failed") {
    return <div>Error: {error}</div>;
  }

  return (
    <div style={{ padding: "1rem" }}>
      <h1 style={{fontSize: '5rem'}}>List Page</h1>

      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {products.map((indvProd) => {
          return (
            <div key={indvProd.id}>
              <Link to={`/product/${indvProd.id}`}>
                <img
                  src={indvProd.image}
                  alt={indvProd.title}
                  style={{ maxWidth: "200px" }}
                />
                <h2>{indvProd.title}</h2>
                <p>{indvProd.description}</p>
                <p>Category: {indvProd.category}</p>
                <p>Price: ${indvProd.price}</p>
                <p>
                  {/* Rating: {products.rating.rate} ({products.rating.count} reviews) */}
                </p>
              </Link>
              <div style={{ marginTop: "10px" }}>
                <button
                  onClick={() => navigate(`/product/edit/${indvProd.id}`)}
                  style={{
                    marginRight: "2rem",
                    marginTop: "1rem",
                    fontSize: "1rem",
                  }}
                >
                  Edit
                </button>
                <button
                  onClick={() => navigate(`/product/show/${indvProd.id}`)}
                  style={{ marginBottom: "2rem", fontSize: "1rem" }}
                >
                  Show
                </button>
              </div>
            </div>
          );
        })}
      </div>
      <Link to="/product/create">
        <button style={{ fontSize: "2rem" }}>Create</button>
      </Link>
    </div>
  );
};

export default ListProductPage;
