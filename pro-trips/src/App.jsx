import React from "react";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Contacts from "./components/Contacts";
import RegistrationForm from "./components/RegistrationForm";
import PageNotFound from "./components/PageNotFound";

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Contacts" element={<Contacts />} />
        <Route path="/RegistrationForm" element={<RegistrationForm />} />
        <Route path="*" element={<PageNotFound />} />
        <Route />
      </Routes>
    </div>
  );
};

export default App;
