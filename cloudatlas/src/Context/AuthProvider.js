import React ,{useEffect, useState}from 'react'
import { useNavigate } from "react-router-dom";
import { auth } from '../firebase/config'
import { onAuthStateChanged  } from 'firebase/auth';
import{Spin} from 'antd'

export const AuthContext = React.createContext();

//children is props
export default function AuthProvider({children}) {
    const [user, setUser] = useState({});
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(true);
    //mong muon bien users sau khi dang nhap thanh cong se truyen cho tat ca cac component trong app, de tu bat ky app nao
    //cung co the truy xuat den thong tin cua user => su dung contextAPI

    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, (user) => {
          //console.log({user}); this is to title user:...
            // console.log({user});
            if (user) {
                const {displayName, email, uid, photoURL} = user;
                setUser({
                    displayName, email, uid, photoURL
                });
                setIsLoading(false);
                navigate('/');
                return;
            }
            //reset user info
            setUser({})
            setIsLoading(false);
            navigate('/login');
          });
          
          //clean function
          return () => {
            unsubscribed();
          }
    },[navigate])
    //
  return (
    //value is props
    <AuthContext.Provider value={{user}}>
        {isLoading ? <Spin/> : children}
    </AuthContext.Provider>
  )
}
