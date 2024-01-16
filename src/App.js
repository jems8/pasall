import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import HomePage from "./page/home/HomePage";
import ListProductsPage from './page/product/ListProductPage';
import EditProductPage from "./page/product/EditProductPage";
import ShowProductPage from "./page/product/ShowProductPage";
import NavBar from "./component/NavBar";
import CreateProductPage from "./page/product/CreateProductPage";
import LoginForm   from "./component/form/LoginForm";
import SignupForm from "./component/form/SignupForm";

function App() {
  return (
    <>
    <NavBar/>
    <Router>
      <Routes>
      <Route path="/" element={<HomePage/>} />
        <Route path="/ListProductPage" element={<ListProductsPage />} />
        <Route path="/product/edit/:id" element={<EditProductPage />} />
        <Route path="/product/show/:productId" element={<ShowProductPage />} />
        <Route path="/product/create" element={<CreateProductPage />} />
        <Route path="/LoginForm" element={<LoginForm />} />
        <Route path="/SignupForm" element={<SignupForm />} />
      </Routes>
    </Router>
    </>
  );
}

export default App;
