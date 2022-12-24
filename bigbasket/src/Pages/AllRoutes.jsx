import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import Footer from "../organisam/Footer";
import Navbar from "../organisam/Navbar";
import Babycare from "./Babycare";
import Bakery from "./Bakery";
import BeautyHygiene from "./BeautyHygiene";
import Beverages from "./Beverages";
import Cart from "./Cart";
import CleaningHousehold from "./Cleaning&Household";
import EggesMeat from "./Egges&Meat";
import Food from "./Food";
import Fruits from "./Fruits";
import Gourmet from "./Gourmet";
import Home from "./Home";
import Kitchen from "./Kitchen";
import LoginPage from "./Login";
import PrivateRoute from "./PrivateRoute";
import SignUpPage from "./SignUp";
import SingleProduct from "./SingleProduct";
import Snacks from "./Snacks";

const AllRoutes = () => {
  return (
    <>
      <div>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/fruits" element={<Fruits />}></Route>
          <Route path="/food&masala" element={<Food />}></Route>
          <Route path="/bakery" element={<Bakery />}></Route>
          <Route path="/beverages" element={<Beverages />}></Route>
          <Route path="/snacks" element={<Snacks />}></Route>
          <Route path="/beauty&hygiene" element={<BeautyHygiene />}></Route>
          <Route
            path="/cleaning&household"
            element={<CleaningHousehold />}
          ></Route>
          <Route path="/kitchen&pents&garden" element={<Kitchen />}></Route>
          <Route path="/egges&meat&fish" element={<EggesMeat />}></Route>
          <Route path="/gourmet&worldfood" element={<Gourmet />}></Route>
          <Route path="/babycare" element={<Babycare />}></Route>
          <Route
            path="/cart"
            element={
              <PrivateRoute>
                <Cart />
              </PrivateRoute>
            }
          ></Route>
          <Route path="/singleproduct" element={<SingleProduct />}></Route>
          <Route path="/login" element={<LoginPage />}></Route>
          <Route path="signup" element={<SignUpPage />}></Route>
        </Routes>
      </div>
    </>
  );
};

export default AllRoutes;
