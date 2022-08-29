import { useEffect,useState } from "react";
import NavAdmin from "../components/NavAdmin"
import useAuth from "../hooks/useAuth";
import Alertas from "../components/Alertas";

const Perfil = () => {
  const [perfil,setPerfil] = useState({})
  const [alerta,setAlerta] = useState({})
  const{auth,actualizarPerfil} = useAuth()
  useEffect(()=>{
    setPerfil(auth)
  },[auth])

  const handleSubmit = async e=>{
    e.preventDefault();
    const {nombre,email}= perfil;
    if([nombre,email].includes('')){
        setAlerta({msg:'Nombre y Email son Obligatorios',error:true})
      return
    }

   const res = await actualizarPerfil(perfil)
   setAlerta(res);
  }
  const {msg} = alerta;
  return (
    <>
    <NavAdmin/>
    <h2 className="text-center mt-10 text-3xl font-black">Editar Perfil</h2>
    <p className="text-center text-xl mt-5 mb-10">Modifica tu {''}<span className="text-indigo-600 font-bold">Información Aquí</span></p>
   
    <div className="flex justify-center">
      <div className="w-full md:w-1/2 bg-white rounded-lg p-5 shadow">
        {msg && <Alertas
         alerta={alerta}
        />}
        <form onSubmit={handleSubmit}>
            <div className="my-3">
              <label className="uppercase text-gray-600 font-bold">Nombre</label>
              <input
              type="text"
              name="nombre"
              className="border bg-gray-50 w-full rounded-lg p-2 mt-5"
              value={perfil.nombre || ''}
              onChange={e=>setPerfil({
                ...perfil,
                [e.target.name]:e.target.value
              })}
              />
            </div>
            <div className="my-3">
              <label className="uppercase text-gray-600 font-bold">Sitio web</label>
              <input
              type="text"
              name="web"
              className="border bg-gray-50 w-full rounded-lg p-2 mt-5"
              value={perfil.web || ''}
              onChange={e=>setPerfil({
                ...perfil,
                [e.target.name]:e.target.value
              })}
              />
            </div>
            <div className="my-3">
              <label className="uppercase text-gray-600 font-bold">Teléfono</label>
              <input
              type="text"
              name="telefono"
              className="border bg-gray-50 w-full rounded-lg p-2 mt-5"
              value={perfil.telefono || ''}
              onChange={e=>setPerfil({
                ...perfil,
                [e.target.name]:e.target.value
              })}
              />
            </div>
            <div className="my-3">
              <label className="uppercase text-gray-600 font-bold">Email</label>
              <input
              type="email"
              name="email"
              className="border bg-gray-50 w-full rounded-lg p-2 mt-5"
              value={perfil.email || ''}
              onChange={e=>setPerfil({
                ...perfil,
                [e.target.name]:e.target.value
              })}
              />

              <input
              type="submit"
              value="Guardar Cambios"
              className="bg-indigo-700 px-10 py-3 font-bold w-full text-white mt-5 rounded-lg uppercase"
              />
            </div>
        </form>
      </div>
    </div>
    </>
    
  )
}

export default Perfil