import React, { Component } from 'react'


export default class PlayListItem extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        let songs;
        songs = this.props.songs.map((song, index) => {
            return (
                <div key={index}>
                    <p>User: {song.userName}</p>
                    <p>Artist/Band: {song.songArtist}</p>
                    <p>Title: {song.songTitle}</p>
                    <p>Notes: {song.songNotes}</p>
                </div>
            )
        })

        return (
            <div>{songs}</div>
        );

    }
}
