// import Image from 'next/image';
// import Link from 'next/link';

// export default function ProfileCard({ profile }) {
//   return (
//     <div className="card card-soft h-100 rounded-4 overflow-hidden">
//       <div className="position-relative">
//  <Image src="https://images.unsplash.com/photo-1531123897727-8f129e1688ce?q=80&w=1200&auto=format&fit=crop"
//          alt= "pix" width={600} height={400} className="img-cover" />
//         <span className="badge badge-soft position-absolute top-0 m-3 rounded-pill px-3 py-2">
//           {profile.age} • {profile.location}
//         </span>
//       </div>
//       <div className="card-body">
//         <h5 className="card-title d-flex align-items-center gap-2">
//           {profile.user.name}
//           {profile.gender === 'female' ? <span className="badge rounded-pill text-bg-warning">♀ female</span> : <span className="badge rounded-pill text-bg-info">♂ male</span>}
//         </h5>
//          <div className='row'>
//             <b className="card-text text-dark text-bold col-sm-5">From  {profile.nationality}</b>
//         <b className="card-text text-dark text-bold col-sm-6">DOB : {profile.DOB}</b>
//          </div>
//         <div className="d-flex flex-wrap gap-2 my-2">
//           {/* {profile.tags.map(t => (
//             <span key={t} className="badge rounded-pill badge-soft">{t}</span>
//           ))} */}
//         </div>
//         <div className="d-flex gap-2">
//           <Link href={`/profile/${profile._id}`} className="btn btn-sm btn-outline-light rounded-pill">View Profile</Link>
//           <Link href="/chat" className="btn btn-sm btn-accent rounded-pill">Say Hi</Link>
//         </div>
//       </div>
//     </div>
//   );
// }
