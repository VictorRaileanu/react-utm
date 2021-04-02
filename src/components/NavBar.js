import "./NavBar.css"
import { NavLink } from 'react-router-dom';
import React, {useState} from 'react';

function NavBar(){
    const [click,setClick] = useState(false);

    const handleClick = () => setClick(!click);

    return (

        <div>
            <nav className="navbar">
                <div className = "nav-container"> 
                <NavLink exact to ="/home" className="nav-logo">
                    Cafe Racers                 
                </NavLink>


                <ul className = {click ? "nav-menu active":"nav-menu"}>
                   <li className = "nav-item">
                     <NavLink exact to="/home" activeClassName="active" className="nav-links" 
                     onClick={handleClick}>
                        <a>Home</a>
                    </NavLink>
                    </li>

                    <li className = "nav-item">                
                        <NavLink exact to="/gallery" activeClassName="active" className="nav-links"  onClick={handleClick}>
                            <a>Gallery</a>
                        </NavLink>
                    </li>

                     <li className = "nav-item">                
                        <NavLink exact to="/about" activeClassName="active" className="nav-links"  onClick={handleClick}>
                            <a>About</a>
                        </NavLink>
                    </li>
                </ul>
                <div className="nav-icon" onClick={handleClick}>
                    <i className={click ? "fas fa-times":"fas fa-bars"}></i>
                </div>
                </div>
               
            </nav>
        </div>
    );
}

export default NavBar;