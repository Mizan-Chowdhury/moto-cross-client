import { useContext } from "react";
import { AuthContext } from "./AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRouter = ({children}) => {
    const {user} = useContext(AuthContext);
    const location = useLocation();

    if(user){
        return children;
    }

    console.log(location)
    return <Navigate state={location.pathname} to={'/login'}></Navigate>
};

export default PrivateRouter;