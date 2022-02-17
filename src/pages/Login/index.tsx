import logo from "../../assets/images/ioasys-logo-white.png";
import  AlertComponent  from "../../components/Alert"
import "./style.scss";

import { useNavigate } from "react-router-dom"



function Login() {
  const navigate = useNavigate()
    
  return (
    <div className="container">
      <div className="form_login">
        <div className="title">
          <img id="logo" src={logo} alt="logo-ioasys" />
          <p className="sub_title">Books</p>
        </div>
        <input id="email" type="email" placeholder="Email" />
        <div id="input_submit">
          <input id="password" type="password" placeholder="Senha" />
          <button  className="login_button" onClick={() => navigate("/home")}>Entrar</button>
          
        </div>
      <AlertComponent/>
      </div>
    </div>
  );
}

export default Login
