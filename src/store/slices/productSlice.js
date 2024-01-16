import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const listProducts = createAsyncThunk("products/fetchProducts", async () => {
  const response = await fetch("https://fakestoreapi.com/products");
  const data = await response.json();
  return data;
});

export const fetchProductById = createAsyncThunk("products/fetchProductById", async (productId) => {
    const response = await fetch(`https://fakestoreapi.com/products/${productId}`);
    const data = await response.json();
    return data;
  });

  export const createProduct=  createAsyncThunk("products/saveProduct", async (payload) => {
    const response = await fetch(`https://fakestoreapi.com/products`,{
      method:"POST",
      body:JSON.stringify(
         payload
      )
  })
      .then(res=>res.json())
      const respToSend={...response,...payload}
    return respToSend;
  });

  export const updateProduct=  createAsyncThunk("products/updateProduct", async (payload) => {
    const response = await fetch('https://fakestoreapi.com/products/7',{
      method:"PUT",
      body:JSON.stringify(
         payload
      )
  })
  .then(res=>res.json())
  return response;
  });

//CRUD=> create,read,update,delete
//create=>add, POST
//read=>list,GET
//update=>edit, PUT
//delete=>delete,DELETE


//list=>array name: productList=[], products
//getById=>getProductById
//createProduct
//deleteById=> deleteProductById


//initial states
// products=[],
//listProductsLoading=false

//getProductByIdLoading=false
//productDetails={}
//createProductLoading=false
//deleteProductByIdLoading=false

const productSlice = createSlice({
    
  name: "products",
  initialState: {
    products: [],
    selectedProduct: {},
    listProductLoading:false,
    getProductByIdLoading:false,
    status: "idle",
    error: null,
  },
  reducers: {},
  
  extraReducers: (builder) => {
    builder
      .addCase(listProducts.pending, (state) => {
        state.listProductLoading = true;
      })
      .addCase(listProducts.fulfilled, (state, action) => {
        state.products = action.payload;
        state.listProductLoading = false;
        
      })
      .addCase(listProducts.rejected, (state, action) => {
        state.listProductLoading = false;       
        state.error = action.error.message;
      })
      .addCase(fetchProductById.pending, (state) => {
        state.getProductByIdLoading = true;
      })
      .addCase(fetchProductById.fulfilled, (state, action) => {
        state.selectedProduct = action.payload;
        state.getProductByIdLoading =false
        console.log('Updated selectedProduct:', state.selectedProduct);

      })
      .addCase(fetchProductById.rejected, (state, action) => {
        state.getProductByIdLoading =false
      })
      .addCase(createProduct.pending, (state) => {
        state.status = "loading";
      })
      .addCase(createProduct.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.products =[ action.payload,...state.products];
      })
      .addCase(createProduct.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default productSlice.reducer;