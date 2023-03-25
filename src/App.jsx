import { Register, Login, Home } from "./pages";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route path="/" element={<Home />} />
    </Routes>
  );
}

export default App;
