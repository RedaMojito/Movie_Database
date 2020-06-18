import React, { Component } from 'react';

import classes from './SignUp.module.css';
 
import axios from '../../hoc/axiosPath';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';



class SignUp extends Component{
    constructor(props){
        super(props);
        this.state={
            fullName: '',
            email: '',
            password: '',
            confirmPassword:'',
            signUpErrors:{
                fullName: '',
                email: '',
                password: '',
                confirmPassword:'',
            }
        }
        this.changeHandler= this.changeHandler.bind(this);
        this.validateForm = this.validateForm.bind(this);
        this.sendLogInfos = this.sendLogInfos.bind(this);
    };

changeHandler(e){
    let val = e.target.value;
    let log = e.target.name;
    let errors = this.state.signUpErrors;

    const validEmail = new RegExp(/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i);
    const validPassword = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");
    switch(log){
        case('fullName'): 
        errors.fullName = val.length < 5 ? 'Full Name can\'t be less than 5 caracters' : '';
        break;
        case('email'):
        errors.email = validEmail.test(val) ? '' : 'Invalid Email';
        break;
        case('password'):
        errors.password = validPassword.test(val) ? '' : 'Invalid Password';
        break;
        case('confirmPassword'):
        errors.confirmPassword= val !== this.state.password ? 'Password does not match' : '';
        break;
        default:
        break;
    }
    this.setState({errors, [log]: val});
    console.log(this.state.signUpErrors);
}

sendLogInfos(e){
    e.preventDefault();

    const infos ={
        fullName: this.state.fullName,
        password: this.state.password
    };


    if(this.validateForm(this.state.signUpErrors)){
        axios.post('/storeInfos.json', infos).then( response =>{
            console.log('Valid form');
            console.log(this.state.fullName);
            this.props.history.push('/login');
        })
    }else{
        console.log('Invalid form');
    }
}

validateForm(signUpErrors){
    let valid= true;
    Object.values(signUpErrors).forEach(val =>{
      val.length > 0 && (valid = false)
    });
    return valid;
  }

    render(){
const {fullName, email, password, confirmPassword} = this.state.signUpErrors;
 return (
        <div className={classes.div}>
            <form className={classes.SignUp}>
                 <label className={classes.label}><FontAwesomeIcon className={classes.fontSpan} icon='user' /></label>
                <input className={classes.input} onChange={this.changeHandler} autoComplete='off' name='fullName' type='text' placeholder='Full Name' noValidate/><br/>
                {fullName.length > 0 ? <span className={classes.error}>{fullName}</span> : ''}<br/>
                <label className={classes.label}><FontAwesomeIcon className={classes.label} icon='envelope' /></label>
                <input className={classes.input} onChange={this.changeHandler} autoComplete='off' name='email' type='text' placeholder='Email' noValidate/><br/>
                {email.length > 0 ? <span className={classes.error}>{email}</span> : ''}<br/>
                <label className={classes.label}><FontAwesomeIcon className={classes.label} icon='lock' /></label>
                <input className={classes.input} onChange={this.changeHandler} name='password' type='password' placeholder='Password' noValidate/><br/>
                {password.length > 0 ? <span className={classes.error}>{password}</span> : ''}<br/>
                <label className={classes.label}><FontAwesomeIcon className={classes.label} icon='check' /></label>
                <input className={classes.input} onChange={this.changeHandler}  name='confirmPassword' type='password' placeholder='Confirm Password' noValidate/><br/>
                {confirmPassword.length > 0 ? <span className={classes.error}>{confirmPassword}</span> : ''}<br/>
                <button className={classes.button} onClick={this.sendLogInfos}>Sign Up</button>
            </form>
        </div>
    );
    }
};

export default SignUp;