import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { UserAuth } from '../../contexts/AuthContext';
import './navbar.css';
// import logo from '../../assets/new_logo.png';

const Navbar = () => {
  const navigate = useNavigate();
  const { googleSignIn, user, logOut } = UserAuth();
  const handleGoogleSignIn = async () => {
    try{
      await googleSignIn();
    } catch (error) {
      console.log(error);
    }
    navigate('/');
  };

  const handleSignOut = async () => {
    try {
      await logOut();
    } catch (error) {
      console.log(error);
    }
  };

  const username = user?.displayName;
  let name = '';
  if (username != null) {
    name = username.split(' ')[0];
  }

const openMenu = ()=>{
  const navMenu = document.querySelector(".nav-menu").classList;
  const hamburger = document.querySelector(".hamburger").classList;
  hamburger.toggle("active");
  navMenu.toggle("active")
}


const handleClick = (e) => {
  const items = document.querySelectorAll('.nav-link');
  items.forEach(item => {
    item.classList.remove('active');
    const navMenu = document.querySelector(".nav-menu").classList;
    navMenu.remove("active")
  });
  
    // e.target.classList.toggle('active')
}

return (
    <>
      <header>
        <nav className="navbar" >
          <span><a href="https://techfest.org/" className='nav-branding' target="_blank" rel="noopener noreferrer">
              <img src='#' className='tflogo' alt="Techfest, IIT Bombay"/>
            </a></span>
            <ul className='nav-menu'>
              <li className='nav-item'><Link className="nav-link" to="/" onClick={handleClick}>
                Media
              </Link></li>
              <li className='nav-item'><Link className="nav-link" to="/history" onClick={handleClick}>
                History
              </Link></li>
              <li className='nav-item'><Link className="nav-link" to="/lectures" onClick={handleClick}>
                Lectures
              </Link></li>
              <li className='nav-item'><Link className="nav-link" to="/exhibitions" onClick={handleClick}>
                Exhibition
              </Link></li>
              <li className='nav-item'><Link className="nav-link" to="/competitions" onClick={handleClick}>
                Competitions
              </Link></li>     
            </ul>     
            {user?.displayName ? (
              <div>
                <button onClick={handleSignOut} className="item1" onMouseEnter={(e)=> e.target.innerText = "Sign Out"} onMouseLeave={(e)=> e.target.innerText = name}>
                {name}
                </button>
                
              </div>
            ) : (
              <button onClick={handleGoogleSignIn} className="item2">
                Sign In
              </button>
            )}
            <div onClick={openMenu} className="hamburger ">
              <span className="bar"></span>
              <span className="bar"></span>
              <span className="bar"></span>
              <span></span>
              <span></span>
            </div>
          </nav>
      </header>
    </>
  );
};

export default Navbar;