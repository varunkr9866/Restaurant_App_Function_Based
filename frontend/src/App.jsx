import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router-dom";
import Login from "./component/login/Login.jsx";
import Restaurant from "./component/restaurant/Restaurant.jsx";
import NavigationBar from "./component/navigationBar/NavigationBar.jsx";

function App() {
  return (
    <>
      <NavigationBar />
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route exact path="/restaurant" element={<Restaurant />} />
      </Routes>
    </>
  );
}

export default App;
