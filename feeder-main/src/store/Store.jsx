import { createContext, useContext, useEffect, useState } from "react";

export const AuthContext = createContext()






export  const AuthProvider = ({children}) => {

    const [token,setToken] = useState(localStorage.getItem("token"))
    const [user,setUser] = useState("")

    function storetokenInLS (serverToken)  {

        setToken(serverToken)
        return localStorage.setItem("token",serverToken)
    }

    let isLoogedin = !!token

    const Logoutuser = ()=>{
        setToken("")
        return localStorage.removeItem("token")
    }

    const userAuthorization = async()=>{
        try {
            // console.log(token);
            const response =  await fetch(`${window.location.origin}/api/auth/user`,{
                method:"GET",
                headers:{
                    Authorization:token
                },
            })
            if (response.ok) {
                const data = await response.json()
                // console.log("User data : ",data.userData);
                setUser(data.userData)
            }else{
                const err = await response.json()

                console.log("Error in response user: ",err);
            }
        } catch (error) {
            console.error("Error fetching user data",error);
        }
    }
    
    useEffect(()=>{
        userAuthorization();
    },[token])
    
    return <AuthContext.Provider value = {{token, user,isLoogedin, storetokenInLS,Logoutuser }}>

        {children}
    </AuthContext.Provider> 
}


export const useAuth = async()=>{
    const checkauth= await useContext(AuthContext)
    if (!checkauth) {
        console.log("Throw error not auth");
    }
   
    return checkauth
}