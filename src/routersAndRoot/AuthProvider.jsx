import { createContext, useEffect, useState } from "react";
import auth from "../../firebase.config";
import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
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

    const signInUser = (email,password)=>{
      return signInWithEmailAndPassword(auth, email,password)
    }

    const updateUserProfile = (name, photo) =>{
      return updateProfile(auth.currentUser, {
        displayName: name, photoURL: photo
      })
    }

    const logOut = () =>{
      return signOut(auth);
    }
    
    useEffect(()=>{
      const unsubscribe = onAuthStateChanged(auth, (currentUser)=>{
        setUser(currentUser);
      })
      return () => {
        unsubscribe()
      }
    },[])


    const authInfo = {
        user,
        loader,
        googleSignIn,
        createUser,
        signInUser,
        updateUserProfile,
        logOut,
    }



  return <AuthContext.Provider value={authInfo}>
    {children}
  </AuthContext.Provider>;
};

export default AuthProvider;
