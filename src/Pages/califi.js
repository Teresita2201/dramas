import React, { Component } from "react";
import "../diseño/cali.css"
import belleza from "../img/belleza.jpeg";

function califi() {
  return (
    <div class="container text-center ">
        <br/>
      <div class="card text-center" width="18rem">
        <img src={belleza} class="logo" alt="jpeg" />

        <div class="card-body">
          <p class="card-text">
          <h1>Belleza verdadera</h1>
          </p>
          <h5>Im Joo Kyung (Moon Ga Young) es una estudiante de secundaria que es optimista y positiva en la mayoría de las cosas... ¡excepto en su apariencia!



Odia la idea de ser vista en público sin maquillaje, pero afortunadamente se ha convertido en una experta en maquillaje autodidacta, con un poco de ayuda de una plétora de videotutoriales en Internet.



Lo que ha aprendido en línea ha transformado su vida. En la escuela, es conocida como una de las chicas más guapas de la clase, ¡aunque vive secretamente con el temor de que sus compañeros descubran su aspecto detrás del maquillaje!</h5>
  <h3>Actores</h3>     
          <h5>Moon Ga-young
Lim Ju-kyung</h5>
<h5>Cha Eun-woo
Lee Su-ho</h5>
<h5>Hwang In-yeop
Han Seo-jun</h5>
<h5>Park You-na
Kang Soo-jin</h5>
          <div class="rate bg-success py-3 text-white mt-3" />

          <h3 class="">Califica el drama</h3>

          <div class="rating">
            <input type="radio" name="rating" value="5" id="5" />
            <label for="5">☆</label>{" "}
            <input type="radio" name="rating" value="4" id="4" />
            <label for="4">☆</label>{" "}
            <input type="radio" name="rating" value="3" id="3" />
            <label for="3">☆</label>{" "}
            <input type="radio" name="rating" value="2" id="2" />
            <label for="2">☆</label>{" "}
            <input type="radio" name="rating" value="1" id="1" />
            <label for="1">☆</label>
          </div>

           <a href="/inicio" class="btn btn-outline-success ">
                 Regresar{" "}
                </a>
              
                


          </div>
        </div>
      </div>

  );
}

export default califi;
