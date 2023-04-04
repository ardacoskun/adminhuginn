import { useState, useEffect } from "react";
import {
  Register,
  Login,
  Home,
  NetworkCreatePage,
  NetworkDetailPage,
  ProfilePage,
} from "./pages";
import { Route, Routes, useNavigate } from "react-router-dom";
import { Navbar } from "./components";
import { getCurrentUser } from "../helpers/authToken";

function App() {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const currentUser = getCurrentUser();
    if (!currentUser) {
      return navigate("/login");
    }
    setUser(getCurrentUser());
  }, []);

  return (
    <>
      {user && <Navbar user={user} />}
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<NetworkCreatePage />} />
        <Route path="/:networkId" element={<NetworkDetailPage />} />
        <Route path="/profile" element={<ProfilePage />} />
      </Routes>
    </>
  );
}

export default App;
