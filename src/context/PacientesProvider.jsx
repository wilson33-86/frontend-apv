import { useState,useEffect, createContext } from "react";
import clienteAxios from "../config/axios";

const PacientesContext = createContext();

export const PacientesProvider = ({children})=>{
    const [pacientes,setPacientes] = useState([]);
    const [paciente,setPaciente] = useState({});
    // useEffect(()=>{
    //     const getPacientes = async()=>{
    //         try {
    //             const token = localStorage.getItem('token');
  //                 if(!token) return
    //             const config = {
    //                 headers:{
    //                     "Content-Type":"application/json",
    //                     Authorization: `Bearer ${token}`
    //                 }
    //             }
    //             const {data} = clienteAxios('/pacientes',config)
    //             setPacientes(data);

    //         } catch (error) {
    //             console.log(error);
    //         }
    //     }
    //     getPacientes();
    // },[])

    const guardarPaciente = async(paciente)=>{
        //console.log(paciente)
        const token = localStorage.getItem('token');
    
                const config = {
                    headers:{
                        "Content-Type":"application/json",
                        Authorization: `Bearer ${token}`
                    }
                }

        if(paciente.id){
            try {
                const{data} = await clienteAxios(`/pacientes/${paciente.id}`,paciente,config);
                const pacienteUpd = pacientes.map(pacient=>{ pacient._id===data._id ? data: pacient})
                setPacientes(pacienteUpd)
            } catch (error) {
                console.log(error);
            }
        }else{
            try {
                   
                const {data} = await clienteAxios.post('/pacientes',paciente,config);
                console.log(data)
                setPacientes([data,...pacientes])
            } catch (error) {
                console.log(error.response.data.msg);
            }
        }
               
    }

    const pacienteSelecionado = paciente=>{
        setPaciente(paciente)
    }

    const eliminarPaciente = async id=>{
        const token = localStorage.getItem('token');
    
        const config = {
            headers:{
                "Content-Type":"application/json",
                Authorization: `Bearer ${token}`
            }
        }

        try {
            await clienteAxios.delete(`/pacientes/${id}`,config);
            const pacienteDelete = pacientes.filter(pacient=>{pacient.id !== id})
            setPacientes(pacienteDelete);
            
        } catch (error) {
            console.log(error)
        }

    }
    return(
        <PacientesContext.Provider
        value={{
            pacientes,
            guardarPaciente,
            pacienteSelecionado,
            paciente,
            eliminarPaciente
        }}
        >
            {children}
        </PacientesContext.Provider>
    )
}

export default PacientesContext;