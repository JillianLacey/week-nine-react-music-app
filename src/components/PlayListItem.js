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
                    <p>Added By: {song.userName}</p>
                    <p>Artist/Band: {song.songArtist}</p>
                    <p>Title: {song.songTitle}</p>
                    <p>Comments: {song.songNotes}</p>
                </div>
            )
        })

        return (
            <div className="">{songs}</div>
        );

    }
}
