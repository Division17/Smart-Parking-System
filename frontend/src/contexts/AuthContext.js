import { createContext, useContext } from 'react'

export const AuthContext = createContext({
    isAuthenticated: false,
})



export default function useAuth(){
    return useContext(AuthContext)
}
