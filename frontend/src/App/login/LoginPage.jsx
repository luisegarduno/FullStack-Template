import React from 'react';
import axios from 'axios'
import { Redirect, Link } from "react-router-dom";
import { UserRepository } from '../../API/userRepository';

export class LoginPage extends React.Component {

    login = new UserRepository();

    constructor(props){
        localStorage.setItem('username', null)
        localStorage.setItem('userID', null)
        super(props);

        this.state = {
            username: "",
            password: "",
            status: "",
        };

        this.onLogin = this.onLogin.bind(this)
        this.getUsername = this.getUsername.bind(this)
        this.getPassword = this.getPassword.bind(this)
        this.validLogin = this.validLogin.bind(this)
        this.invalidLogin = this.invalidLogin.bind(this)
    }
    
    onLogin() {
        axios.post(`${this.login.url}/user/login`, {username: this.state.username, password : this.state.password})
            .then(response => {
                if(response.data === 0) {
                    this.invalidLogin()
                }
                else {
                    console.log(response.data)
                    this.validLogin(response.data)
                }
        })
    }
    
    getUsername(user) {
        var val = user.target.value;
        this.setState({username : val});
    }

    getPassword(pass) {
        var val = pass.target.value;
        this.setState({password : val});
    }

    async getUserID(username) {
        return (await this.login.userDetailsBody({username}))[0];
    }
    
    async validLogin(name) {
        localStorage.setItem('username', name);
        var uid = (await this.getUserID(name)).userID;
        console.log(uid);
        localStorage.setItem('userID', uid);
        this.setState({status : true})
    }

    invalidLogin() {
        alert("Wrong Username/Password");
        this.setState({status : false})
        document.getElementById("loginInfo").reset();
    }

    newAccount(){
        this.props.history.push("/NewAccount")
    }

    render() {
        return( <>
           
            <nav className="navbar navbar-expand-lg navbar-light bg-dark">
                <ul className="navbar-nav">
                    <li className="nav-item">
                    <span className="mb-0 h4 text-white font-weight-bold">Product</span>
                        <font color="#47eba9">
                            <span className="mb-0 h4 font-weight-bold">Name</span>
                        </font>
                    </li>
                </ul>
            </nav>

            <div className="black">
                <div className="p-4 container-fluid container-sm">
                    <div className = "p-1 card black mb-1 w-75 mx-auto text-center">
                        <div className = "form-group">

                        <div className = "card-body">
                            <form id="loginInfo">
                                <div className="form-row">
                                    <div className="form-group col font-weight-bold text-left">
                                        <font color="#47eba9">
                                            <label htmlFor="exampleFormControlInput1">Username</label>
                                        </font>
                                        <div className = "username" onChange={this.getUsername}>
                                            <input autoComplete="on" type="text" className="form-control mx-auto" name="username" placeholder="USERNAME"/>
                                        </div>
                                    </div>
                                </div>
                                <div className="form-row">
                                    <div className="form-group col font-weight-bold text-left">
                                        <font color="#47eba9">
                                            <label htmlFor="exampleFormControlInput1">Password</label>
                                        </font>
                                        <div className = "password" onChange={this.getPassword}>
                                            <input autoComplete="current-password" type="password" className="form-control mx-auto" name="password" placeholder="Password"></input>
                                        </div>
                                    </div>
                                </div>
                                <div className="form-row">
                                    <div className="form-group col text-left">
                                    </div>
                                </div>
                            </form>
                        </div>
                        <div className="footer">

                            {(() => {
                                if(this.state.password){
                                    return <div>
                                        <button className="btn btn-primary rounded" onClick={this.onLogin}>Log In</button>
                                        { this.state.status ? <Redirect to={"/home"}/> : <Redirect to={"/"} /> }
                                    </div>
                                }
                                else
                                    return <button className="btn btn-primary rounded button disabled" type="button">Log In</button>
                            })()}
                            <p></p>
                            <font color="#47eba9">
                                <p>OR</p>
                            </font>

                            <Link to="/register">
                                <button className="btn btn-dark rounded">Create Account</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
        );
    }
}
