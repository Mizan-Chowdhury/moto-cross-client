import { createContext, useState } from "react";
import auth from "../../firebase.config";
import { GoogleAuthProvider, createUserWithEmailAndPassword, signInWithPopup } from "firebase/auth";
const provider = new GoogleAuthProvider();


export const AuthContext = createContext();

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loader, sedLoader] = useState(true);

    const googleSignIn = () =>{
       return signInWithPopup(auth, provider);
    }

    const createUser = (email, password) =>{
        return createUserWithEmailAndPassword(auth,email,password);
    }
    


    const authInfo = {
        user,
        loader,
        googleSignIn,
        createUser,

    }



  return <AuthContext.Provider value={authInfo}>
    {children}
  </AuthContext.Provider>;
};

export default AuthProvider;
