import { useContext, createContext, useState, useEffect } from "react";

const AuthContext = createContext()


export const AuthContextProvider = ({children}) => {
    const { user1, setUser1} = useState('Michael')

    return (
    <AuthContext.Provider value={ user1 }>{children}</AuthContext.Provider>
    )
}

export const UserAuth = () => {
    return useContext(AuthContext)
}