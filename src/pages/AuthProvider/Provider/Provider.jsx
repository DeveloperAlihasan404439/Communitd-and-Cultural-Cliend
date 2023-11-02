import { useContext } from "react";
import { AuthContext } from "../AuthProviderContext/AuthProviderContext";
import { Navigate, useLocation } from "react-router-dom";
import Lottie from "lottie-react";
import loding from './loafing.json'
const Provider = ({children}) => {
    const {user, loader} = useContext(AuthContext)
    const location= useLocation()
    if(user){
        return children
    }
    if(loader){
        return <div className="w-full h-full bg-[#112e45] flex items-center justify-center">
            <div className="w-[50%]">
            <Lottie
                animationData={loding}
                loop={true}
                className="w-full"
              />
            </div>
        </div>
    }
    return <Navigate state={location.pathname} to='/login'/>;
};

export default Provider;