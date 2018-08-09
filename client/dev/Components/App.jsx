import React, { Component } from 'react';

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      board: []
    }
    for (let i = 0; i < 100; i += 1) {
      this.state.board.push([]);
      for (let j = 0; j < 100; j += 1) {
        this.state.board[i].push(0);
      }
    }
    console.log(this.state.board);
  }
  render() {
    return (
      <div>hi</div>
    );
  }
}
