import React from 'react';
import { Link } from 'react-router-dom';

import classes from './Nav.module.css';
const Nav = (props) => {
    return (
        <div>
            <nav className={classes.Nav}>
                <ul className={classes.ul}>
                    <Link to='/' className={classes.li}>
                      <li>Home</li>
                    </Link>
                    <Link to='/login' className={classes.li}> 
                      <li>Login</li>
                    </Link>
                    <Link className={classes.li} to='/about' >
                      <li >About</li>
                    </Link>  
                </ul>
            </nav>
        </div>
    );
};

export default Nav;