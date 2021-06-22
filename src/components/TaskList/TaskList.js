import React, { Component } from 'react';
import styles from './TaskList.module.scss';
import Task from '../Task/Task';
import classNames from "classnames";
import {AppConsumer} from "../../App"

class TaskList extends Component {

  state = this.props.data;

  onChange = (id) => {
    const {tasks} = this.state;
    tasks[id].completed = !tasks[id].completed;
    this.setState({tasks});
  }

  render() {
    return (
      <AppConsumer>
        {context => (
          <>
          <h2 className={styles.title}>{`${this.state.name}`}</h2>
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
          </>
        )}
      </AppConsumer>
    )
  }
}

export default TaskList;
