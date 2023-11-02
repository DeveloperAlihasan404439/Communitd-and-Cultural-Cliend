import { useContext } from "react";
import { AuthContext } from "../../pages/AuthProvider/AuthProviderContext/AuthProviderContext";

const useAuth = () => {
    const authUser = useContext(AuthContext)
    return authUser;
};

export default useAuth;