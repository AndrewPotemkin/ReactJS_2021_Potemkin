import React, { Component } from 'react';
import styles from './TaskList.module.scss';
import Task from '../Task/Task';
import classNames from "classnames";
import {connect} from 'react-redux'
import { withRouter } from "react-router";

class TaskList extends Component {

  state = this.props.data;


  // onChange = (id) => {
  //   const {tasks} = this.state;
  //   tasks[id].completed = !tasks[id].completed;
  //   this.setState({tasks});
  // }

  render() {
    const taskId = this.props.match.params.taskId;
    return (
          <>
            <h2 className={styles.title}>{`${this.props.projects[taskId] && this.props.projects[taskId].name}`}</h2>
            <ul className={classNames(styles.list, this.props.isDarkTheme ? styles.black : '')}>
            {this.props.projects[taskId].tasksIds && this.props.projects[taskId].tasksIds.map((task, index)=> {
              return <li 
                key={index}
                className={styles.item}
                >
                  <Task data={this.props.tasks[index]} onChange={this.onChange}/>
                </li>
              })
            }
            </ul>
          </>
    )
  }
}

function mapStateToProps(state) {
  return {
      projects: state.projects.data.projectsById,
      tasks: state.projects.data.tasksById,
      isDarkTheme: state.theme.isDark
  }
}

export default withRouter(connect(mapStateToProps)(TaskList));
