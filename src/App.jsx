import { Register, Login, Home, NetworkDetailPage, ProfilePage } from "./pages";
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
        <Route path="/profile" element={<ProfilePage />} />
      </Routes>
    </>
  );
}

export default App;
