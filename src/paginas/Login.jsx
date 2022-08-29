import { useState } from "react";
import { Link,useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import Alertas from "../components/Alertas";
import clienteAxios from "../config/axios";

const Login = () => {

  const {setAuth} = useAuth()
  // console.log(auth)
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');
  const [alerta,setAlerta] = useState({});

  const navigate = useNavigate();

  const handleSubmit = async e=>{
    e.preventDefault();

    if([email,password].includes('')){
      setAlerta({msg:"Todos los campos son obligatorios",error:true});
      return;
    }

    try {
      const {data} = await clienteAxios.post('/veterinarios/autenticar',{email,password});
      localStorage.setItem('token',data.token)
      setAuth(data)
       navigate('/admin');
    } catch (error) {

      setAlerta({msg:error.response.data.msg,error:true})
      
    }
  }
const {msg} = alerta;
  return (
    <>

   <div>
    <h1 className="text-indigo-600 font-black text-4xl">Inicia Sesión y administra tus <span className="text-black">Pacientes</span></h1>
   </div>
   <div className="px-5 py-10 mt-20 md:mt-5 shadow-lg rounded-xl bg-white">
    {msg && <Alertas
     alerta={alerta}
    />}
     <form onSubmit={handleSubmit}>
       <div className="my-5">
          <label className="uppercase text-gray-600 block text-l font-bold">
            Email:
          </label>
          <input type="email"
          placeholder="Ingrese Email"
          className="border w-full p-3 mt-3 bg-gray-50 rounded-lg"
          value={email}
          onChange={e=> setEmail(e.target.value)}
          
          />
       </div>
       <div className="my-5">
        <label className="uppercase text-gray-600 block text-l font-bold">
          Password:
        </label>
        <input type="password"
         placeholder="Ingrese tu clave"
         className="border w-full p-3 mt-3 bg-gray-50 rounded-lg"
         value={password}
         onChange={e=> setPassword(e.target.value)}
         
         />
       </div>
       <input
       type="submit"
       value="Ingresar"
       className="bg-indigo-700 w-full py-3 px-10 rounded-xl text-white uppercase font-bold mt-5 hover:cursor-pointer hover:bg-indigo-800 md:w-auto"
       />
     </form>
     <nav className="mt-5 lg:flex lg:justify-between">
      <Link to="/Registrar" className="block text-center my-5 text-gray-500">¿No tienes una cuenta? Registrate</Link>

      <Link to="/OlvidePassword" className="block text-center my-5 text-gray-500">Olvide mi Password</Link>
     
     </nav>
   </div>
   
    </>
  )
}

export default Login