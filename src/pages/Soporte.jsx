/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/alt-text */
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../css/Soporte.scss";
import img12 from "../assets/imgs/img12.png";

function Soporte() {
  const navigate = useNavigate();
  let filaSeleccionada = null;
  useEffect(() => {
    const filas = document.querySelectorAll("tr");

  filas.forEach(function (fila) {
    fila.addEventListener("click", function () {
      if (filaSeleccionada) {
        filaSeleccionada.classList.remove("selected");
      }
      fila.classList.add("selected");
      filaSeleccionada = fila;
    });
  });
  }, []);
  return (
    <div id="soporte">
      <header>
        <nav>
          <ul>
            <li class="selected">
              <a href="#">Soporte</a>
            </li>
            <li>
              <a onClick={() => navigate("/usuarios")}>Usuarios</a>
            </li>
          </ul>
        </nav>
      </header>

      <section>
        <h1>Lista de mensajes de ayuda</h1>

        <div>
          <table>
            <thead>
              <tr>
                <th>Usuario</th>
                <th>Fecha Petición</th>
                <th>Asunto</th>
              </tr>
            </thead>
            <tbody>
              <tr onClick={()=>{}}>
                <td>
                  <img src={img12} />
                </td>
                <td>12 Mar 2023</td>
                <td>Limpieza de hogar</td>
              </tr>
              <tr>
                <td>
                  <img src={img12} />
                </td>
                <td>12 Mar 2023</td>
                <td>Limpieza de hogar</td>
              </tr>
              <tr>
                <td>
                  <img src={img12} />
                </td>
                <td>12 Mar 2023</td>
                <td>Limpieza de hogar</td>
              </tr>
              <tr>
                <td>
                  <img src={img12} />
                </td>
                <td>12 Mar 2023</td>
                <td>Limpieza de hogar</td>
              </tr>
              <tr>
                <td>
                  <img src={img12} />
                </td>
                <td>12 Mar 2023</td>
                <td>Limpieza de hogar</td>
              </tr>
              <tr>
                <td>
                  <img src={img12} />
                </td>
                <td>12 Mar 2023</td>
                <td>Limpieza de hogar</td>
              </tr>
              <tr>
                <td>
                  <img src={img12} />
                </td>
                <td>12 Mar 2023</td>
                <td>Limpieza de hogar</td>
              </tr>
              <tr>
                <td>
                  <img src={img12} />
                </td>
                <td>12 Mar 2023</td>
                <td>Limpieza de hogar</td>
              </tr>
              <tr>
                <td>
                  <img src={img12} />
                </td>
                <td>12 Mar 2023</td>
                <td>Limpieza de hogar</td>
              </tr>
              <tr>
                <td>
                  <img src={img12} />
                </td>
                <td>12 Mar 2023</td>
                <td>Limpieza de hogar</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div class="btns">
          <input type="button" value="Eliminar" class="btn btn-grey"></input>
          <input type="button" value="Responder" class="btn btn-orange" onClick={()=>navigate("/respuesta")}></input>
        </div>

        <footer style={{ fontSize: "small" }}>Mateo Reinoso</footer>
      </section>
    </div>
  );
}

export { Soporte };
