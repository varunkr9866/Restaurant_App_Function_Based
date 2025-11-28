import "./App.css";
import {Routes, Route } from "react-router-dom";
import Login from "./components/login/Login.jsx";
import Restaurant from "./components/restaurant/Restaurant.jsx";
import Navbar from "./components/navbar/Navbar.jsx";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/restaurant" element={<Restaurant />} />
      </Routes>
    </>
  );
}

export default App;
