import React from "react";
import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { logOut } from "../auth/firebase";
import { AuthContext } from "../context/AuthContext";

const Navbar = () => {
  const navigate = useNavigate();
  const { currentUser } = useContext(AuthContext);

  const handleInvoice = () => {
    alert("You should first login!");
    navigate("/login");
  };

  return (
    <div>
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <Link to={"/"} className="navbar-brand text-white">
            <h4>Digi Rota</h4>
          </Link>
          <div className="d-flex text-white align-items-center">
            {currentUser ? (
              currentUser.email === "eyyupordueri@gmail.com" ? (
                <>
                  <button className="btn" onClick={() => navigate("/invoice")}>
                    <h4>Invoice</h4>
                  </button>
                  <button className="btn" onClick={() => navigate("/graphics")}>
                    <h4>Graphics</h4>
                  </button>
                  <button className="btn" onClick={() => navigate("/profile")}>
                    <h4>Profile</h4>
                  </button>
                  <button className="btn" onClick={() => navigate("/admin")}>
                    <h4>Admin</h4>
                  </button>

                  <h6 className="mb-0 text-capitalize">
                    {" "}
                    {currentUser.displayName}{" "}
                  </h6>
                  <button
                    className="ms-2 btn btn-outline-light"
                    onClick={() => logOut()}
                  >
                    Logout
                  </button>
                </>
              ) : (
                <>
                  <button className="btn" onClick={() => navigate("/invoice")}>
                    <h4>Invoice</h4>
                  </button>
                  <button className="btn" onClick={() => navigate("/graphics")}>
                    <h4>Graphics</h4>
                  </button>
                  <button className="btn" onClick={() => navigate("/profile")}>
                    <h4>Profile</h4>
                  </button>

                  <h6 className="mb-0 text-capitalize">
                    {" "}
                    {currentUser.displayName}{" "}
                  </h6>
                  <button
                    className="ms-2 btn btn-outline-light"
                    onClick={() => logOut()}
                  >
                    Logout
                  </button>
                </>
              )
            ) : (
              <>
                <button className="btn" onClick={handleInvoice}>
                  <h4>Invoice</h4>
                </button>
                <button className="btn" onClick={handleInvoice}>
                  <h4>Graphics</h4>
                </button>
                <button className="btn" onClick={handleInvoice}>
                  <h4>Profile</h4>
                </button>
                <button
                  className="ms-2 btn btn-outline-light"
                  onClick={() => navigate("/login")}
                >
                  Login
                </button>
                <button
                  className="ms-2 btn btn-outline-light"
                  onClick={() => navigate("/register")}
                >
                  {" "}
                  Register{" "}
                </button>
              </>
            )}

            {/* {currentUser ? (
                        <>
                            <h5 className='mb-0 text-capitalize'> {currentUser.displayName} </h5>
                            <button className='ms-2 btn btn-outline-light' onClick={() => logOut()}>Logout</button>   
                        </>
                    ) : (
                        <>
                            <button className='ms-2 btn btn-outline-light' onClick={() => navigate("/login") }>Login</button>
                            <button className='ms-2 btn btn-outline-light' onClick={() => navigate("/register") }> Register </button>
                        </>
                    ) }  */}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
