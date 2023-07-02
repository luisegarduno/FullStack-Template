import React from 'react';
import './Home.css';

export class Home extends React.Component {

    constructor(props){
        super(props);
        this.username = localStorage['username'];
        this.userID = localStorage['userID'];
    }
    
    render() {
        return(<>
            <nav className="navbar navbar-expand-sm bg-dark navbar-dark justify-content-end">
                <a href="/home" className="mb-0 h3 text-white font-weight-bold">Product</a>
                <a href="/home" className="mb-0 h3 font-weight-bold">
                    <font color="#47eba9">Name</font>
                </a>
                <button className="btn btn-primary btn-sm rounded ml-auto mr-1" onClick={() => this.props.history.push("/login")}>LOG OUT</button>
            </nav>
            <nav className="navbar bg-white">
                <span className="mb-0 h5 text-primary">Home</span>
            </nav>
            <div className="p-2 black container-fluid container-md">
                <form className="mb-1 w-60 mx-auto mb-auto black">
                    <header className = "p-1">
                        <font color="#47eba9">
                            <h3 className = "text-center font-weight-bold">Welcome, {this.username}!</h3>
                        </font>
                    </header>
                </form>
            </div>
            </>
        );
    }//end Render
}//end Home
