import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createUser } from "../../auth/firebase";

const Register = () => {
  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const displayName = `${firstName} ${lastName}`;
    console.log(firstName, lastName);
    createUser(email, password, navigate, displayName);
  };

  return (
    <div className="d-flex justify-content-center">
      <div className="form-image d-none d-lg-block">
        <img src={"https://picsum.photos/800/800"} alt="sample-movie" />
      </div>
      <div className="register-form">
        <h1 className="form-title display-3">Kayıt Ol</h1>
        <form id="register" onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="firstName" className="form-label">
              İsim
            </label>
            <input
              type="text"
              className="form-control"
              id="firstName"
              placeholder="İsminizi giriniz..."
              required
              onChange={(e) => setFirstName(e.target.value)}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="lastName" className="form-label">
              Soyisim
            </label>
            <input
              type="text"
              className="form-control"
              id="lastName"
              placeholder="Soyisminizi giriniz..."
              required
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder="Email'inizi giriniz..."
              required
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Şifre
            </label>
            <input
              type="password"
              className="form-control"
              id="password"
              placeholder="Şifrenizi belirleyiniz..."
              required
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <input
            type="submit"
            className="btn btn-primary form-control"
            value="Register"
          />
        </form>
      </div>
    </div>
  );
};

export default Register;
