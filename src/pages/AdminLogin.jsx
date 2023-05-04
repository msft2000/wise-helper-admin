import React from "react";
import { useNavigate } from "react-router-dom";
import "../css/AdminLogin.css";

function AdminLogin(){
    const navigate = useNavigate();
    return(
        <div id="admin-login--page">
            <div className="admin-login--container">
                <h2>Admin/Login</h2>
                <div className="form-container">
                    <form>
                        <label htmlFor="username">Username</label>
                        <input type="text" name="username" id="username" placeholder="Ingrese su Usuario" />
                        <label htmlFor="password">Contraseña</label>
                        <input type="password" name="password" id="password" placeholder="Ingrese Su Contraseña" />
                        <button onClick={()=>{navigate("/soporte")}} type="submit">LOGIN</button>
                    </form>
                </div>
                <p style={{"textAlign": "center","fontSize":"small"}}>Mateo Flores</p>
            </div>
        </div>
    )
}

export { AdminLogin };