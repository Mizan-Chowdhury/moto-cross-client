import { createContext, useEffect, useState } from "react";
import auth from "../../firebase.config";
import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
const provider = new GoogleAuthProvider();


export const AuthContext = createContext();

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loader, setLoader] = useState(true);

    const googleSignIn = () =>{
      setLoader(true);
       return signInWithPopup(auth, provider);
    }

    const createUser = (email, password) =>{
      setLoader(true);
        return createUserWithEmailAndPassword(auth,email,password);
    }

    const signInUser = (email,password)=>{
      setLoader(true);
      return signInWithEmailAndPassword(auth, email,password)
    }

    const updateUserProfile = (name, photo) =>{
      setLoader(true);
      return updateProfile(auth.currentUser, {
        displayName: name, photoURL: photo
      })
    }

    const logOut = () =>{
      setLoader(true);
      return signOut(auth);
    }
    
    useEffect(()=>{
      const unsubscribe = onAuthStateChanged(auth, (currentUser)=>{
        setUser(currentUser);
        setLoader(false);

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
