import React, { Component } from 'react'

export default class PlayListForm extends Component {
    constructor(props) {
        super(props)
        this.state = {

            userName: '',
            songTitle: '',
            songArtist: '',
            songNotes: '',

        }
    }

    handleInputChange = e => {
        // get the property to update
        // get this.state.track
        // let prop = e.target.name;
        // let { track } = this.state;
        // update this.state.track
        // track[prop] = e.target.value;
        // set state
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    addToList = (e) => {
        e.preventDefault();
        this.setState({ userName: e.target.value, songTitle: e.target.value, songArtist: e.target.value, songNotes: e.target.value });
        let listItem = JSON.stringify(this.state);

        fetch("https://tiny-lasagna-server.herokuapp.com/collections/playlisting", {
            method: "POST",
            body: listItem,
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        }
        ).then(response => {
            console.log(response, "yay");

        }).catch(err => {
            console.log(err, "boo!");
        });
        this.setState({ userName: '', songNotes: '', songArtist: '', songTitle: '' });
    }

    render() {
        let { userName, songArtist, songTitle, songNotes } = this.state;
        return (
            <section className="bg-primary" id="share">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 mx-auto text-center">
                            <h2 className="section-heading text-white">Earworm? Favorite Song? Add it!</h2>
                            <form onSubmit={this.addToList}>
                                <div className="form-group">
                                    <input onChange={this.handleInputChange} value={userName} type="text" className="form-control" name="userName" placeholder="Enter your name" />
                                </div>
                                <div className="form-group">

                                    <input onChange={this.handleInputChange} value={songArtist} type="text" className="form-control" name="songArtist" placeholder="Enter the Artist or Band" />
                                </div>
                                <div className="form-group">

                                    <input onChange={this.handleInputChange} value={songTitle} type="text" className="form-control" name="songTitle" placeholder="Enter Song Title" />
                                </div>
                                <div className="form-group">

                                    <textarea onChange={this.handleInputChange} value={songNotes} type="text" className="form-control" name="songNotes" placeholder="Add comments about the song"></textarea>
                                </div>

                                <button id="form-button" type="submit" className="btn btn-default btn-xl">Add Song!</button>
                            </form>
                        </div>

                    </div>
                </div>
            </section>
        )
    }
}
