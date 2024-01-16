import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
  createProduct,
  listProducts,
  updateProduct,
} from "../../store/slices/productSlice"; 

const CreateEditProductForm = (props) => {
  const { type } = props;
  const dispatch = useDispatch();
  const { productId } = useParams();

  const [formData, setFormData] = useState({
    title: "abc",
    description: "xyz",
    category: "jk",
    price: "123",
    image: "image",
  });

  const { listProductLoading, status, products, selectedProduct } = useSelector(
    (state) => state.products
  );

  useEffect(() => {
    if (type === "EDIT") {
      setFormData(selectedProduct);
    }
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (type === "EDIT") {
      dispatch(updateProduct(formData));
    } else {
      dispatch(createProduct(formData));
    }
  };

  return (
    <div>
      {listProductLoading && <p>Loading Process...</p>}

      <form onSubmit={handleSubmit}>
        <label>
          Title:
          <input
          style={{fontSize: '5rem'}}
            type="text"
            name="title"
            value={formData.title}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <label>
          Description:
          <input
            name="description"
            value={formData.description}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <label>
          Category:
          <input
            type="text"
            name="category"
            value={formData.category}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <label>
          Price:
          <input
            name="price"
            value={formData.price}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <label>
          Image URL:
          <input
            type="text"
            name="image"
            value={formData.image}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <button type="submit" disabled={status === "loading"}>
          {status === "loading" ? "Saving..." : " Save Product"}
        </button>
      </form>
    </div>
  );
};

export default CreateEditProductForm;
