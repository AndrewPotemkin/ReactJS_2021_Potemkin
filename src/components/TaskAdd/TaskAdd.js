import React, { Component } from 'react';
import styles from './TaskAdd.module.scss';

class TaskAdd extends Component {
    consoleData = (event) => {
        event.preventDefault();
        if (this.nameInput.value !== '' && this.descriptionInput !== '') {
            console.log(`Name: ${this.nameInput.value}, Description: ${this.descriptionInput.value}`);;
        }
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

export default TaskAdd;
