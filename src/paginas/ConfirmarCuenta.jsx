import { useParams,Link } from "react-router-dom";
import { useEffect,useState } from "react";
import clienteAxios from "../config/axios";
import Alertas from "../components/Alertas";

const ConfirmarCuenta = () => {
const [confircuent,setConfircuent] = useState(false);
const [cargando,setCargando] = useState(true);
const [alerta,setAlerta] = useState({});

const param = useParams();
const {id} = param;

useEffect(()=>{
  const confirmaCuenta = async()=>{
    try {
      const url = `/veterinarios/confirmar/${id}`;
      const {data} = await clienteAxios(url);
      setConfircuent(true);
      setAlerta({msg:data.msg})
      
    } catch (error) {
      setAlerta({msg:error.response.data.msg,error:true})
    }
    setCargando(false)
  }
  confirmaCuenta();
},[])

  return (
   <>
   <div>
    <h1 className='text-indigo-600 font-black text-4xl'>Confirma tu cu cuenta y administra tus <span className='text-black'>Pacientes</span></h1>
   </div>
   <div className='px-5 py-10 mt-20 md:mt-5 shadow-lg rounded-xl bg-white'>
     {!cargando && <Alertas
      alerta={alerta}
    />}
    {confircuent && 
    <Link to="/" className="block text-center my-5 text-gray-500"> Iniciar sesión </Link>}
   </div>
   </>
  )
}

export default ConfirmarCuenta