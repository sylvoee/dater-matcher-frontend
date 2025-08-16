'use client';
import Navbar from '../../components/Navbar';
import ChatUI from '../../components/ChatUI';

export default function ChatPage() {
  return (
    <main className="d-flex flex-column" style={{minHeight: '100vh'}}>
      <Navbar />
      <div className="container my-4 flex-grow-1">
        <div className="row justify-content-center">
          <div className="col-12 col-md-8 col-lg-6">
            <div className="card card-soft rounded-4">
              <ChatUI />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
