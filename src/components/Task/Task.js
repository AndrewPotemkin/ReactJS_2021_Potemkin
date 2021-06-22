import React, { Component } from 'react';
import './Task.css';

class Task extends Component {

  render() {
    return (
      <div className="task">
        <h2 className="task__name">{this.props.data.name}</h2>
        <p className="task__description">{this.props.data.description}</p>
        <p className="task__completed">{`${this.props.data.completed}`}</p>
        <button className="task__button" onClick={() => this.props.onChange(this.props.data.id)}>Toggle status</button>
      </div>
    )
  }
}

export default Task;
