import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';

const Header = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleSignOut = () => {
    logOut()
      .then(() => { 
        alert('successfully log out');
      })
      .catch(error => console.error());
  }

        const menuItem = <>
        <li className='font-semibold'><Link to='/'>Home</Link></li>
          <li className='font-semibold'><Link to='/blog'>Blog</Link></li> 


          {user?.email ?
             <>
             <li className='font-semibold'><Link to='/reviews'>Reviews</Link></li>
             <li onClick={handleSignOut} className='font-semibold'><Link to='/login'>Log Out</Link></li>
      
           </>  
          
            :
           

           <li className='font-semibold'><Link to='/login'>Login</Link></li>
          }
          

         
        
      </>
  
      
      return (
          <div className="navbar bg-cyan-300">
          <div className="navbar-start">
            <div className="dropdown">
              <label tabIndex={0} className="btn btn-ghost lg:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
              </label>
              <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
               {menuItem}
              </ul>
            </div>
            <Link className="btn btn-ghost normal-case text-xl">
                      
              <h3 className='text-3xl font-bold text-pink-500 rounded-lg'>Earth Trekkers</h3>
            </Link>
          </div>
          <div className="navbar-center hidden lg:flex">
                  <ul className="menu menu-horizontal p-0">
                      {menuItem}
              
            </ul>
          </div>
          <div className="navbar-end">
            {
               (user?.email) &&  <Link to='/register'><button className="btn btn-outline btn-ghost">Sign Up</button></Link>
          }
          </div>
        </div>
    );
};

export default Header;