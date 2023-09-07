import  React, { Component } from "react";
import logo from "./assets/images/gifrp.gif";
import "./Applogin.css";
import Axios from 'axios';

import './assets/scss/stylelogin.scss';

class Loginform extends Component {
  handleSubmit = e => {
    e.preventDefault();
    console.log(e.target.email.value);
    
    const sendData = {
      email: e.target.email.value,
      password: e.target.password.value
    };
    

    if (!e.target.email.value) {
      alert("Email is required");
    } else if (!e.target.email.value) {
      alert("Valid email is required");
    } else if (!e.target.password.value) {
      alert("Password is required");
    } 
      Axios.post('http://localhost/php-react/revision/login.php', sendData)
      .then((response)=>{
        if(response.data !== 'Invalid')
        {
          alert(response.data);
          window.location.href = '/';
        } else {
          alert("Wrong email or password combination");
        }
      })
  };

  

  render() {

    return (
      <div className="rootlog">
      <div className="Appl">
        <img src={logo} className="logol" alt="Business view - Reports" />
        <form className="forml" onSubmit={this.handleSubmit}>
          <div className="input-groupl">
            <label htmlFor="email">Email</label>
            <input type="email" name="email" placeholder="Example@email.com" />
          </div>
          <div className="input-groupl">
            <label htmlFor="password">Password</label>
            <input type="password" name="password" placeholder="Password123" />
          </div>
          <button className="button-49">Sign in</button>
        </form>
      </div>
      </div>
    );
  }
}

export default Loginform;
