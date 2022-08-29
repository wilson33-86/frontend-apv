import {useState} from "react";
import { Link } from "react-router-dom";
import Alertas from "../components/Alertas";
import clienteAxios from "../config/axios";

const Registrar = () => {
  const [nombre,setNombre] = useState('');
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');
  const [confirmaPassword,setConfirmaPassword] = useState('');
  const [alerta,setAlerta] = useState({});

  const handleSubmit = async e=>{
      e.preventDefault();
      if([nombre,email,password,confirmaPassword].includes('')){
        setAlerta({msg:'Campos Vacios!',error:true});      
        return;
      }

      if(password !== confirmaPassword){
        setAlerta({msg:'No coinciden los passwords',error:true});    
        return;
      }
      if(password.length < 6 ){
        setAlerta({msg:'Password debe ser mayor a 6 caracteres',error:true});    
        return;
      }
      // setAlerta({msg:'Se registro exitosamente!',error:false});    
      setAlerta({});
      try {

        await clienteAxios.post("/veterinarios",{nombre,email,password});
        setAlerta({msg:"Usuario creado, revisa tu email", error:false});
      } catch (error) {
        setAlerta({msg:error.response.data.msg, error:true});
      }
     
      
  }
  const {msg} = alerta;

  return (
    <>
    <div>
    <h1 className="text-indigo-600 font-black text-4xl">Crea tu cuenta y administra tus <span className="text-black">Pacientes</span></h1>
   </div>
   <div className="px-5 py-10 mt-20 md:mt-5 shadow-lg rounded-xl bg-white">
    { msg && <Alertas
      alerta={alerta}
    />}
     <form onSubmit={handleSubmit}>
     <div className="my-5">
          <label className="uppercase text-gray-600 block text-l font-bold">
            Nombre:
          </label>
          <input type="text"
          placeholder="Ingrese tu Nombre"
          className="border w-full p-3 mt-3 bg-gray-50 rounded-lg"
          value={nombre}
          onChange={e=>setNombre(e.target.value)}
          />
       </div>

       <div className="my-5">
          <label className="uppercase text-gray-600 block text-l font-bold">
            Email:
          </label>
          <input type="email"
          placeholder="Ingrese tu Email"
          className="border w-full p-3 mt-3 bg-gray-50 rounded-lg"
           value={email}
          onChange={e=>setEmail(e.target.value)}
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
          onChange={e=>setPassword(e.target.value)}
          />
       </div>
       <div className="my-5">
          <label className="uppercase text-gray-600 block text-l font-bold">
          Confirma Tu Password:
          </label>
          <input type="password"
          placeholder="Confirma tu clave"
          className="border w-full p-3 mt-3 bg-gray-50 rounded-lg"
          value={confirmaPassword}
          onChange={e=>setConfirmaPassword(e.target.value)}
          />
       </div>
       <input
       type="submit"
       value="Registrarme"
       className="bg-indigo-700 w-full py-3 px-10 rounded-xl text-white uppercase font-bold mt-5 hover:cursor-pointer hover:bg-indigo-800 md:w-auto"
       />
     </form>
     <nav className="mt-5 lg:flex lg:justify-between">
      <Link to="/" className="block text-center my-5 text-gray-500">¿Ya tienes una cuenta? Iniciar sesión</Link>

      <Link to="/OlvidePassword" className="block text-center my-5 text-gray-500">Olvide mi Password</Link>
     
     </nav>
   </div>
   
   </>
  )
}

export default Registrar