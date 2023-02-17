import React, { useContext } from 'react'
import {Link, NavLink, useNavigate} from 'react-router-dom'
import { AuthContext } from '../../auth';

export const Navbar = () => {
    const navigate = useNavigate();
    const { user, logout } = useContext( AuthContext )

    const onLogout = () => {
        
        logout();
        navigate('/login',{
            replace: true
        })
    };

    return (
    <>
          <nav className="navbar navbar-expand-sm bg-dark navbar-dark p-2 mb-2">
              <div className="container-fluid">
                  {/* <a className="navbar-brand" href="#">HarryPotterApp</a> */}
                  <Link className='navbar-brand' to="/">HarryPotterApp</Link>

                  <div className="collapse navbar-collapse" id="navbarNav">
                      <div className="navbar-nav">
                          
                        <NavLink
                            className={({isActive}) => isActive ? 'nav-link active' : 'nav-link'}
                            to="/gryffindor"
                        >
                            Gryffindor
                        </NavLink>
                        <NavLink
                            className={({isActive}) => isActive ? 'nav-link active' : 'nav-link'}
                            to="/slytherin"
                        >
                            Slytherin
                        </NavLink>
                        <NavLink
                            className={({isActive}) => isActive ? 'nav-link active' : 'nav-link'}
                            to="/ravenclaw"
                        >
                            Ravenclaw
                        </NavLink>
                        <NavLink
                            className={({isActive}) => isActive ? 'nav-link active' : 'nav-link'}
                            to="/search"
                        >
                            Search
                        </NavLink>

                      </div>   
                  </div>

                  <div className='collapse navbar-collapse d-flex gap-2 justify-content-end'>
                    <ul className='navbar-nav'>
                          <span className="nav-item nav-link">
                              {user?.name.toUpperCase()}
                          </span>
                          <button
                              className='nav-item btn btn-primary'
                              onClick={ onLogout }
                          >
                              Logout
                          </button>
                    </ul>
                  </div>

                  
              </div>
          </nav>
    </>
  )
}
