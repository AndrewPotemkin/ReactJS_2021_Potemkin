import React, { Component } from 'react';
import './MyTodoList.css';
import Task from '../Task/Task';

class MyTodoList extends Component {
  state = {
    tasks: [
      {
        id: 0,
        name: 'Task 1',
        description: 'Go for a Walk with the dog',
        completed: 'true'
      },
      {
        id: 1,
        name: 'Task 2 ',
        description: 'To Do React HW',
        completed: 'false'
      },
      {
        id: 2,
        name: 'Task 3',
        description: 'To go shopping',
        completed: 'true'
      },
      {
        id: 3,
        name: 'Task 4',
        description: 'Prepare for the React JS Exam',
        completed: 'false'
      },
      {
        id: 4,
        name: 'Task 5',
        description: 'Just Chill',
        completed: 'true'
      }
    ]
  }
  render() {
    return (
      <ul className="todo-list">
        {this.state.tasks.map((task, index)=> {
          return <li 
            key={index}
            className="todo-list__item"
            >
              <Task props={task} />
            </li>
          })
        }
      </ul>
    )
  }
}

export default MyTodoList;
