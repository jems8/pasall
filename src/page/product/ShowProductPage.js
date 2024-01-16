import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams,useNavigate} from "react-router-dom";
import { fetchProductById } from "../../store/slices/productSlice";
import EditProductPage from "./EditProductPage";

const ShowProductPage = () => {
  const { productId } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { selectedProduct,status, error } = useSelector((state) => state.products);

  useEffect(() => {
      dispatch(fetchProductById(productId));
  }, [dispatch,productId]);

  const handleBackClick=()=>{
   navigate(-1);
  }

  if (status === "loading") {
    return <div>Loading...</div>;
  }

  if (status === "failed") {
    return <div>Error: {error}</div>;
  }
 
  // const handleShowClick=(id)=>{
  //   Navigate(`/show/${id}`)
  // }
  // [2,3,4].map((indv)=><button onClick={()=>handleShowClick(indv.id)}>Abc</button>)

  return (
    <div style={{marginLeft: '40rem'}}>
      <h1 style={{fontSize: '3rem'}}>Product Page</h1>

      {selectedProduct && (
        <div>
        <img
          src={selectedProduct.image}
          alt={selectedProduct.title}
          style={{ maxWidth: "350px" }}
        />
        <h2>{selectedProduct.title}</h2>
        <p>{selectedProduct.description}</p>
        <p>Category: {selectedProduct.category}</p>
        <p>Price: ${selectedProduct.price}</p>
      </div>
      )}
      
      <button onClick={handleBackClick} style={{fontSize: '2rem',marginTop: '0rem'}}>Back</button>
    </div>
  );
};

export default ShowProductPage;
