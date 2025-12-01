import { Routes, Route } from "react-router-dom";
import "./App.css";
import Login from "./components/login/Login";


function App() {
  return (
    <>
      {/* <Navbar /> */}
      <Routes>
        <Route exact path="/login" element={<Login />} />
        {/* <Route exact path="/restaurant" element={<Restaurant />} /> */}
      </Routes>
    </>
  );
}

export default App;
