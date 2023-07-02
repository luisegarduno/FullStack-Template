import React from "react";
import axios from 'axios';
import { UserRepository } from '../../API/userRepository'
import { Redirect } from "react-router-dom";

export class CreateAccount extends React.Component{

    login = new UserRepository()
    config = {
    }

    constructor(props) {
        super(props);

        this.state = {
            email: "",
            username: "",
            password: "",
            confirmPassword: "",
            status: "",
        };

        this.getEmail = this.getEmail.bind(this);
        this.getUsername = this.getUsername.bind(this);
        this.getPassword = this.getPassword.bind(this);
        this.getConfirmPassword = this.getConfirmPassword.bind(this);
        this.onRegister = this.onRegister.bind(this);
    }

    getEmail(emailAddress){
        this.setState({ email : emailAddress.target.value })
    }

    getUsername(name){
        this.setState({ username : name.target.value })
        localStorage.setItem('username', this.state.username);
    }

    getPassword(pass1){
        this.setState({ password : pass1.target.value })
    }

    getConfirmPassword(pass2){
        this.setState({ confirmPassword : pass2.target.value })
    }

    onRegister(){
        const { password, confirmPassword } = this.state;

        if(password !== confirmPassword){
            alert("Passwords do not match");

            this.setState({ status : false });
            document.getElementById("passwordV1").value = "";
            document.getElementById("passwordV2").value = "";
        }
        else{
            this.setState({ status : true })

            var loginData = {email : this.state.email, password: this.state.password, username : this.state.username }

            axios.post(`${this.login.url}/user/create`, loginData)
                .then(x => { this.storeInfo(this.state.username);
            })
            

        }
    }

    async getUserID(username) {
        return (await this.login.userDetailsBody({username}))[0];
    }

    async storeInfo(name) {
        localStorage.setItem('username', name);
        var uid = (await this.getUserID(name)).userID;
        console.log(uid);
        localStorage.setItem('userID', uid);
        this.setState({status : true})
    }


    render() {
        return(<>

            <nav className="navbar navbar-expand-sm bg-dark navbar-dark justify-content-end">
                <a href="/home" className="mb-0 h3 text-white font-weight-bold">Product</a>
                <a href="/home" className="mb-0 h3 font-weight-bold">
                    <font color="#47eba9">Name</font>
                </a>
                <button className="btn btn-primary btn-sm rounded ml-auto mr-1" onClick={() => this.props.history.push("/login")}>Return</button>
            </nav>

            <nav className="navbar bg-white">
                <span className="mb-0 h5 text-primary">Register</span>
            </nav>
            <div className="p-3 container-fluid container-sm">
                <div className = "card text-center mb-1 w-80 mx-auto bg-dark">
                    <div className = "jumbotron-fluid h-75 bg-dark text-white text-center">
                        <h4 className="p-4 card-title font-weight-bold">Register</h4>
                    </div>
                    <div className="bg-dark">
                        <div className="form-group">
                            <div className="card-body">
                                <form>
                                    <div className="form-row">
                                        <div className="form-group col text-left font-weight-bold">
                                            <label htmlFor="exampleFormControlInput1"><font color="#47eba9">Email</font></label>
                                            <div className = "email" onChange = {this.getEmail}>
                                                <input name="email" type="email" autoComplete="on" className="form-control mx-auto" placeholder="JDoe@email.com"/>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="form-row">
                                        <div className="form-group col text-left font-weight-bold">
                                            <label htmlFor="exampleFormControlInput1"><font color="#47eba9">Username</font></label>
                                            <div className = "username" onChange = {this.getUsername}>
                                                <input name="username" type="text" className="form-control mx-auto" placeholder="JDoe"/>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="form-row">
                                        <div className="form-group col text-left font-weight-bold">
                                            <label htmlFor="exampleFormControlInput1"><font color="#47eba9">Password</font></label>
                                            <div className = "password" onChange = {this.getPassword}>
                                                <input id="passwordV1" autoComplete="current-password" name="password" type="password" className="form-control mx-auto" placeholder="Password123"/>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="form-row">
                                        <div className="form-group col text-left font-weight-bold">
                                            <label htmlFor="exampleFormControlInput1"><font color="#47eba9">Confirm Password</font></label>
                                            <div className = "password" onChange = {this.getConfirmPassword}>
                                                <input id="passwordV2" autoComplete="current-password" name="confirmPassword" type="password" className="form-control mx-auto" placeholder="Password123"/>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                            <div className="footer">
                                {(() => {
                                    if(this.state.email && this.state.username && this.state.password && this.state.confirmPassword){
                                        return <div>
                                            <button type="button" className="btn btn-primary rounded" onClick={this.onRegister}>Complete Registration</button>
                                            { this.state.status ? <Redirect to={"/home"}/> : <Redirect to={"/register"} /> }
                                        </div>
                                    }
                                    else
                                        return <button className="btn btn-primary rounded button disabled" type="button" >Register</button>    
                                })()}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )}
}
