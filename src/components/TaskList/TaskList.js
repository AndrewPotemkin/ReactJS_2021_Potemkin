import React, { Component } from 'react';
import styles from './TaskList.module.scss';
import Task from '../Task/Task';
import classNames from "classnames";
import {connect} from 'react-redux'
import { withRouter } from "react-router";
import { Api } from "../../utils/ApiService";
import { addTasks } from '../../store/actions/tasksAction';
import { addData } from '../../store/actions/projectsAction';

class TaskList extends Component {

  componentDidMount() {


      Api.getTasks(this.props.match.params.projectId)
      .then(res => res.json())
      .then(res => {
        this.props.addTasks(res);
      })
      .catch(e => console.error(e))
    

  }

  render() {
    return (
      <>
        <h2 className={styles.title}>{`${this.props.projects && 
          this.props.match.params.projectId
          }`}</h2>
        {this.props.tasks.tasks && 
          <ul className={classNames(styles.list, this.props.isDarkTheme ? styles.black : '')}>
          {this.props.tasks.tasks && 
          this.props.tasks.tasks.map((task, index) => {
            return <li 
              key={index}
              className={styles.item}
              >
                <Task data={this.props.tasks.tasks[index]}/>
              </li>
            })
          }
          </ul>
        }
      </>
    )
  }
}

function mapStateToProps(state) {
  return {
      projects: state.projects.data,
      tasks: state.tasks,
      isDarkTheme: state.theme.isDark
  }
}

function mapDispatchToProps(dispatch) {
  return {
    addTasks: (data) => dispatch(addTasks(data)),
    addData: (data) => dispatch(addData(data))
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(TaskList));
