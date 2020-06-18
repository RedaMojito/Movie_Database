import React from 'react';
import { Link } from 'react-router-dom';
import classes from './Login.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';




const Login = props => {
    return (
        <div className={classes.div} >
         
            <form className={classes.Login} noValidate >
                   
                <h2 className={classes.h2}>Register</h2>
               <p>  
                   <label className={classes.label}><FontAwesomeIcon className={classes.label} icon='envelope' /></label>
                    <input className={classes.input} type='text' autoComplete='off' name='logins' placeholder='Enter Login' onChange={props.logCheck} noValidate />   
                  <br/>
               </p>
               
                {props.errLogin.length > 0 ? <span className={classes.error}>{props.errLogin}</span> : ' '} <br/>
                <label className={classes.label}><FontAwesomeIcon className={classes.label} icon='lock' /></label>
                <input className={classes.input} type='password' name='passwords'  placeholder='Enter Password' onChange={props.logCheck}  noValidate/><br/>
                {props.errPassword.length > 0 ? <span className={classes.error}>{props.errPassword}</span> : ' '} <br/>
                 <button className={classes.button} onClick={props.sendInfos} type='button'> 
                Login
                </button>
                <Link to='/signUp' >
                <button className={classes.button}>Sign UP</button>
                </Link>
               
                    
            </form>
        </div>
    );
};



export default Login;