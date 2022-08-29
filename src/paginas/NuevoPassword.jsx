import { useState,useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import Alertas from "../components/Alertas";
import clienteAxios from "../config/axios";

const NuevoPassword = () => {
    const [password,setPassword]=useState('');
    const [alerta,setAlerta]= useState({});
    const [tokenValido,settokenValido]=useState(false);
    const [cambioPassw,setCambioPassw] = useState(false);

    const param = useParams();
    const {id}=param;
    useEffect(()=>{
        const recuperarPassw = async()=>{
            try {
              await clienteAxios(`/veterinarios/olvide-Password/${id}`);
              setAlerta({msg:"Coloca tu nuevo password"})
              settokenValido(true);
            } catch (error) {
                setAlerta({msg:"Hubo un error en el enlace",error:true})
            }
        }

        recuperarPassw();
    },[])
    
    
    const handleSubmit = async e=>{
      e.preventDefault();
      if(password.length < 6 ){
        setAlerta({msg:'Password debe ser mayor a 6 caracteres',error:true});    
        return;
      }

      try {
        const url = `/veterinarios/olvide-Password/${id}`;
        const {data} = await clienteAxios.post(url,{password});
        setAlerta({msg:data.msg});
        setCambioPassw(true);
        
      } catch (error) {
        setAlerta({msg:error.response.data.msg,error:true})
      }
    }
    const {msg}=alerta;
  return (
   <>
   <div>
    <h1 className='text-indigo-600 font-black text-4xl'>Restablece tu Password y administra tus <span className='text-black'>Pacientes</span></h1>
   </div>
   <div className='px-5 py-10 mt-20 md:mt-5 shadow-lg rounded-xl bg-white'>
    {msg && <Alertas
    alerta={alerta}
    />}
    {tokenValido && (
        <form onSubmit={handleSubmit}>  
            
        <div className="my-5">
            <label className="uppercase text-gray-600 block text-l font-bold">
            Nuevo Password:
            </label>
            <input type="password"
            placeholder="Ingresa tu nuevo password"
            className="border w-full p-3 mt-3 bg-gray-50 rounded-lg"
            value={password}
            onChange={e=>setPassword(e.target.value)}
            />
        </div>

        <input
        type="submit"
        value="Enviar"
        className="bg-indigo-700 w-full py-3 px-10 rounded-xl text-white uppercase font-bold mt-5 hover:cursor-pointer hover:bg-indigo-800 md:w-auto"
        />
        </form>

    )}
  {cambioPassw && 
   <Link to="/" className="block text-center my-5 text-gray-500">Iniciar sesión</Link> }
   </div>
   </>
  )
}

export default NuevoPassword