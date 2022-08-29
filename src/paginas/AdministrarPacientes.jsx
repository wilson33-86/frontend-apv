import { useState } from "react"
import Formulario from "../components/Formulario"
import ListadoPacientes from "../components/ListadoPacientes"


const AdministrarPacientes = () => {
  const [mostrarFormu,setMostrarFormu] = useState(false);
  return (
   <div className="flex flex-col md:flex-row">
      <button
      type="button"
      className="bg-indigo-700 text-white font-bold py-3 mx-10 uppercase rounded-md mb-10 md:hidden"
      onClick={()=>setMostrarFormu(!mostrarFormu)}
     >
       {mostrarFormu ? 'Ocultar Formulario':'Mostrar Formulario'} 
      </button>
      <div className={`${mostrarFormu ? 'block': 'hidden'} md:block md:w-1/2 lg:w-2/5`}>
        <Formulario/>
      </div>
      <div className="md:w-1/2 lg:w-3/5">
        <ListadoPacientes/>
      </div>
   </div>
  )
}

export default AdministrarPacientes