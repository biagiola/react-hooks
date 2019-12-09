import React, { Component } from 'react';
import { render } from 'react-dom';
import './style.css';
import SongList from './components/SongList';

class App extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div className="App">
        <SongList/>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
