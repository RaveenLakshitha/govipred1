import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Cart from "../Pages/Cart";
import Home from "../Pages/home";
import Login from "../Pages/Login";
import Signup from "../Pages/Signup";

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" />} />
      <Route path="/home" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/signup" element={<Signup />} />
    </Routes>
  );
};
