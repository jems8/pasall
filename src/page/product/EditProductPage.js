import React, { useEffect, useState } from "react";
import { useParams ,useNavigate} from "react-router-dom";
import ProductForm from "./ProductForm";
import { useDispatch, useSelector } from "react-redux";
import { fetchProductById } from "../../store/slices/productSlice";

const EditProductPage = () => {
  const dispatch = useDispatch();

  const { productId } = useParams();
  const navigate = useNavigate();

  const { getProductByIdLoading } = useSelector((state) => state.products);
  
  useEffect(() => {
    dispatch(fetchProductById(productId));
  }, [productId]);

  const handleBackClick=()=>{
    navigate(-1);
  }

  if(getProductByIdLoading){
    return <h1>DataLoading</h1>
  }
  return (
    <div style={{padding: '5rem',fontSize: '2rem'}}>
      <h1>Edit Product</h1>
      <ProductForm type={"EDIT"}  />
      <button onClick={handleBackClick} style={{fontSize: '2rem', marginTop: '2rem'}}>Back</button>
    </div>
  );
};

export default EditProductPage;
