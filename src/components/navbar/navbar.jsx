import React from "react";
import './navbar.scss';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from "react-router-dom";

const Navbar = () => {
   return (
      <nav className="navbar navbar-expand-lg">
         <div className="container-fluid">
            <Link className="navbar-brand nav-name" to="/about">Cecilia Rossi-Garc&iacute;a</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
               {/* <span className="navbar-toggler-icon"></span> */}
               <MenuIcon/>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
               <div className="navbar-nav">
                  <Link to="/about" className="nav-link">about</Link>
                  <Link to="/projects" className="nav-link">projects</Link>
                  <Link to="/contact" className="nav-link">contact</Link>
               </div>
            </div>
         </div>
      </nav>
   )
}

export default Navbar;