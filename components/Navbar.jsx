import Link from "next/link";
import { useAuth } from "../app/context/AuthContext";


const Navbar = () =>{
 const{user} = useAuth();

    return(
        <>
        
 <nav className ="navbar navbar-expand-lg bg-body-tertiary">
  <div className ="container-fluid">
    <a className ="navbar-brand" href="/">Navbar</a>
    <button className ="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className ="navbar-toggler-icon"></span>
    </button>
    <div className ="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className ="navbar-nav me-auto mb-2 mb-lg-0">
        <li className ="nav-item">
          <a className ="nav-link active" aria-current="page" href="/">Home</a>
        </li>
        <li className ="nav-item">
          <a className ="nav-link" href="#">Link</a>
        </li>
       
       
      </ul>

      <li className ="nav-item dropdown list-group-item">
          <a className ="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            {user?.fullName}
          </a>
          <ul className ="dropdown-menu ">
            <li><Link className ="dropdown-item" href= "/login"> Login </Link></li>
            <li><Link className ="dropdown-item" href= "/register"> Signup </Link></li>
            <li><Link className ="dropdown-item" href= "/createPost"> Create Post </Link></li>
            <li><Link className ="dropdown-item" href= "/logout"> Logout </Link></li>
            
          </ul>
        </li>
     
    </div>
  </div>
</nav>
       
        </>
    );
}
export default Navbar