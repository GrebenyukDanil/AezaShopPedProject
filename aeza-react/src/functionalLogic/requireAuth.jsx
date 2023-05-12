import { useStore } from "effector-react";
import { useLocation, Navigate } from "react-router-dom";
import { $AuthInfo } from "../effector";

const RequireAuth = ({children} ) =>{
    const auths = useStore($AuthInfo)
    
 
    if (auths.auth) {
        return <Navigate to = '/' ></Navigate>
    }

    return children
}
export {RequireAuth}
