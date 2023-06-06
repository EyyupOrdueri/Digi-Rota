import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { signIn, signUpProvider } from "../../auth/firebase";

const Login = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    signIn(email, password, navigate);
    // console.log(email, password)
  };

  const handleProviderLogin = () => {
    signUpProvider(navigate);
  };

  return (
    <div className="d-flex justify-content-center">
      <div className="form-image d-none d-lg-block">
        <img src={"https://picsum.photos/800/800"} alt="sample-movie" />
      </div>
      <div className="register-form">
        <h1 className="form-title display-3">Giriş Yap</h1>
        <form id="register" onSubmit={handleLogin}>
          {/* id'den sonra bu eklenecek: onSubmit={handleLogin} */}

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
              placeholder="Şifrenizi giriniz..."
              required
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div className="link">Şifremi unuttum?</div>

          <input
            type="submit"
            className="btn btn-primary form-control"
            value="Giriş Yap"
          />
        </form>

        <button
          className="btn-login btn-primary form-control"
          onClick={handleProviderLogin}
        >
          Google ile giriş yap
        </button>
      </div>
    </div>
  );
};

export default Login;
