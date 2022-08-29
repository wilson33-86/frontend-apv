import { useEffect, useState } from "react";
import Alertas from "./Alertas";
import usePacientes from "../hooks/usePacientes";

const Formulario = () => {
    const [nombre,setNombre]= useState('')
    const [propietario,setPropietario]= useState('')
    const [email,setEmail]= useState('')
    const [fecha,setFecha]= useState('')
    const [sintomas,setSintomas]= useState('')
    const [id,setId]= useState(null)
    
    const [alerta,setAlerta] = useState({});

    const {guardarPaciente,paciente} = usePacientes();
    
    useEffect(()=>{
        if(paciente?.nombre){
            setNombre(paciente.nombre)
            setEmail(paciente.email)
            setFecha(new Date(paciente.fecha).toDateString())
            setPropietario(paciente.propietario)
            setSintomas(paciente.sintomas)
            setId(paciente._id)
        }
    },[paciente])
    
    const handleSubmit = e=>{
        e.preventDefault();
        if([nombre,propietario,email,fecha,sintomas].includes('')){
            setAlerta({msg:'Todos los campos son Obligatorios',error:true })
            return;
        }
      
        guardarPaciente({nombre,propietario,email,fecha,sintomas,id});
        
        setNombre('')
        setEmail('')
        setFecha('')
        setId('')
        setPropietario('')
        setSintomas('')
    }

    const {msg} = alerta;
  return (
    <>
    <h2 className="font-black text-3xl text-center">Administrador de Pacientes</h2>
    <p className="text-xl text-center mt-5 mb-10">
        Añade tus Pacientes y {''}
        <span className="text-indigo-600 font-bold"> Administralos</span>
    </p>
    {msg && <Alertas
    alerta={alerta}
    />}
    <form onSubmit={handleSubmit}
    className="bg-white py-10 px-5 mb-10 lg:mb-0 shadow-md rounded-md"
    >
        <div className="mb-5">
            <label htmlFor="nombre" className="text-gray-700 uppercase font-bold">Nombre Mascota</label>
            <input
            id="nombre"
            type="text"
            placeholder="Nombre de mascota"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={nombre}
            onChange={e=>setNombre(e.target.value)}
            />
        </div>
        <div className="mb-5">
            <label htmlFor="propietario" className="text-gray-700 uppercase font-bold">Nombre Propietario</label>
            <input
            id="propietario"
            type="text"
            placeholder="Nombre del propietario"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={propietario}
            onChange={e=>setPropietario(e.target.value)}
            />
        </div>
        <div className="mb-5">
            <label htmlFor="email" className="text-gray-700 uppercase font-bold">Email Propietario</label>
            <input
            id="email"
            type="email"
            placeholder="Email"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={email}
            onChange={e=>setEmail(e.target.value)}
            />
        </div>
        <div className="mb-5">
            <label htmlFor="fecha" className="text-gray-700 uppercase font-bold">Fecha Alta</label>
            <input
            id="fecha"
            type="date"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={fecha}
            onChange={e=>setFecha(e.target.value)}
            />
        </div>
        <div className="mb-5">
            <label htmlFor="sintomas" className="text-gray-700 uppercase font-bold">Sintomas</label>
            <textarea
            id="sintomas"
            placeholder="Describe los Sintomas"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={sintomas}
            onChange={e=>setSintomas(e.target.value)}
            />
        </div>
        <input
        type="submit"
        className="p-3 w-full bg-indigo-600 text-white uppercase font-bold hover:bg-indigo-800 cursor-pointer transition-colors"
        value={id ? "Guardar Cambios":"Agregar Paciente"}
        />
    </form>
    </>

  )
}

export default Formulario