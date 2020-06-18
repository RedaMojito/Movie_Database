import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import axios from "./hoc/axiosPath";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faEnvelope,
  faLock,
  faUser,
  faCheck,
} from "@fortawesome/free-solid-svg-icons";

import "./App.css";

import Nav from "./Components/Navigation/Nav";
import About from "./Components/Navigation/About";
import Login from "./Components/Navigation/Login";
import MovieHome from "./Containers/MovieHome";
import SignUp from "./Components/Navigation/SignUp";

library.add(faEnvelope, faLock, faUser, faCheck);

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      logins: " ",
      passwords: "",
      logErrors: {
        logins: "",
        passwords: "",
      },
    };
    //this.checkUserLogin = this.checkUserLogin.bind(this);
    //this.onButtonCLick= this.onButtonCLick.bind(this);
    this.onChangeLogin = this.onChangeLogin.bind(this);
    this.storeLoginInfos = this.storeLoginInfos.bind(this);
    this.validateForm = this.validateForm.bind(this);
    // this.handleSubmit= this.handleSubmit.bind(this);
  }

  onChangeLogin(e) {
    e.preventDefault();
    let val = e.target.value;
    let log = e.target.name;
    let errors = this.state.logErrors;

    const strongRegex = new RegExp(
      "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})"
    );

    switch (log) {
      case "logins":
        errors.logins = val.length < 5 ? "Login must be 5 caracters long" : "";
        break;
      case "passwords":
        errors.passwords = strongRegex.test(val) ? "" : "Invalid Password";
        break;
      default:
        break;
    }

    this.setState({ errors, [log]: val });
  }

  storeLoginInfos(e) {
    e.preventDefault();
    if (this.validateForm(this.state.logErrors)) {
      const order = {
        login: this.state.logins,
        password: this.state.passwords,
      };
      axios.post("/orders.json", order).then((response) => {
        console.log("valid form");
        console.log(this.state.logins);
      });
    } else {
      console.log("Invalid Form");
    }
  }

  /*handleSubmit(){
      if(this.validateForm(this.state.logErrors)){
        console.log('Valid From');
      }else{
        console.log('Invalid Form');
      }
      console.log('done');
    }*/

  validateForm(logErrors) {
    let valid = true;
    Object.values(logErrors).forEach((val) => {
      val.length > 0 && (valid = false);
    });
    return valid;
  }

  /*onButtonCLick(e){
        if(this.state.logins !== ''){
          alert('Enter a Login')
        }else if(this.state.passwords !== ''){
          alert( 'enter a Password')
        }else if(this.state.logins.length<5 ){
          alert('you have to type at least 5 caracters')
        }else{
          this.storeLoginInfos();
        }

    
      
      
      console.log(this.state.logins);
      console.log(this.state.passwords);
     console.log('working');
    }

  checkUserLogin(e){
    this.setState({logins:e.target.value});
    const login ={
      log : this.state.logins
    };

    
    axios.put('https://jsonplaceholder.typicode.com/posts', {login}).then(res=> {
      console.log(res.data);
    })
  }*/

  render() {
    //const {logErrors} = this.state;

    return (
      <Router>
        <div className="App">
          <Nav />
          <Switch>
            <Route path="/" exact component={MovieHome} />
            <Route path="/about" component={About} />
            <Route
              path="/login"
              render={(props) => (
                <Login
                  {...props}
                  errLogin={this.state.logErrors.logins}
                  errPassword={this.state.logErrors.passwords}
                  logSubmit={this.handleSubmit}
                  logCheck={this.onChangeLogin}
                  sendInfos={this.storeLoginInfos}
                />
              )}
            />
            <Route path="/signUp" component={SignUp} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
