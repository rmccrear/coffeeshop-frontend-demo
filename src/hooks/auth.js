import {useState, useEffect } from "react";

export default function useAuth(){
  const [user, setUser] = useState();
  const [token, setToken] = useState();
  const [isAuthenticated, setIsAuthenticated] = useState( false );

  function logout() {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setToken(null);
    setUser(null);
    setIsAuthenticated(false);
  }

  useEffect(()=>{
    console.log("Getting user and token from local storage");
    const t = localStorage.getItem("token");
    setToken(t);
    const u = localStorage.getItem("user");
    if(u) {
      setUser(JSON.parse(u));
    }
    // ?? How to set isAuthenticated ??
    if(t) {
      setIsAuthenticated(true);
    }
  }, []);

  return { user, token, isAuthenticated, logout }
}
