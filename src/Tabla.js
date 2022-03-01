import axios from "axios";
import { useEffect, useState } from "react";

export default function Tabla() {
    
  const urlApi="http://localhost:4000/api/auth/obtener";

    const [data,setData] = useState([]);

  let listaUsuarios=[];
  const obtenerUsuario = async () =>{
    await axios.get(urlApi,{},{}).then(function(response){
      console.log(response.data.usuarios);
      setData(response.data.usuarios);

    }).catch(function(error){
      console.log(error);
    })
  }

  useEffect(() => {
    obtenerUsuario();
  }, [])
  
    return(
        <div>
            <h1>USUARIOS REGISTRADOS EN LA BASE DE DATOS</h1>
            <table>
                <thead>
                    <tr>
                        <td><strong>numero</strong></td>
                        <td><strong>id</strong></td>
                        <td><strong>usuario</strong></td>
                        <td><strong>contrasena</strong></td>
                        <td><strong>pasword</strong></td>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map((item,index)=>(
                            <tr key={index+1}>
                                <td><strong>{index+1}</strong></td>
                                <td><strong>{item._id}</strong></td>
                                <td><strong>{item.name}</strong></td>
                                <td><strong>{item.email}</strong></td>
                                <td><strong>{item.password}</strong></td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>

        </div>
    )
};