import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { UserAuth } from '../../contexts/AuthContext';
import './navbar.css';
// import logo from '../../assets/new_logo.png';

const Navbar = () => {
  const navigate = useNavigate();
  const { googleSignIn, user, logOut } = UserAuth();

  const handleGoogleSignIn = async () => {
    try {
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

const handleClick = (e) => {
  const items = document.querySelectorAll('.item');
  items.forEach(item => {
    item.classList.remove('active');
  });

  console.log(e.target, 'clicked');
    e.target.classList.toggle('active')
}

return (
    <>
      <div className="navbar" >
        <div className="logo">
          <a href="https://techfest.org/" target="_blank" rel="noopener noreferrer">
            <img src='#' alt="Techfest, IIT Bombay" />
          </a>
        </div>
        <div className="navbar-items">
          <Link className="item active" to="/" onClick={handleClick}>
            Home
          </Link>
          <Link className='item' to="/competitions" onClick={handleClick}>
            Competitions
          </Link>
           
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
        </div>
      </div>
    </>
  );
};

export default Navbar;