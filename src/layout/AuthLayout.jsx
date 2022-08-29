import { Outlet } from "react-router-dom"
const AuthLayout = () => {
  return (
   <>
     
     <main className="container mx-auto md:grid md:grid-cols-2 mt-10 gap-8 p-15 items-center">       
        <Outlet/>
     </main> 
   </>
  )
}

export default AuthLayout