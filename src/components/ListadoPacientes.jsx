import usePacientes from "../hooks/usePacientes";
import Paciente from "./Paciente";

const ListadoPacientes = () => {
//const {pacientes} = usePacientes();
const pacientes = [{_id:1,nombre:"Zeus"},{_id:2,nombre:"Firulais"}];

 const nombre = "Firulais8";
  return (
    <>
 {pacientes ? (
      <>
      <h2 className="font-black text-3xl text-center">Listado de Pacientes</h2>
      <p className="text-xl text-center mt-5 mb-10">Administra tus {''} <span className="text-indigo-600 font-bold">Pacientes y Citas</span></p>
      
      <Paciente
        paciente = {nombre}
      />
       {pacientes.map(paciente=>{
      //  console.log(paciente);
        <Paciente
          key={paciente._id}
          paciente = {paciente}
        />
       })}
     
      </>
      ):(
        <>
       <h2 className="font-black text-3xl text-center">No hay Pacientes</h2>
      <p className="text-xl text-center mt-5 mb-10">Agrega tus Pacientes y {''} <span className="text-indigo-600 font-bold"> Apareceran aquí</span></p>
        </>
      )}
    </>
   
    
  )
}

export default ListadoPacientes