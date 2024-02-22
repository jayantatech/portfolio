import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Home from "./pages/home/Home";
import { useDispatch } from "react-redux";
import { setHome } from "./store/createSlice";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import ProtfolioPage from "./pages/portfolioPage/ProtfolioPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/protfolio/:title" element={<ProtfolioPage />} />
          <Route path="*" element={<Home />} />
        </Routes>
        <Footer />
      </BrowserRouter>
      {/* <div style={{ height: "1200px" }}></div> */}
    </>
  );
}

export default App;
