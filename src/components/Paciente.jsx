import usePacientes from "../hooks/usePacientes";

const Paciente = ({paciente}) => {
    //  console.log(paciente)
     const {nombre,email,fecha, sintomas,propietario,_id}=paciente;
    //  const formatearFecha = fecha =>{
    //     const nuevaFec = new Date(fecha);
    //     return new Intl.DateTimeFormat('es-MX',{dateStyle:'long'}).format(nuevaFec)
    //  }
    const {pacienteSelecionado,eliminarPaciente} = usePacientes();
  return (
   <>
   <div className="bg-white mx-5 my-10 px-5 py-10 shadow-md rounded-xl">
     <p className="text-indigo-700 uppercase font-bold my-2">Nombre: {''}<span className="font-normal normal-case text-black">{nombre}</span></p>
     <p className="text-indigo-700 uppercase font-bold my-2">Propietario: {''}<span className="font-normal normal-case text-black">{propietario}</span></p>
     <p className="text-indigo-700 uppercase font-bold my-2">Email: {''}<span className="font-normal normal-case text-black">{email}</span></p>
     {/* <p className="text-indigo-700 uppercase font-bold my-2">Fecha de alta: {''}<span className="font-normal normal-case text-black">{formatearFecha(fecha)}</span></p> */}
     <p className="text-indigo-700 uppercase font-bold my-2">Sintomas: {''}<span className="font-normal normal-case text-black">{sintomas}</span></p>
   <div className="flex justify-between my-5">
    <button
    type="button"
    className="bg-indigo-600 text-white px-10 py-2 rounded-lg font-bold uppercase hover:bg-indigo-700"
    onClick={()=>pacienteSelecionado(paciente)}
    >
        Editar
    </button>
    <button
    type="button"
    className="bg-red-600 text-white px-10 py-2 rounded-lg font-bold uppercase hover:bg-red-700"
    onClick={()=>eliminarPaciente(_id)}
    >
        Eliminar
    </button>
   </div>
   </div>   
   </>
  )
}

export default Paciente;