import "./styles.css";
import { useState } from 'react';
import axios from "axios";
import { useNavigate } from 'react-router-dom';


export default function Register() {
  const navigate = useNavigate()
  const [formValue, setformValue] = useState({
    name:'',
    email:'',
    password:''
  });

  
  const handleChange = (event) => {
    setformValue({
      ...formValue,
      [event.target.name]: event.target.value
    });
    console.log(formValue)
  }

  const urlApi="http://localhost:4000/api/auth/new";

  const registrarUsuario = (e) =>{
    e.preventDefault();
    axios.post(urlApi,formValue,{}).then(function(response){
      console.log(response);
      navigate('/Tabla')
    }).catch(function(error){
      console.log(error);
    })
  }


  
  return (
    
    <div className="container">
      <div className="col-sm-6 col-sm-offset-3">
        <h1>Formulario de Registro</h1>
        <form onSubmit={registrarUsuario}>
          <div className="form-group">
            <label className="control-label" htmlFor="user-github">
              Usuario Github:
            </label>
            <input
              type="text"
              className="form-control input-lg"
              id="user-github"
              placeholder="Ingresa un usuario"
              name="name"
              value = {formValue.name}
              onChange={handleChange}
              

            />
            <p className="help-block"></p>
          </div>
          <div className="form-group">
            <label className="control-label" htmlFor="email">
              Correo:
            </label>
            <input
              type="email"
              className="form-control input-lg"
              id="email"
              placeholder="Ingresa un correo"
              name="email"
             value = {formValue.email}
              onChange={handleChange}
            />
            <p className="help-block"></p>
          </div>
          <div className="form-group">
            <label className="control-label" htmlFor="password">
              password:
            </label>
            <input
              type="password"
              className="form-control input-lg"
              id="password"
              name="password"
              placeholder="Ingresa un correo"
              value = {formValue.password}
              onChange={handleChange}
            />
            <p className="help-block"></p>
          </div>
          <div className="checkbox terms-checkbox">
            <label>
              <input type="checkbox" id="terms" /> Acepto los términos y
              condiciones
            </label>
          </div>
          <div className="action text-right">
            <button type="submit" className="btn btn-primary btn-block btn-lg"  >
              Registrarse
            </button>
          </div>
        </form>
      </div>
      <div className="d-none">
        <div className="col-sm-10 col-sm-offset-1">
          <h1>Lista de Usuarios</h1>

          <table className="table bordered-table table-striped">
            <thead>
              <tr>
                <th className="text-center">Usuario Github</th>
                <th className="text-center">Correo</th>
              </tr>
            </thead>
            <tbody></tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
