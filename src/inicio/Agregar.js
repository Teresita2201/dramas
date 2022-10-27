import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Axios from "../Servicios/Axios";
import { BsTag } from "react-icons/bs";
import Navee from "../Pages/navegacion"
function Agregar() {
  const urlImage = "http://localhost:4000/imagenes/";

  const [personas, setPersonas] = useState([]);

  const navigate = useNavigate();

  const listarPersonas = async () => {
    const listarPersonas = await Axios.get("persona/consultarPersona");
    setPersonas(listarPersonas.data);
    // console.log(consultar.data);
  };

  useEffect(() => {
    listarPersonas();
  }, []);

  return (
    <div>
          <Navee/>

         <h3 align="right">
        Dramas <span class="badge badge-secondary"></span>
        <BsTag />
      </h3>
      <div class="row row-cols-1 row-cols-md-2 g-4">
        {personas.map((persona) => {
          return (
            
            <div class="col">
           
              <div class="card">
                <img
                  src={urlImage + persona.filename}
                  class="card-img-top"
                  alt="..."
                  width="100px"
                  height="250px"
                />
                <div class="card-body">
                  <h5 class="card-title">Nombre: {persona.nombre}</h5>
                  <h5 class="card-title">Edad: {persona.edad}</h5>
                  <h5 class="card-title">Sexo: {persona.sexo}</h5>
                  <p class="card-text">                  
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Agregar;
