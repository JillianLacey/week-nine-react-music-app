import React, { Component } from 'react'

export default class NavBar extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="base">
                <nav className="navbar navbar-expand-lg navbar-light fixed-top">
                    <div className="container">
                        <a className="navbar-brand" href="#"></a>
                        <a className="navbar-brand" href="#playlist-form"></a>
                        <a className="navbar-brand" href="#playlist"></a>
                    </div>
                </nav>

                {this.props.children}

                <footer className="call-to-action">
                    <div className=" footer-bar">
                        <h3 className="text-white">Enjoying Songster?</h3><br />
                        <a className="btn btn-default btn-md sr-button" href="#">Share With Friends!</a>
                    </div>
                </footer>
            </div>
        )
    }
}


