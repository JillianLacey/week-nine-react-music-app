import React, { Component } from 'react';
import NavBar from "./components/NavBar";
import PlayList from "./components/PlayList";
import PlayListForm from "./components/PlayListForm";
import './styles/App.css';


export default class App extends Component {
  // method to post a track object to an endpoint

  // method to retrieve tracks
  render() {
    return (
      <div className="App">
        <NavBar />
        <PlayListForm />
        <PlayList />



      </div>
    )
  }
}

