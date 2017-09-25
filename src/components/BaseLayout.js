import React, { Component } from 'react';
// import { NavLink } from 'react-router-dom';

export default class BaseLayout extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="base">
                <nav className="navbar navbar-expand-lg navbar-light fixed-top" id="mainNav">
                    <div className="container">
                        <a href="#playlist-form">Add A Song</a>
                        <span> :|: </span>
                        <a href="#playlist">See List</a>
                        <span> :|: </span>
                        <a href="#share">Share</a>
                    </div>
                </nav>

                {this.props.children}

                <footer>

                    <div id="share" className="footer-bar col-12">
                        <h3 className="text-white">Enjoying Songster?</h3><br />
                        <a className="btn btn-default btn-md sr-button" href="#">Share With Friends!</a>
                    </div>

                </footer>
            </div>
        )
    }
}


