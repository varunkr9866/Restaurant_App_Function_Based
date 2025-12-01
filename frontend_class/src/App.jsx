import { Routes, Route } from "react-router-dom";
import "./App.css";

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
