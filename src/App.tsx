import { Container } from "@mui/material";
import { Header } from "./components/Header/Header";
import { Products } from "./components/Products/Products";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ProductPage } from "./components/ProductPage/ProductPage";

function App() {
  return (
    <Router>
      <Container>
        <Header />
        <Routes>
          <Route path="/" element={<Products />} />
          <Route 
            // key={product.id}
            path="/produtos/:productId" 
            element={<ProductPage />} 
          />
        </Routes>
        {/* <Products /> */}
      </Container>
    </Router>
  );
}

export default App;
