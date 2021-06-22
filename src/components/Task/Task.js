import React, { Component } from 'react';
import './Task.css';

class Task extends Component {
    consoleData = () => {
        console.log(`Task ${this.props.props.id} completed status = ${this.props.props.completed}`);
    }

  render() {
    return (
      <div className="task">
        <h2 className="task__name">{this.props.props.name}</h2>
        <p className="task__description">{this.props.props.description}</p>
        <p className="task__completed">{this.props.props.completed}</p>
        <button className="task__button" onClick={this.consoleData}>Check status</button>
      </div>
    )
  }
}

export default Task;