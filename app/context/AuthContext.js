"use client";

import { createContext, useState, useContext } from "react";

// Create context
const AuthContext = createContext();

// Context Provider
export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);       // store logged-in user data
  const [loading, setLoading] = useState(false); // loading state
  const [error, setError] = useState(null);      // error messages


  // fetch - get login status
  let myUrl = `http://localhost:8000?api_key=${encodeURIComponent(process.env.NEXT_PUBLIC_APIKEY)}` ;
  //let myUrl = `${process.env.NEXT_PUBLIC_API_URL}?api_key=${encodeURIComponent(process.env.NEXT_PUBLIC_APIKEY)}` ;
  let fetchLoginStatus = async()=>{
     let res = await fetch(myUrl, {credentials : "include"});
     let data = await res.json()
     console.log("Login Status - " , data)
  
  }

  // call method
   fetchLoginStatus();

  

  // fetch - get login status
  let logoutUrl = `http://localhost:8000/logout?api_key=${encodeURIComponent(process.env.NEXT_PUBLIC_APIKEY)}` ;
  //let myUrl = `${process.env.NEXT_PUBLIC_API_URL}?api_key=${encodeURIComponent(process.env.NEXT_PUBLIC_APIKEY)}` ;
  let logout = async()=>{
     let res = await fetch(logoutUrl, {credentials:"include"});
     let data = await res.json()
     console.log("From check-login-status - "  , data )
  
  }

  // call method
  //  logout();


  // Login function
  async function login(email, password) {
    setLoading(true);
    setError(null);
    try {
   
      //  let url = `${process.env.NEXT_PUBLIC_API_URL}/login?api_key=${encodeURIComponent(process.env.NEXT_PUBLIC_APIKEY)}` ;
      let url = `http://localhost:8000/login?api_key=${encodeURIComponent(process.env.NEXT_PUBLIC_APIKEY)}` ;
      console.log("URL : " + url)
    
      const res = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
        credentials: "include", // ✅ tells browser to send/receive cookies
      }); 
      if (!res.ok) {
        throw new Error("Invalid credentials");
      }

      const data = await res.json();
      setUser(data.user); // store user data from API
      return data;
      // console.log(data)
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  } 

  // this is settng all the variables in AuthContext to make it available to every page
  return (
    <AuthContext.Provider value={{ user, loading, error, login }}>
      {children}
    </AuthContext.Provider>
  );
}




// Hook to use auth context
export function useAuth() {
  return useContext(AuthContext);
}