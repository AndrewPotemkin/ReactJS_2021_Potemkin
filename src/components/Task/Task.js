import React, { Component } from 'react';
import styles from './Task.module.scss';
import {connect} from 'react-redux'
import { taskToggler } from "../../store/actions/projectsAction"
import { Api } from "../../utils/ApiService"
import { withRouter } from 'react-router-dom';

class Task extends Component {

  togTask() {
    const obj = {
      name: this.props.data.name,
      description: this.props.data.description,
      priority: this.props.data.priority,
      completed: !this.props.data.completed,
      projectId: +this.props.match.params.projectId

    }
    Api.editTask(obj, this.props.match.params.projectId, this.props.data.id)
      .then(res => {
        if (res.status === 200) {
          this.props.taskToggler(this.props.data.id);
        }
        return res.json();
      })
      .then(res => {
        // this.props.addTasks(res);
        this.props.taskToggler(this.props.data.id);
      })
      .catch(e => console.error(e))
      this.forceUpdate()
  }

  render() {
    return (
      <div className={styles.task}>
        <h2 className={styles.name}>{this.props.data.name}</h2>
        <p className={styles.description}>{this.props.data.description}</p>
        <p className={styles.completed}>{`${this.props.data.completed}`}</p>
        <button className={styles.button} onClick={() => this.togTask()}>Toggle status</button>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
      tasks: state.tasks.tasks,
      projects: state.projects,
      isDarkTheme: state.theme.isDark
  }
}

function mapDispatchToProps(dispatch) {
  return {
    taskToggler: (id) => dispatch(taskToggler(id))
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Task));
