import React from 'react'
import{Link} from 'react-router-dom';
import './Nav.css';




function Navbar () {

    return (
        <div className='nav'>

            {/* <nav className='food'> */}
                
                
                <nav className="water"><Link to='/'>Home</Link><span/>
               <nav className='code'><Link to="/About">About</Link>
               <nav className='boot'> <Link to="/Shop">Shop</Link>
               <nav className='book'><Link to="/Login">Login</Link>
               <nav className='book'></nav>  <Link to="/SignIn">SignIn</Link>
               </nav>
            </nav>
            </nav>
            </nav>
            
            
            {/* </nav> */}

        </div>
    )
}

export default Navbar;