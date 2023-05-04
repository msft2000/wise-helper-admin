import React from "react";
import "../css/Index.css";
import img12 from "../assets/imgs/img12.png";

function Index() {
  let filaSeleccionada = null;
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
  return (
    <React.Fragment>
      <header>
        <nav>
          <ul>
            <li>
              <a href="#">Inicio</a>
            </li>
            <li class="selected">
              <a href="#">Soporte</a>
            </li>
            <li>
              <a href="#">Usuarios</a>
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
          <input type="button" value="Responder" class="btn btn-orange"></input>
        </div>

        <footer style={{"fontSize": "small"}}>Mateo Reinoso</footer>
      </section>
    </React.Fragment>
  );
}

export { Index };
