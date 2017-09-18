import React, { Component } from 'react';
import PlayListItem from "./PlayListItem";

export default class PlayList extends Component {
    constructor(props) {
        super(props)
        this.state = { songs: [] }
    };
    // let songs = this.state.vehicles;

    componentDidMount() {
        fetch('https://tiny-lasagna-server.herokuapp.com/collections/playlisting').then(results => {
            return results.json();
        }).then(data => {
            this.setState({ songs: data });
            console.log("state", this.state.songs);
        })
    }

    fetchData = (e) => {
        e.preventDefault();
        fetch('https://tiny-lasagna-server.herokuapp.com/collections/playlisting').then(results => {
            return results.json();
        }).then(data => {
            this.setState({ songs: data });
        })
    }


    render() {
        let songs = this.state.songs;
        return (
            <header id="playlist" className="hero-2">

                <div>
                    <form onSubmit={this.fetchData}>
                        <button>Refresh List</button>
                    </form>
                    <PlayListItem songs={songs} />
                </div>
            </header>
        )
    }
}
