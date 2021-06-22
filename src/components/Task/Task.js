import React, { Component } from 'react';
import styles from './Task.module.scss';
import {connect} from 'react-redux'
import { taskToggler } from "../../store/actions/projectsAction"

class Task extends Component {
  render() {
    return (
      <div className={styles.task}>
        <h2 className={styles.name}>{this.props.data.name}</h2>
        <p className={styles.description}>{this.props.data.description}</p>
        <p className={styles.completed}>{`${this.props.data.completed}`}</p>
        <button className={styles.button} onClick={() => this.props.taskToggler(this.props.data.id)}>Toggle status</button>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
      projects: state.projects,
      isDarkTheme: state.theme.isDark
  }
}

function mapDispatchToProps(dispatch) {
  return {
    taskToggler: (id) => dispatch(taskToggler(id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Task);
