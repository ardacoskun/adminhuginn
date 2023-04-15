import {
  Register,
  Login,
  Home,
  NetworkCreatePage,
  NetworkDetailPage,
  ProfilePage,
  UsersPage,
  ProtectedRoute,
  SharedLayout,
  Error,
} from "./pages";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <SharedLayout />
            </ProtectedRoute>
          }
        >
          <Route path="/" element={<Home />} />
          <Route path="create" element={<NetworkCreatePage />} />
          <Route path=":networkId" element={<NetworkDetailPage />} />
          <Route path="profile" element={<ProfilePage />} />
          <Route path="users" element={<UsersPage />} />
        </Route>
        <Route path="*" element={<Error />} />
      </Routes>
    </>
  );
}

export default App;
