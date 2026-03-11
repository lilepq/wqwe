import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Header";
import AdminPage from "./AdminPage";
import CatalogPage from "./CatalogPage";
import AddProductPage from "./AddProductPage";






function App() {
  return (
    <BrowserRouter>
    <Header/>
      <Routes>
        <Route path="/" element={<AdminPage />} />
        <Route path="/catalog" element={<CatalogPage />} />
        <Route path="/add-product" element={<AddProductPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;