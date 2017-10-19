import React, { Component } from 'react'

class GameOver extends Component {
  constructor(props) {
    super(props)
    this.handleClick = this.handleClick.bind(this);
  }

  render() {
    return (
      <div className="resetDiv">
        <h2>Yaaay, you finished the game!</h2>
        <button
          className="resetButton w3-animate-opacity"
          onClick={this.handleClick}>
          Play again
        </button>
      </div>
    )
  }

  handleClick() {
    this.props.resetGame()
  }
}

export default GameOver
