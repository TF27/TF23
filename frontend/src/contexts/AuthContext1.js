import { useContext, createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, signInWithPopup, signOut, onAuthStateChanged} from "firebase/auth";
import {auth} from '../Firebase'
// import { useNavigate } from "react-router-dom";

const AuthContext1 = createContext()

export const AuthContext1Provider = ({children}) => {

    const [user1, setUser] = useState({});
    // const navigate = useNavigate();

    const googleSignIn = ()  => {
        const provider = new GoogleAuthProvider();
         signInWithPopup(auth, provider)
        //  navigate('/workshops');
    }

    const logOut = () => {
        signOut(auth)
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            // console.log('user', currentUser)
            // navigate('/workshops')
        });
        return ()  => {
            unsubscribe()
        }
    }, [])

    return (
        <AuthContext1.Provider value={{ googleSignIn, logOut, user1 }}>
            {children}
        </AuthContext1.Provider>
    )

}

export const UserAuth1 = () => {
    return useContext(AuthContext1)
}