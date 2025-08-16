'use client';
import { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import ProfileCard from '../components/ProfileCard';
import FilterBar from '../components/FilterBar';
import { FaHeart } from 'react-icons/fa';


export default function HomePage() {

  console.log("API URL " , process.env.NEXT_PUBLIC_API_URL);

  const [profiles, setProfiles] = useState([]);
  const [filtered, setFiltered] = useState([]);

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/all-profile`).then(res => res.json()).then(data => {
      console.log(data.docs);
      setProfiles(data.docs);
      setFiltered(data.docs);
    });
  }, []);

  const handleFilter = ({ q, gender, minAge, maxAge }) => {
    const Q = (q || '').toLowerCase();
    const res = profiles.filter(p => {
      const matchesText = [p.name, p.location, p.bio, ...(p.tags||[])].join(' ').toLowerCase().includes(Q);
      const matchesGender = gender === 'Any' ? true : p.gender === gender;
      const matchesAge = p.age >= minAge && p.age <= maxAge;
      return matchesText && matchesGender && matchesAge;
    });
    setFiltered(res);
  };

  return (
    <main>
      <Navbar />
      <header className="container py-5 text-center">
        <h1 className="display-5 fw-bold">Find your kind of spark <FaHeart color='pink'/> </h1>
        <p className="lead text-secondary">Swipe through real people nearby. Filter by vibe, match, and start chatting.</p>
      </header>

      <section className="container mb-4">
        <FilterBar onFilter={handleFilter} />
      </section>

      <section className="container pb-5">
        <div className="row g-4">
          {filtered.map(p => (
            <div key={p._id} className="col-12 col-sm-6 col-lg-4">
              <ProfileCard profile={p} />
            </div>
          ))}
          {filtered.length === 0 && (
            <div className="text-center text-secondary py-5">No matches found. Try adjusting filters.</div>
          )}
        </div>
      </section>
    </main>
  );
}
