import {
  Register,
  Login,
  Home,
  NetworkCreatePage,
  NetworkDetailPage,
  ProfilePage,
  UsersPage,
  ProtectedRoute,
  PublicRoute,
  SharedLayout,
  Error,
} from "./pages";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route
          path="/register"
          element={
            <PublicRoute>
              <Register />
            </PublicRoute>
          }
        />
        <Route
          path="/login"
          element={
            <PublicRoute>
              <Login />
            </PublicRoute>
          }
        />
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
