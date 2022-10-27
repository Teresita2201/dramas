import React, { useEffect, useState } from "react";
import Axios from "../Servicios/Axios";
import { useParams, useNavigate } from "react-router-dom";
import "../Pages/ses.css"
import Navee from "../Pages/navegacion";

function Consulta() {
  const variables = {
    _id: "",
    nombre: "",
    edad: "",
    sexo: "",
    image: "",
  };

  const [guardarPersona, setguardarPersona] = useState(variables);

  const params = useParams();
  const navigate = useNavigate();

  const obtenerValues = (e) => {
    const { name, value } = e.target;
    setguardarPersona({ ...guardarPersona, [name]: value });
  };

  const guardarDatos=(e)=>{
    Axios.post('/persona/guardarPersona',guardarPersona)
    .then(()=>{
     console.log("Registros guardados exitosamente");
    })
   }
 
   const onePersona=async(id)=>{
     const buscarPersona= await Axios.get('/persona/consultarUnaPersona/'+id)
     setguardarPersona(buscarPersona.data);
   }
 
   const updatePersona=async()=>{
     await Axios.put(`/persona/updatePersona/${params.id}`,guardarPersona)
     .then(()=>{
       console.log('Datos actualizados correctamente');
     });
 
     navigate('/');
   }
 
   const Enviar=(e)=>{
     e.preventDefault();
 
     if(guardarPersona._id===""){
       guardarDatos();
     }else{
       updatePersona();
     }
   }
 
   useEffect(()=>{
     onePersona(params.id);
   },[params.id])
 

  return ( 
    <div className="ses">
          <Navee/>

      <form class="form" onSubmit={Enviar} id="formalumno">
       <br/>
        <div class="row mb-3">
          <div class="col-sm-10">
           <h2>REGISTRO DE DATOS</h2> 
            <div class="row mb-3"></div>
          

            <div class="row mb-3">
              <label class="col-sm-2 col-form-label">
                Nombre 
              </label>

              <div class="col-sm-5">
                <input
                  type="text"
                  class="form-control"
                  name="nombre"
                  value={guardarPersona.nombre}
                  onChange={obtenerValues}
                />
              </div>
            </div>


            <div class="row mb-3">
              <label class="col-sm-2 col-form-label">Sexo:</label>
              <div class="col-sm-5">
                <input
                  type="text"
                  class="form-control"
                  name="sexo"
                  value={guardarPersona.sexo}
                  onChange={obtenerValues}
                />
              </div>
            </div>

            

            <div class="row mb-3">
              <label class="col-sm-2 col-form-label">Edad:</label>
              <div class="col-sm-5">
                <input
                  type="text"
                  class="form-control"
                  name="edad"
                  value={guardarPersona.edad}
                  onChange={obtenerValues}
                />
              </div>
            </div>

            <div class="row mb-3">
              <label class="col-sm-2 col-form-label">agrega una foto</label>
              <div class="col-sm-5">
                <input
                  type="file"
                  class="form-control"
                  name="image"
                  value={guardarPersona.image}
                  onChange={obtenerValues}
                />
              </div>
            </div>
            <div class="text-center">
            <button type="submit" class="btn btn-primary">
              {guardarPersona._id === "" ? "Guardar" : "Actualizar"}
            </button>
            
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Consulta;
