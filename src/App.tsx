import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Header } from "./components";
import Dashboard from "./screens/Home";
import {
  Home,
  About,
  Login,
  SignUp,
  Contact,
  Pricing,
  Post,
  AddJob,
} from "./Pages";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/AddJob" element={<AddJob />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signUp" element={<SignUp />} />
          <Route path="/post" element={<Post />} />
          <Route path="/*" element={<Home />} />
          <Route path="/home" element={<Dashboard />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};
export default App;
