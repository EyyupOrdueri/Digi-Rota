import React from 'react'
import { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { logOut } from '../auth/firebase'
import { AuthContext } from '../context/AuthContext'

const Navbar = () => {

    const navigate = useNavigate()
    const { currentUser } = useContext(AuthContext)


  return (
    <div>
        <nav className='navbar navbar-expand-lg' >
            <div className="container-fluid">
                <Link to={"/"} className="navbar-brand text-white">
                    <h4>Digi Rota</h4>
                </Link>
                <div className="d-flex text-white align-items-center">

                    {currentUser ? (
                        <>     
                            <Link to={"/invoice"} className="navbar-brand text-white">
                                <h4>Invoice</h4>
                            </Link>
                            <Link to={"/graphics"} className="navbar-brand text-white">
                                <h4>Graphics</h4>
                            </Link>
                            <Link to={"/profile"} className="navbar-brand text-white">
                                <h4>Profile</h4>
                            </Link>
                            <Link to={"/admin"} className="navbar-brand text-white">
                                <h4>Admin</h4>
                            </Link>
                            <h6 className='mb-0 text-capitalize'> {currentUser.displayName} </h6>
                            <button className='ms-2 btn btn-outline-light' onClick={() => logOut()}>Logout</button>   
                        </>
                    ) : (
                        <>
                            <button className='ms-2 btn btn-outline-light' onClick={() => navigate("/login") }>Login</button>
                            <button className='ms-2 btn btn-outline-light' onClick={() => navigate("/register") }> Register </button>
                        </>
                    ) } 
                    

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
  )
}

export default Navbar