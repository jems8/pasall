import React, { useEffect } from 'react';
import CreateEditProductForm from './CreateEditProductForm';

const CreateProductPage = () => {

  return (
    <div>
      <h1>Create New Product</h1>
      <CreateEditProductForm type="CREATE" />
      
    </div>
  );
}

export default CreateProductPage;