import { useContext, useEffect } from "react"
import { Navigate } from "react-router-dom"
import { AuthContext } from "../../store/Store"


const Logout = ()=>{
    const {Logoutuser} = useContext(AuthContext)
    useEffect(()=>{
        Logoutuser();
    },[Logoutuser])

    return <Navigate to={"/login"} />
}

export default Logout