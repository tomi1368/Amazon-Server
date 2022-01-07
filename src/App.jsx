import { Route, Routes, Navigate } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import HomeSlider from "./components/HomeSlider/HomeSlider";
import Background from "./components/HomeSlider/presentational/Background/Background";
import "./App.scss";
import Home from "./components/Home/Home";
import BestsProducts from "./components/BestsProducts/BestsProducts";
import Footer from "./components/Footer/Footer";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import SearchProducts from "./components/SearchProducts/SearchProducts";
import ProductSelected from "./components/ProductSelected/ProductSelected";
import Wallet from "./components/Wallet/Wallet";
import Orders from "./components/Orders/Orders";
import { useSelector } from "react-redux";

function App() {
  const user = useSelector((state) => state.user.currentUser);
  return (
    <>
      <Routes>
        <Route
          path="/"
          index
          element={
            <>
              <NavBar />
              <Background />
              <HomeSlider />
              <Home />
              <BestsProducts />
              <Footer />
            </>
          }
        ></Route>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route
          path="/product/:id"
          element={
            <>
              <NavBar />
              <SearchProducts />
            </>
          }
        >
          {" "}
          {/* Pongo el elemento de busqueda de producto*/}
        </Route>
        <Route
          path="/product/find/:id"
          element={
            <>
              <NavBar />
              <ProductSelected />
            </>
          }
        />
        <Route
          path={"/checkout"}
          element={
            <>
              <NavBar />
              <Wallet />
            </>
          }
        />
        <Route
          path="/orders"
          element={
            <>
              <NavBar />
              <Orders />
            </>
          }
        />
      </Routes>
    </>
  );
}

export default App;
