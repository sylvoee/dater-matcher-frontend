'use client';
import { FaBrain, FaEnvelope } from 'react-icons/fa';
import Navbar from '../../components/Navbar';
import { useSearchParams } from 'next/navigation';
import { PiEnvelope, PiLock} from 'react-icons/pi';
import { BiMailSend } from 'react-icons/bi';
import { AiOutlineUserAdd } from 'react-icons/ai';
import Link from 'next/link';


export default function ConfirmEmailPage() {
  const params = useSearchParams();
  const token = params.get('token');
  return (
    <main>
      <Navbar />
      <div className="container py-5">
        <div className="row justify-content-center">
          <div className="col-12 col-md-8 col-lg-5">
            <div className="card card-soft rounded-4 p-4">
              <h3 className="fw-bold mb-3 text-center p-2">Confirm Email <BiMailSend /> </h3>
              <hr/>
              <form onSubmit={e=>e.preventDefault()} className="needs-validation" noValidate>
                <input type="hidden" name="token" value={token || ""} />

                
                        <div className="mb-3">
                                   <div className='d-flex'>
                                       <div className='input-soft'><FaEnvelope  color='black'size={28} /> 
                                       </div> 
                                       <input type="email" placeholder='Enter Your Email' className="form-control fw-bold input-soft"  
                              required />
                             
                                 </div>
                           </div>
                     

                <div className="d-grid gap-2 mt-4">
                  <button className="btn btn-accent rounded-pill mt-2">Submit Email</button>
                </div>
                <div className='other links mt-4'>
                  
                <Link className='text-decoration-none text-dark m-3' href="/signup">Register <AiOutlineUserAdd/></Link>

                </div>
                <div className="d-flex justify-content-between mt-3 small">
                  
                  <Link href="/login">Back to login</Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
