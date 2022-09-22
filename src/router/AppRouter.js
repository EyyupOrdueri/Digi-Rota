import { useContext } from "react"
import { BrowserRouter, Route, Routes, Navigate, Outlet } from "react-router-dom"
import Navbar from "../components/Navbar"
import Admin from "../pages/admin/Admin"
import Home from "../pages/home/Home"
import Invoice from "../pages/invoice/Invoice"
import Login from "../pages/login/Login"
import Profile from "../pages/profile/Profile"
import Register from "../pages/register/Register"
import { AuthContext } from "../context/AuthContext"
import Graphics from "../pages/graphics/Graphics"


const AppRouter = () => {

  const { currentUser } = useContext(AuthContext)

  function PrivateRouter () {
    return currentUser ? <Outlet /> : <Navigate to="/login" replace />
  }


  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/invoice" element={<Invoice />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/graphics" element={<Graphics />} />
      </Routes>
    </BrowserRouter>
  )
}

export default AppRouter