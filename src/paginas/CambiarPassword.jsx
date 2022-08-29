import NavAdmin from "../components/NavAdmin"
import { useState } from "react";
import Alertas from "../components/Alertas";
import useAuth from "../hooks/useAuth";

const CambiarPassword = () => {
  const [alerta,setAlerta] = useState({})
  const [password,setPassword] = useState({
    passwordActual:'',
    nuevoPassword:''
  })
const {savePasswNew} = useAuth();

const handleSubmit = async e=>{
    e.preventDefault();
    if(Object.values(password).some(passw=> passw==='')){
      setAlerta({msg:'Todos los campos son Obligatorios',error:true});
      return;
    }
    if(password.nuevoPassword.length <6){
      setAlerta({msg:'El password debe tener minimo 6 caracteres',error:true});
      return;
    }

   const res = await savePasswNew(password)
   setAlerta(res)
  }
  const {msg} = alerta;
  return (
    <>
    <NavAdmin/>
    <h2 className="text-center mt-10 text-3xl font-black">Cambiar Password</h2>
    <p className="text-center text-xl mt-5 mb-10">Modifica tu {''}<span className="text-indigo-600 font-bold">Password Aquí</span></p>
    <div className="flex justify-center">
      <div className="w-full md:w-1/2 bg-white rounded-lg p-5 shadow">
        {msg && <Alertas
         alerta={alerta}
        />}
        <form onSubmit={handleSubmit}>
            <div className="my-3">
              <label className="uppercase text-gray-600 font-bold">Password Actual</label>
              <input
              type="password"
              name="passwordActual"
              className="border bg-gray-50 w-full rounded-lg p-2 mt-5"
              placeholder="Escribe tu password actual"
              onChange={e=>setPassword({
                ...password,
                [e.target.name]: e.target.value
              })}
              />
           
            </div>
            <div className="my-3">
              <label className="uppercase text-gray-600 font-bold">Nuevo Password</label>
              <input
              type="password"
              name="nuevoPassword"
              className="border bg-gray-50 w-full rounded-lg p-2 mt-5"
              placeholder="Escribe tu nuevo password"
              onChange={e=>setPassword({
                ...password,
                [e.target.name]: e.target.value
              })}
              />
           
            </div>
              <input
              type="submit"
              value="Actualizar Password"
              className="bg-indigo-700 px-10 py-3 font-bold w-full text-white mt-5 rounded-lg uppercase"
              />
         
        </form>
      </div>
    </div>
    </>
  )
}

export default CambiarPassword