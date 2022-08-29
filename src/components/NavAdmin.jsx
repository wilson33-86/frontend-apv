import { Link } from "react-router-dom"

const NavAdmin = () => {
  return (
    <>
    <nav className="flex gap-4">
        <Link
        to="/admin/perfil"
        className="text-gray-500 font-bold uppercase"
        >
        Perfil
        </Link> 

        <Link
        to="/admin/cambiar-password"
        className="text-gray-500 font-bold uppercase"
        >
       Cambiar Password
        </Link> 
    </nav>
    </>
   
  )
}

export default NavAdmin