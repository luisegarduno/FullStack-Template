import React from 'react';

export class Header extends React.Component{

    render() {
        return(<>
            <nav className="navbar navbar-expand-sm bg-dark navbar-dark justify-content-end">
                <a href="/home" className="mb-0 h3 text-white font-weight-bold">Product</a>
                <a href="/home" className="mb-0 h3 font-weight-bold">
                    <font color="#47eba9">Name</font>
                </a>
                <a href="/login" className="btn btn-primary btn-sm rounded ml-auto mr-1" role="button" aria-pressed="true">LOG OUT</a>  
            </nav>
        </>)
    }
}
