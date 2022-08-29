import { Link } from "react-router-dom";
import { useState } from "react";
import Alertas from "../components/Alertas";
import clienteAxios from "../config/axios";


const OlvidePassword = () => {
  const [email,setEmail]= useState('');
  const [alerta,setAlerta]= useState({});
  
  const handleSubmit = async e=>{
   e.preventDefault();
   if(email===''){
      setAlerta({msg:"Debe ingresar un email",error:true});
      return;
   }
   try {
    const {data} = await clienteAxios.post('/veterinarios/olvide-Password',{email});
    setAlerta({msg:data.msg})
    
   } catch (error) {
    setAlerta({msg:error.response.data.msg,error:true})
   }
  }
  const {msg} = alerta;
  return (
   <>
   <div>
    <h1 className="text-indigo-600 font-black text-4xl">Recupera tu <span className="text-black">Password</span></h1>
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
          onChange={e=>setEmail(e.target.value)}
          
          />
       </div>
       <input
       type="submit"
       value="Enviar"
       className="bg-indigo-700 w-full py-3 px-10 rounded-xl text-white uppercase font-bold mt-5 hover:cursor-pointer hover:bg-indigo-800 md:w-auto"
       />
       </form>
       <nav className="mt-5 lg:flex lg:justify-between">
      <Link to="/Registrar" className="block text-center my-5 text-gray-500">¿No tienes una cuenta? Registrate</Link>

      <Link to="/" className="block text-center my-5 text-gray-500">¿Ya tienes una cuenta? Iniciar sesión</Link>
     
     </nav>
       </div>
   </>
  )
}

export default OlvidePassword