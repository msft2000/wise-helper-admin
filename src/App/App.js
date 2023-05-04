import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { GeneralProvider } from "../context";
import { Soporte } from "../pages/Soporte";
import { Usuarios } from "../pages/Usuarios";
import { AdminLogin } from "../pages/AdminLogin";
import "../css/App.css"

function App() {
    return (
        <BrowserRouter>
            <GeneralProvider>
                <Routes>
                    <Route path="/" element={<AdminLogin />} />
                    <Route path="/soporte" element={<Soporte />} />
                    <Route path="/usuarios" element={<Usuarios />} />
                </Routes>
            </GeneralProvider>
        </BrowserRouter>
    );
}
export { App };