import React, { Component } from 'react'


export default class PlayListItem extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        let songs;
        songs = this.props.songs.map((song, index) => {
            return (
                <div className="songs" key={index}>
                    <p className="artist">Artist / Band: {song.songArtist}</p>
                    <p>Title: {song.songTitle}</p>
                    <p>Added By: {song.userName}</p>
                    <p>Comments: {song.songNotes}</p>
                </div>
            )
        })

        return (

            <div className="song-ctr">
                <div className="inner-ctr">
                    {songs}
                </div>
            </div>
        );

    }
}


