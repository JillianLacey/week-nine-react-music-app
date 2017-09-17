import React, { Component } from 'react'

export default class NavBar extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="base">
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
                    <div className="container">
                        <a className="navbar-brand" href="#">Songster</a>
                        <a className="navbar-brand" href="#">Add a Song</a>

                        <div className="collapse navbar-collapse" id="navbarResponsive">
                            <ul className="navbar-nav ml-auto">
                                <li className="nav-item active">
                                    <a className="nav-link" href="#">Home</a>
                                </li>

                                <li className="nav-item">
                                    <a className="nav-link" href="#">About</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Services</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Contact</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>

                {this.props.children}

                <footer className="call-to-action bg-dark">
                    <div className="container text-center">
                        <h4>Enjoying Songster?</h4><br />
                        <a className="btn btn-default btn-md sr-button" href="#">Share with friends!</a>
                    </div>
                </footer>
            </div>
        )
    }
}


