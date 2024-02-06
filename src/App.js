import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import HomePage from "./page/home/HomePage";
import ListProductsPage from "./page/product/ListProductPage";
import EditProductPage from "./page/product/EditProductPage";
import ShowProductPage from "./page/product/ShowProductPage";
import NavBar from "./component/navbar/NavBar";
import CreateProductPage from "./page/product/CreateProductPage";
import LoginForm from "./component/form/LoginForm";
import SignupForm from "./component/form/SignupForm";
import TermOfUse from "./component/form/TermOfUse";
import PrivatePolicy from "./component/form/PrivatePolicy";

import { Box } from "@mui/system";

const App=()=> {
  return (
    <Box style={{ width: "100vdw",overflowX:'hidden', backgroundColor:'#f5f5f5' }}>
      <NavBar />

      <Box sx={{ maxWidth: "1280px", marginX: "auto" }}>
        <Router>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/ListProductPage" element={<ListProductsPage />} />
            <Route path="/product/edit/:id" element={<EditProductPage />} />
            <Route
              path="/product/show/:productId"
              element={<ShowProductPage />}
            />
            <Route path="/product/create" element={<CreateProductPage />} />
            <Route path="/LoginForm" element={<LoginForm />} />
            <Route path="/SignupForm" element={<SignupForm />} />
            <Route path="/termsofuse" element={<TermOfUse />} />
            <Route path="/privacy-policy" element={<PrivatePolicy />} />
          </Routes>
        </Router>
      </Box>
    </Box>
  );
}

export default App;
