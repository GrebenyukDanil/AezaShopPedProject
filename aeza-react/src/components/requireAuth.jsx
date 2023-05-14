import { useStore } from "effector-react";
import { Navigate } from "react-router-dom";
import { $AuthInfo } from "../effector/login";

const RequireAuth = ({children} ) =>{
    const auths = useStore($AuthInfo)
    
 
    if (auths.auth) {
        return <Navigate to = '/' ></Navigate>
    }

    return children
}
export {RequireAuth}
