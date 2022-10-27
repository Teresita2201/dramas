import * as React from 'react';
import { signOut } from 'firebase/auth';
import { auth } from '../fire';
import Ruta from '../Rutas/Ruta';

export default function home({
    user,
    setAuthState,
    setUser
}) {
 
    
    const signOutHandler = () => {
        signOut(auth)
        .then(() => {
            setUser(null);
            setAuthState('login');
        })
        .catch((err) => console.log(err));
    }

    

    return (
        <div>

<Ruta/>

        </div>
       
            
            
          

       
    )
}