import { Link } from 'react-router-dom'
import "./navbar.css" 
 import logo from "../assets/logo.svg"
import {  useState  } from 'react'


const Navbar = () =>{   

    const [open, setOpen] = useState (false)
    return(
        
        <nav>
            <div className='nav-container'>
             <img src={logo} alt = "Logo"/> 
            <ul className='nav-links'>
                =
                <li 
                    className="nav-item"
                    onMouseEnter={() => setOpen(true)} 
                    onMouseLeave={() => setOpen(false)}
                > 
                <Link to ="#1">  Home</Link> 
                 {open && (
            <ul className="dropdown">
              <li><a href="#">Home - Main</a></li>
              <li><a href="#">Home - Image</a></li>
              <li><a href="#">Home - Video</a></li>
              <li><a href="#">Home - Slider</a></li>
            </ul>
          )}
                </li>
                <li><Link to="/About">About</Link></li>
                <li><Link to="/Services">Services</Link></li>
               <li><Link to="/Blog">Blogs</Link></li>
                <li 
                className="nav-item"
                    onMouseEnter={() => setOpen(true)} 
                    onMouseLeave={() => setOpen(false)}
                
                > <Link to="/Pages">Pages</Link>
                 {open && (
            <ul className="dropdown">
              <li><a href="#"> Service Details</a></li>
              <li><a href="#">Blog Details</a></li>
              <li><a href="#">Our Programs</a></li>
              <li><a href="#">Program Detailsr</a></li>
              <li><a href="#">Our Team</a></li>
              <li><a href="#">Team Details</a></li>
              <li><a href="#">Testimonials</a></li>
              <li><a href="#">Image Gallery</a></li>
              <li><a href="#">Video Gallery</a></li>
              <li><a href="#">FAQS</a></li>
              <li><a href="#">404</a></li>
            </ul>
          )}
          </li>
                <li><Link to="/Contact">Contact</Link></li>
                 <li><Link to="/People">People</Link></li> 
                 
            </ul>
            </div>
            <button>
              <a href='#10'>Book Appointment</a>
              </button> 
        </nav>

    )
}

export default Navbar