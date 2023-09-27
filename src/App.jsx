import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ProductDetail from "./pages/ProductDetail";
import User from "./pages/User";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/detail/:id" element={<ProductDetail />} />
          <Route path="/user/" element={<User />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
