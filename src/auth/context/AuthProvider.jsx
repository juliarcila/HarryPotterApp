
import React, { useEffect, useReducer, useState } from 'react'
import { types } from '../types/types'
import { AuthContext } from './AuthContext'
import { authReducer } from './authReducer'


const init = () => {
    const user = JSON.parse(localStorage.getItem('user'));

    return {
        logged: !!user, 
        user,
    }
}

export const AuthProvider = ({ children }) => {

    const [state, dispatch] = useReducer(authReducer, {}, init);
    const [inputName, setInputName] = useState('');

    const login = ( name = '' ) => {
        const user = {id: new Date().getTime(), name};
        const action = {
            type: types.login,
            payload: user,
        }
        
        dispatch(action);
        localStorage.setItem('user', JSON.stringify( user ));        
    };

    const logout = () =>{
        const action = {
            type: types.logout,
        }

        localStorage.removeItem('user');
        dispatch(action);
    };

    return (
        <AuthContext.Provider value={{
            ...state,
            login,
            logout,
            inputName,
            setInputName,
        }}>
            {children}
        </AuthContext.Provider>
    )
}
