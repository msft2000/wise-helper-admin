import React from "react";
import { useNavigate } from "react-router-dom";
import "../css/AdminLogin.css";
import toast, { Toaster } from 'react-hot-toast';

function AdminLogin() {
  const navigate = useNavigate();
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
  const iniciarSesion = () => {
    if(username === "admin" && password === "admin"){
      navigate("/soporte");
    }else{
        toast.error('Usuario o Contraseña Incorrectos');
    }
  }
  return (
    <div id="admin-login--page">
      <div className="admin-login--container">
        <h2>Admin/Login</h2>
        <div className="form-container">
          <form>
            <label htmlFor="username">Username</label>
            <input
              type="text"
              name="username"
              id="username"
              placeholder="Ingrese su Usuario"
              value={username}
              onChange={(e) => {
                setUsername(e.target.value);
              }}
            />
            <label htmlFor="password">Contraseña</label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Ingrese Su Contraseña"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
            <p
              onClick={() => {
                // navigate("/soporte");
                iniciarSesion();
              }}
            //   type="submit"
            >
              LOGIN
            </p>
          </form>
        </div>
        <p style={{ textAlign: "center", fontSize: "small" }}>Mateo Flores</p>
      </div>
        <Toaster />
    </div>
  );
}

export { AdminLogin };
