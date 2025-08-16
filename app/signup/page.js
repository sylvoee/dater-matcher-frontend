'use client';

import Navbar from '../../components/Navbar';
import { useSearchParams } from 'next/navigation';
import { FaNoteSticky, FaUserPlus, FaSignInAlt  } from 'react-icons/fa6';
import { RiLockPasswordFill } from 'react-icons/ri';
import { PiEnvelope, PiLock, PiUser } from 'react-icons/pi';
import { MdLogin } from 'react-icons/md';
import Link from 'next/link';



export default function SignupPage() {
  const params = useSearchParams();
  const token = params.get('token');
  return (
    <main>
      <Navbar />
      <div className="container py-5">
        <div className="row justify-content-center">
          <div className="col-12 col-md-8 col-lg-5">
            <div className="card card-soft rounded-4 p-4">
              <h3 className="fw-bold mb-3 p-3"> Create your account <FaNoteSticky /></h3>
              <hr/>
              <form onSubmit={e=>e.preventDefault()} className="needs-validation" noValidate>

                <div className="mb-2">
                <div className='d-flex'>
                     <div className='input-soft'><FaUserPlus  color='black'size={28} /> 
                     </div> <input type="text"placeholder='Name' className="form-control fw-bold input-soft" required />
                </div>
                </div>

                <div className="mb-3">
                  <div className='d-flex'>
                     <div className='input-soft'><PiEnvelope  color='black'size={28} /> 
                     </div> <input type="email"placeholder='Email' className="form-control fw-bold input-soft" required />
                </div>
                  </div>

                <div className="mb-3">
                  <div className='d-flex'>
                     <div className='input-soft'><PiLock  color='black'size={28} /> 
                     </div> <input type="password" placeholder='password' className="form-control fw-bold input-soft" required />
                </div>
                  </div>

                     <div className="mb-3">
                  <div className='d-flex'>
                     <div className='input-soft'><PiLock  color='black'size={28} /> 
                     </div> <input type="password" placeholder='Confirm Password' className="form-control fw-bold input-soft" required />
                </div>
                  </div>

                <div className="d-grid gap-2 mt-5">
                  <button className="btn btn-accent rounded-pill"> <FaUserPlus />  Create account</button>
                </div>
               
                <div className='other links mt-4'>
            <Link className='text-decoration-none text-dark m-3' href="/login">Login <MdLogin /> </Link>
            <Link className='text-decoration-none text-dark m-3' href="/reset-password">Forget Password <RiLockPasswordFill /> </Link>
               </div>

                <div className="d-flex justify-content-between mt-3 small">
                  <a href="/login">Back to login</a>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
