import { useContext } from "react";
import {
  BrowserRouter,
  Route,
  Routes,
  Navigate,
  Outlet,
} from "react-router-dom";
import Navbar from "../components/Navbar";
import Admin from "../pages/admin/Admin";
import Home from "../pages/home/Home";
import Invoice from "../pages/invoice/Invoice";
import Login from "../pages/login/Login";
import Profile from "../pages/profile/Profile";
import Register from "../pages/register/Register";
import { AuthContext } from "../context/AuthContext";
import Graphics from "../pages/graphics/Graphics";
import CompanyOwner from "../pages/companyOwner/CompanyOwner";
import Giris from "../pages/giriş/Giris";

const AppRouter = () => {
  const { currentUser } = useContext(AuthContext);

  function PrivateRouter() {
    return currentUser ? <Outlet /> : <Navigate to="/login" replace />;
  }

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        {/* <Route path="/" element={<Home />} /> */}
        <Route path="/" element={<Giris />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route
          path="/home"
          element={!currentUser ? <Navigate to="/login" replace /> : <Home />}
        />
        <Route
          path="/invoice"
          element={
            !currentUser ? <Navigate to="/login" replace /> : <Invoice />
          }
        />
        <Route
          path="/profile"
          element={
            !currentUser ? <Navigate to="/login" replace /> : <Profile />
          }
        />
        <Route
          path="/admin"
          element={
            currentUser.email === "eyyupordueri@gmail.com" ? (
              <Admin />
            ) : (
              <Navigate to="/login" replace />
            )
          }
        />
        <Route
          path="/graphics"
          element={
            !currentUser ? <Navigate to="/login" replace /> : <Graphics />
          }
        />
        <Route
          path="/askdaslkdjaslkdjasdlkjasdlkjasdlakj"
          element={<PrivateRouter />}
        />
        <Route
          path="/companyowner"
          element={
            !currentUser ? (
              <Navigate to="/companyowner" replace />
            ) : (
              <CompanyOwner />
            )
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
