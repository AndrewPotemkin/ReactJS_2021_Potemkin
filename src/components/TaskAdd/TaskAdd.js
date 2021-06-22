import React, { Component } from 'react';
import './TaskAdd.css';

class TaskAdd extends Component {
    consoleData = (event) => {
        event.preventDefault();
        if (this.nameInput.value !== '' && this.descriptionInput !== '') {
            console.log(`Name: ${this.nameInput.value}, Description: ${this.descriptionInput.value}`);;
        }
    }

  render() {
    return (
        <form className='task-add' onSubmit={this.consoleData}>
            <h2 className='task-add__title'>Task Add:</h2>
            <div className='task-add__field'>
                <label className='task-add__label'>Name:</label>
                <input className='task-add__input' type="text" ref={(input) => {this.nameInput = input}}/>
                <label className='task-add__label'>Description:</label>
                <input className='task-add__input' type="text" ref={(input) => {this.descriptionInput = input}}/>
                <button className='task-add__button' type="submit">Post Task</button>
            </div>
        </form>
    )
  }
}

export default TaskAdd;
