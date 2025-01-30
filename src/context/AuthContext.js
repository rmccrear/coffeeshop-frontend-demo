import  { createContext, useContext } from 'react';

import useAuthHook from "@/hooks/auth";

const AuthContext = createContext();

export function AuthProvider({children}) {
  const {  user, token, isAuthenticated } = useAuthHook();

  return (
    <AuthContext.Provider value={{ user, token, isAuthenticated }} >
      {children}
    </AuthContext.Provider>
  );

}

export const useAuth = () => { return useContext(AuthContext) };