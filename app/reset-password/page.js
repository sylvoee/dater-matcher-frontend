'use client';
import { FaBrain } from 'react-icons/fa';
import Navbar from '../../components/Navbar';
import { useSearchParams } from 'next/navigation';
import { PiEnvelope, PiLock} from 'react-icons/pi';


export default function ResetPasswordPage() {
  const params = useSearchParams();
  const token = params.get('token');
  return (
    <main>
      <Navbar />
      <div className="container py-5">
        <div className="row justify-content-center">
          <div className="col-12 col-md-8 col-lg-5">
            <div className="card card-soft rounded-4 p-4">
              <h3 className="fw-bold mb-3">Reset your password <FaBrain></FaBrain></h3>
              <hr/>
              <form onSubmit={e=>e.preventDefault()} className="needs-validation" noValidate>
                <input type="hidden" name="token" value={token || ""} />

                
                        <div className="mb-3">
                                   <div className='d-flex'>
                                       <div className='input-soft'><PiLock  color='black'size={28} /> 
                                       </div> 
                                       <input type="password" placeholder='New Password' className="form-control fw-bold input-soft"  
                              required />
                             
                                 </div>
                           </div>

              <div className="mb-3">
                        <div className='d-flex'>
                            <div className='input-soft'><PiLock  color='black'size={28} /> 
                            </div> 
                            <input type="password" placeholder='Confirm Password' className="form-control fw-bold input-soft"   required />
                      </div>
                </div>

                

                <div className="d-grid gap-2 mt-4">
                  <button className="btn btn-accent rounded-pill mt-2">Reset password</button>
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
