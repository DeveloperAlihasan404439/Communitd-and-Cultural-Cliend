import { createContext, useEffect, useState } from "react";
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from "../Firebase/Firebase";

import useAxios from "../../../companent/Hooks/useAxios";

export const AuthContext = createContext(null)
const auth = getAuth(app)
const AuthProviderContext = ({children}) => {
    const [user, setUser] = useState(null)
    const [loader, setLoader] = useState(true)
    const googleProvider = new GoogleAuthProvider()
    const githubProvider = new GithubAuthProvider()
    const axiosScuery = useAxios()
    const createUser = (email, pass) =>{
        setLoader(true)
        return createUserWithEmailAndPassword(auth, email, pass)
    }
    const loginUser = (email, pass)=>{
        setLoader(true)
        return signInWithEmailAndPassword(auth, email, pass)
    }
    const googleUser = () =>{
        setLoader(true)
        return signInWithPopup(auth,googleProvider)
    }
    const githubUser = ()=>{
        setLoader(true)
        signInWithPopup(auth,githubProvider )
    }
    const logOutUser =()=>{
        return signOut(auth)
    }
    useEffect(()=>{
       const unsubscrib =  onAuthStateChanged(auth, crrent =>{
        const crrentUsers = crrent?.email || user?.email

        setUser(crrent)
        setLoader(false)
         if(crrentUsers){
            axiosScuery.post('/jwt',{crrentUsers})
            .then(res => console.log(res.data))
            // axios.post('http://localhost:5000/jwt',{crrentUsers}, {withCredentials: true})

        }
        else{
            axiosScuery.post('/loger',{crrentUsers})
            .then(res => console.log(res.data))
            // axios.post('http://localhost:5000/loger',{crrentUsers}, {withCredentials: true})
            // .then(res => console.log(res.data))
        } 
        })
        return ()=>{
            unsubscrib()
        }
    })
    const authinfo = {
        user,
        loader,
        createUser,
        loginUser,
        googleUser,
        githubUser,
        logOutUser,
    }
    return (
        <AuthContext.Provider value={authinfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProviderContext;