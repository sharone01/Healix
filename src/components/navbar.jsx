import { Link } from 'react-router-dom'
import "./navbar.css" 
 import logo from "../assets/logo.svg"


const Navbar = () =>{   
    
    return(
        <nav>
            <div className='nav-container'>
             <img src={logo} alt = "Logo"/> 
            <ul className='nav-links'>
                <li><Link to ="/Home"> Home</Link></li>
                <li><Link to="/About">About</Link></li>
                <li><Link to="/Services">Services</Link></li>
                <li><Link to="/Blog">Blogs</Link></li>
                <li ><Link to="/Pages">Pages</Link></li>
                <li><Link to="/Contact">Contact</Link></li> 
            </ul>
            </div>
            <button>Book Appointment</button> 
        </nav>

    )
}

export default Navbar