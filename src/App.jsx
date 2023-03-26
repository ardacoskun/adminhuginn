import { Register, Login, Home, NetworkDetailPage } from "./pages";
import { Route, Routes } from "react-router-dom";
import { Navbar } from "./components";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Home />} />
        <Route path="/add" element={<NetworkDetailPage />} />
      </Routes>
    </>
  );
}

export default App;
