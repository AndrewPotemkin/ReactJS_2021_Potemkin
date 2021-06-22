import React, { Component } from 'react';
import styles from './TaskList.module.scss';
import Task from '../Task/Task';
import classNames from "classnames";
import {AppConsumer} from "../../App"

class TaskList extends Component {

state = {
  tasks: [
    {
      id: 0,
      name: 'Name of the task 1',
      description: 'What needs to be done',
      completed: true
    },
    {
      id: 1,
      name: 'Name of the task 2 ',
      description: 'What needs to be done',
      completed: false
    },
    {
      id: 2,
      name: 'Name of the task 3',
      description: 'What needs to be done',
      completed: true
    },
    {
      id: 3,
      name: 'Name of the task 4',
      description: 'What needs to be done',
      completed: false
    },
    {
      id: 4,
      name: 'Name of the task 5',
      description: 'What needs to be done',
      completed: true
    }
  ]
}

  onChange = (id) => {
    const {tasks} = this.state;
    tasks[id].completed = !tasks[id].completed;
    this.setState({tasks});
  }

  render() {
    return (
      <AppConsumer>
      {context => (
        <ul className={classNames(styles.list, context ? styles.black : '')}>
        {this.state.tasks.map((task, index)=> {
          return <li 
            key={index}
            className={styles.item}
            >
              <Task data={task} onChange={this.onChange}/>
              
            </li>
          })
        }
        </ul>
      )}
      </AppConsumer>
      
    )
  }
}

export default TaskList;
