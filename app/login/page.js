'use client';
import Navbar from '../../components/Navbar';
import { useSearchParams } from 'next/navigation';
import { useState } from "react";
import { useAuth } from "../context/AuthContext";

import { RiLockPasswordFill } from 'react-icons/ri';
import { AiOutlineUserAdd } from 'react-icons/ai';
import { PiEnvelope, PiLock} from 'react-icons/pi';
import { FaSignInAlt } from 'react-icons/fa';
import Link from 'next/link';



export default function LoginPage() {
  
       
  const { login, loading, error, user } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    await login(email, password);
  }


return (
    <>
    <Navbar />
    <div className = "py-5 shadow card card-soft rounded-4 p-3 mt-4" style={{ maxWidth: "400px", margin: "auto" }}>
      <h3 className="fw-bold mb-2 text-center">Login  <FaSignInAlt /> </h3>
      <hr/>
      {user && <p>Welcome, {user.fName}!</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}
      <form  onSubmit={handleSubmit}>

      <div className="mb-3">
        <div className='d-flex'>
          <div className='input-soft'><PiEnvelope  color='black'size={28} /> 
          </div> 
          <input type="email"placeholder='Email' className="form-control fw-bold input-soft"   value={email}
          onChange={(e) => setEmail(e.target.value)} required />
      </div>
      </div>

      
      <div className="mb-3">
              <div className='d-flex'>
                  <div className='input-soft'><PiLock  color='black'size={28} /> 
                  </div> 
                  <input type="password" placeholder='password' className="form-control fw-bold input-soft"  value={password}
          onChange={(e) => setPassword(e.target.value)} required />
            </div>
      </div>
       
   
        <button className='btn btn-accent rounded-pill w-100 mt-4' type="submit" disabled={loading}>
          {loading ? "Logging in..." : "Login"}
        </button>
      </form>

       <div className='other links mt-4'>
            <Link className='text-decoration-none text-dark m-3' href="/signup">Register <AiOutlineUserAdd/></Link>
            <Link className='text-decoration-none text-dark m-3' href="/confirm-email">Forget Password <RiLockPasswordFill /> </Link>
         </div>
    </div>
    </>
  );
}