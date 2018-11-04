import React, { Component } from 'react';
import './App.css';
import News from './News/News';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      news1: {
        type: "everything",
        query: "q=bitcoin&from=2018-10-04&sortBy=publishedAt"
      },
      news2: {
        type: "top-headlines",
        query: "country=us&category=business"
      }
    }
  }

  render() {
    return (
      <div className="App">
        <News data={this.state.news1} />
      </div>
    );
  }
}

export default App;
