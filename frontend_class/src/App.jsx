import { Routes, Route } from "react-router-dom";
import "./App.css";
import Login from "./components/login/Login.jsx";
import Restaurant from "./components/restaurant/Restaurant.jsx";
import NavigationBar from "./components/navigationBar/NavigationBar.jsx";


function App() {
  return (
    <>
     <NavigationBar />
      <Routes>
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/restaurant" element={<Restaurant />} />
      </Routes>
    </>
  );
}

export default App;
