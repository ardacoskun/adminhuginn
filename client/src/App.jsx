import {
  Register,
  Login,
  Home,
  NetworkCreatePage,
  NetworkDetailPage,
  ProfilePage,
} from "./pages";
import { Route, Routes } from "react-router-dom";
import { Navbar } from "./components";
import { useAppContext } from "../context/appContext";

function App() {
  const { user } = useAppContext();

  return (
    <>
      {user && <Navbar />}
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
