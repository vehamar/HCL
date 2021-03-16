import React, {Component} from "react";
import loginImg from "../../login.svg";
import {BroswerRouter, Route, Switch} from 'react-router-dom';
import axios from 'axios'


export class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: ''
    }
    

      this.handleClick = this.handleClick.bind(this);
  }
  

  handleClick()
  {
    console.log("Hello");
    axios.get('https:api.github.com/users/sahana25')
    .then(response =>this.setState({username: response.data}))
  }

  render() 
  {
    return (
      <div className="base-container" ref={this.props.containerRef}>
        <div className="header">Login</div>
        <div className="content">
          <div className="image">
            <img src={loginImg} />
          </div>
          <div className="form">
            <div className="form-group">
              <label htmlFor="username">Username</label>
              <input type="text" name="username" placeholder="username" />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input type="password" name="password" placeholder="password" />
            </div>
          </div>
        </div>
        <div className="footer">
          <button  className="btn" onClick = {this.handleClick}>
            Login
          </button>
          <p>{this.state.username}</p>
        </div>
      </div>
    )
  }
}
