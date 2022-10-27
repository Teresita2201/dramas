import React from "react";
import encuentro from "../img/encuentro.jpg";
import amor from "../img/amor_tiempo.jpeg";
import Belleza from "../img/belleza.jpeg";
import love from "../img/love_rain.jpeg";
import cute from "../img/program_cute.jpg";
import dram from "../img/oh_venus.jpeg";
import Navee from "../Pages/navegacion";
import { BsTag } from "react-icons/bs";
import "../inicio/diseño.css";


function HomeService() {
  
  return (

    <div>
      <Navee />
      <br />
      <h3 align="right">
        Dramas <span class="badge badge-secondary"></span>
        <BsTag />
      </h3>

      <div class="row row-cols-1 row-cols-md-3 g-4">
        <div class="col">
          <div class="card">
            <div class="card-body">
              <img src={dram} class="logo" alt="jpeg" />
              <h5 class="card-title">Oh my venus</h5>
              <p class="card-text">corea</p>
              <p>
                <a href="https://www.viki.com/videos/1088591v" class="btn btn-primary ">
                  ver{" "}
                </a> <a href="/Cali" class="btn btn-outline-warning ">
                informacion{" "}
                </a>
              </p>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card">
            <div class="card-body">
              <img src={cute} class="logo" alt="jpg" />
              <h5 class="card-title">Programadora adorable</h5>
              <p class="card-text">china</p>
              <p>
                <a href="https://www.viki.com/tv/38692c-cute-programmer?locale=es" class="btn btn-primary ">
                  ver{" "}
                </a> <a href="/Cali" class="btn btn-outline-warning ">
                  informacion{" "}
                </a>
              </p>
            </div>
          </div>
        </div>

        <div class="col">
          <div class="card">
            <div class="card-body">
              <img src={love} class="logo" alt="jpeg" />
              <h5 class="card-title">Love rain</h5>
              <p class="card-text">corea</p>
              <p>
                <a href="https://www.viki.com/tv/5269c-love-rain" class="btn btn-primary ">
                  ver{" "}
                </a> <a href="/Cali" class="btn btn-outline-warning ">
                  informacion{" "}
                </a>
              </p>
            </div>
          </div>
        </div>

        <div class="col">
          <div class="card">
            <div class="card-body">
              <img src={Belleza} class="logo" alt="jpeg" />
              <h5 class="card-title">Belleza verdadera</h5>
              <p class="card-text">corea</p>
              <p>
                <a href="https://www.viki.com/videos/1172625v" class="btn btn-primary ">
                  ver{" "}
                </a> <a href="/Cali" class="btn btn-outline-warning ">
                informacion{" "}
                </a>
                
              </p>
            </div>
          </div>
        </div>

        <div class="col">
          <div class="card">
            <div class="card-body">
              <img src={encuentro} class="logo" alt="jpg" />
              <h5 class="card-title">Encounter</h5>
              <p class="card-text">corea</p>
              <p>
                <a href="https://www.viki.com/tv/36239c-encounter" class="btn btn-primary ">
                  ver{" "}
                </a> <a href="/Cali" class="btn btn-outline-warning ">
                informacion{" "}
                </a>
                
              </p>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card">
            <div class="card-body">
              <img src={amor} class="logo" alt=".jpeg" />
              <h5 class="card-title">Amor a tiempo</h5>
              <p class="card-text">china</p>
              <p>
                <a href="https://www.viki.com/tv/37406c-love-in-time?qId=577056c5f591619637a70191ee326c8a" class="btn btn-primary ">
                  ver{" "}
                </a> <a href="/Cali" class="btn btn-outline-warning ">
                informacion{" "}
                </a>
              </p>
            </div>
          </div>
        </div>

        
      </div>

     
    </div>
  );
}

export default HomeService;
