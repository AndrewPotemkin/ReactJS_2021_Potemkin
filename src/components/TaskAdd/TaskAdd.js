import React, { Component } from 'react';
import styles from './TaskAdd.module.scss';
import {connect} from 'react-redux'
import { withRouter } from 'react-router-dom';
import { Api } from "../../utils/ApiService";
import { addTask } from '../../store/actions/tasksAction';

class TaskAdd extends Component {

    consoleData = (event) => {
        event.preventDefault();

        function getRandomArbitrary(min, max) {
            return Math.random() * (max - min) + min;
        }

        const obj = {
            id: getRandomArbitrary(1, 1000),
            name: this.nameInput.value,
            description: this.descriptionInput.value,
            priority: 1,
            completed: false,
        }

        Api.postTask(obj, this.props.match.params.projectId)
        .then(res => res.json())
        .then(res => {
            this.props.addTask(res)
        })
        .catch(e => console.error(e))
        this.nameInput.value = '';
        this.descriptionInput.value = '';
    }

  render() {
    return (
        <form className={styles.add} onSubmit={this.consoleData}>
            <h2 className={styles.title}>Task Add:</h2>
            <div className={styles.field}>
                <label className={styles.label}>Name:</label>
                <input className={styles.input} type="text" ref={(input) => {this.nameInput = input}}/>
                <label className={styles.label}>Description:</label>
                <input className={styles.input} type="text" ref={(input) => {this.descriptionInput = input}}/>
                <button className={styles.button} type="submit">Post Task</button>
            </div>
        </form>
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
      addTask: (task) => dispatch(addTask(task)),
    }
  }

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(TaskAdd));
