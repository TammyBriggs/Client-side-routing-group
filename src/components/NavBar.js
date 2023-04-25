import React from "react";
import { Link } from "react-router-dom";

 function NavBar (){
    return(
        <nav>
            <ul>
               <li> <Link to="/home" >HOME</Link></li>
               <li> <Link to="/contact" >CONTACTS</Link></li>
                <li> <Link to="/about" >ABOUT</Link></li>
               
            </ul>
        </nav>
    )
} 

export default NavBar