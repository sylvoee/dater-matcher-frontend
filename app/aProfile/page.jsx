// import Navbar from '../../../components/Navbar';
import Navbar from '/components/Navbar';
import Image from 'next/image';
import profiles from '../../../data/profiles.json';



export default function ProfilePage({ params }) {
  const profile = profiles.find(p => p.id === params.id);
  if (!profile) {
    return (
      <main>
        <Navbar />
        <div className="container py-5">
          <div className="alert alert-warning rounded-4">Profile not found.</div>
        </div>
      </main>
    );
  }
  return (
    <main>
      <Navbar />
      <div className="container py-4">
        <div className="row g-4">
          <div className="col-12 col-lg-5">
            <div className="card card-soft rounded-4 overflow-hidden">
              <Image src={profile.image} alt={profile.name} width={1000} height={900} className="w-100" style={{objectFit:'cover', maxHeight: 520}} />
            </div>
          </div>
          <div className="col-12 col-lg-7">
            <div className="card card-soft rounded-4 p-4 h-100">
              <h2 className="fw-bold mb-1">{profile.name} <span className="fs-5 text-secondary">• {profile.age}</span></h2>
              <div className="mb-3 text-secondary">{profile.location}</div>
              <p className="mb-3">{profile.bio}</p>
              <div className="d-flex flex-wrap gap-2 mb-4">
                {profile.tags.map(t => <span key={t} className="badge rounded-pill badge-soft">{t}</span>)}
              </div>
              <div className="d-flex gap-2">
                <a href="/chat" className="btn btn-accent rounded-pill px-4">Start Chat</a>
                <a href="/" className="btn btn-outline-light rounded-pill">Back</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
