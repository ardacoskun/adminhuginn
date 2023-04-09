import {
  Register,
  Login,
  Home,
  NetworkCreatePage,
  NetworkDetailPage,
  ProfilePage,
  UsersPage,
} from "./pages";
import { Route, Routes } from "react-router-dom";
import { Navbar } from "./components";
import { useAppContext } from "../context/appContext";

function App() {
  const { user } = useAppContext();

  return (
    <>
      {<Navbar />}
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<NetworkCreatePage />} />
        <Route path="/:networkId" element={<NetworkDetailPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/users" element={<UsersPage />} />
      </Routes>
    </>
  );
}

export default App;
