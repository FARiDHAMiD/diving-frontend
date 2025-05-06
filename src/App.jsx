import { Fragment, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./Context/AuthContext";
import PrivateRoute from "./utils/PrivateRoute";
import Home from "./Pages/Home";
import MainLayout from "./Components/MainLayout";
import About from "./Pages/About";
import Courses from "./Pages/Courses";
import Products from "./Pages/Products";
import Login from "./Pages/Login";
import SignUp from "./Pages/SignUp";
import Profile from "./Pages/Profile";
import Course from "./Pages/Course";
import Cart from "./Pages/Cart";
import Product from "./Pages/Product";

function App() {
  return (
    <>
      <BrowserRouter>
        <AuthProvider>
          <Fragment>
            <Routes>
              <Route path="/" element={<MainLayout />}>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/courses" element={<Courses />} />
                <Route path="/course/:id" element={<Course />} />

                <Route path="/products" element={<Products />} />
                <Route path="/product/:id" element={<Product />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<SignUp />} />
              <Route element={<PrivateRoute />}>
                <Route path="/profile" element={<Profile />} />
              </Route>
              </Route>
            </Routes>
          </Fragment>
        </AuthProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
