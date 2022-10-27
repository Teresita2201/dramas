import * as React from "react";
import Logo from "../img/Loogo.jpg";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../fire";
import "./loginn.css";
import "../Pages/Home";

function Login({ setAuthState, setUser }) {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const handleLogin = () => {
    if (email !== null && password !== null) {
      signInWithEmailAndPassword(auth, email, password)
        .then(() => {
          setUser(email);
          setAuthState("home");
        })
        .catch((err) => alert(err));
    }
  };

  return (
    <div className="Login">
      <header className="blanco-header">
        <img className="login-logo" src={Logo} />

        <div className="row-login">Iniciar Sesion</div>
<hr/>
        <div className="Formulario-login">
          <div className="nombre">
            <label className="text">Correo:</label>
            <div className="barra">
              <input
                className="columna"
                id="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Ingrese su email"
              />
            </div>
          </div>

          <div className="nombre">
            <label className="text">Contraseña :</label>

            <div className="barra">
              <input
                className="columna"
                id="password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Ingrese su password"
                type={"password"}
              />
            </div>
          </div>
          <br/>

          <div className="pregunta">
            <p className="font-medium text-base">¿No tienes una cuenta?</p>

            <button
              onClick={() => setAuthState("register")}
              className="lin linea"
            >
              Registrate
            </button>

       
          </div>

          <div className="Iniciar">
          <button  onClick={handleLogin}
           type="button" class="btn btn-success" >
              Iniciar Sesion
            </button>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Login;
