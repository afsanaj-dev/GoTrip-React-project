import React from 'react'
import { NavLink } from 'react-router-dom'
import Images from '../components/Images'

const Navbar = () => {
  return (
    <nav>
        <div className='container'>
            <div className="nav_wrapper">
                <div className="logo">
                    <Images source="logo-light.png" alttext="logo"/>
                </div>
                <div className="menu">
                    <ul>
                        <li>
                            <NavLink to="/">
                                Home
                            </NavLink>
                            
                        </li>
                        <li>
                            <NavLink to="/offer">
                                Offer
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/activity">
                                Activity
                            </NavLink>
                        </li>
                        <li>
                        <NavLink to="/destination">
                                Destination
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/news">
                                News
                            </NavLink>
                        </li>
                        <li>
                        <NavLink to="/contact">
                                Contact
                            </NavLink>

                        </li>
                       
                    </ul>
                </div>
            </div>
        </div>
    </nav>
  )
}

export default Navbar