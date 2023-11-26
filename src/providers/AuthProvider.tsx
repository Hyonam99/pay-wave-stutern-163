/* eslint-disable react/prop-types */
import React, { createContext, ReactNode } from 'react';
import {jwtDecode} from "jwt-decode"
import { DecryptedToken } from 'interfaces/Types';

export const AuthContext = createContext<{token: string | null, decryptedToken: DecryptedToken}>({token: "", decryptedToken: {userId: 0, exp: 0, iat: 0}});

export const AuthProvider = ({ children }: {children: ReactNode}) => { 
    const token = localStorage.getItem('paywave-token')
    let decryptedToken: DecryptedToken = {userId: 0, exp: 0, iat: 0}
    if (token) {
        decryptedToken = jwtDecode(token as string)
    }

    return (
        <AuthContext.Provider
            value={{
                token,
                decryptedToken
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};
