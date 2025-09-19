'use client';
import { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import Image from "next/image";


// import ProfileCard from '../components/ProfileCard';
// import FilterBar from '../components/FilterBar';

import { FaHeart } from 'react-icons/fa';
import Link from 'next/link';


export default function HomePage() {

  console.log("API URL " , process.env.NEXT_PUBLIC_API_URL);
  let myUrl = `http://localhost:8000/profiles?api_key=${encodeURIComponent(process.env.NEXT_PUBLIC_APIKEY)}` ;
  //let myUrl = `${process.env.NEXT_PUBLIC_API_URL}/profiles?api_key=${encodeURIComponent(process.env.NEXT_PUBLIC_APIKEY)}` ;

  const [profiles, setProfiles] = useState([]);
  const [filtered, setFiltered] = useState([]);

  useEffect(() => {
      // fetch - get login status
  
    fetch(myUrl, {credentials : "include"} )
    .then(res => res.json()).then(data => {
      // console.log(data);
      setProfiles(data);
      // setFiltered(data.docs);
    }).catch((err)=> {
      console.log(err + " Error fetching data");
    });
  }, []);

  // const handleFilter = ({ q, gender, minAge, maxAge }) => {
  //   const Q = (q || '').toLowerCase();
  //   const res = profiles.filter(p => {
  //     const matchesText = [p.name, p.location, p.bio, ...(p.tags||[])].join(' ').toLowerCase().includes(Q);
  //     const matchesGender = gender === 'Any' ? true : p.gender === gender;
  //     const matchesAge = p.age >= minAge && p.age <= maxAge;
  //     return matchesText && matchesGender && matchesAge;
  //   });
  //   setFiltered(res);
  // };

  return (
    <main>
      <Navbar />
      <header className="container py-5 text-center">
        <h1 className="display-5 fw-bold">Find your kind of spark <FaHeart color='pink'/> </h1>
        <p className="lead text-secondary">Swipe through real people nearby. Filter by vibe, match, and start chatting.</p>
      </header>

      {/* <section className="container mb-4">
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
      </section> */}


    {/* profile cards */}

    <div className='row p-3'>
      {
        profiles.map((profile)=>(
           <div key={profile._id} className="col-sm-3 p-2 card card-soft h-100 rounded-4 overflow-hidden">
          <div className="position-relative">
            {/* <Image src="https://images.unsplash.com/photo-1531123897727-8f129e1688ce?q=80&w=1200&auto=format&fit=crop"
            alt= "pix" width={400} height={400} className="img-cover" /> */}
             <Image  src={`http://localhost:8000/profiles/${profile.profilePix}`}
            alt= "pix" width={400} height={400} className="img-cover" />
            <span className="badge badge-soft position-absolute top-2 m-3 rounded-pill px-3 py-2">
              {profile.age} • {profile.location}
            </span>
          </div>
          <div className="card-body">
            <h5 className="card-title d-flex align-items-center gap-3">
              {profile.user.fName}
              {profile?.gender === 'female' ? <span className="badge rounded-pill text-bg-warning">♀ female</span> : <span className="badge rounded-pill text-bg-info">♂ male</span>}
            </h5>
            <div className='row'>
                <b className="card-text text-dark text-bold col-sm-5">From  {profile.nationality}</b>
            <b className="card-text text-dark text-bold col-sm-6">DOB : {profile?.DOB}</b>
            </div>
            <div className="d-flex flex-wrap gap-3 my-2">
              {/* {profile.tags.map(t => (
                <span key={t} className="badge rounded-pill badge-soft">{t}</span>
              ))} */}
            </div>
            <div className="d-flex gap-3">
              <Link href={`/profile/${profiles._id}`} className="btn btn-sm btn-outline-light rounded-pill">View Profile</Link>
              <Link href="/chat" className="btn btn-sm btn-accent rounded-pill">Say Hi</Link>
            </div>
          </div>
          <hr/>
    </div>
    
        ))
      }
    </div>

    </main>
  );
}
