'use client';
import Navbar from '../../components/Navbar';
import { useSearchParams } from 'next/navigation';
export default function ForgotPasswordPage() {
  const params = useSearchParams();
  const token = params.get('token');
  return (
    <main>
      <Navbar />
      <div className="container py-5">
        <div className="row justify-content-center">
          <div className="col-12 col-md-8 col-lg-5">
            <div className="card card-soft rounded-4 p-4">
              <h3 className="fw-bold mb-3">Forgot password?</h3>
              <form onSubmit={e=>e.preventDefault()} className="needs-validation" noValidate>


                <div className="mb-3">
                  <label className="form-label">Email</label>
                  <input type="email" className="form-control input-soft" required />
                </div>

                <p className="small text-secondary mb-3">We will send a secure link to your email.</p>
                <div className="d-grid gap-2">
                  <button className="btn btn-accent rounded-pill">Send reset link</button>
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
