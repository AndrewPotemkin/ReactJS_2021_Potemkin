import React, { Component } from 'react';
import styles from './Task.module.scss';

class Task extends Component {

  render() {
    return (
      <div className={styles.task}>
        <h2 className={styles.name}>{this.props.data.name}</h2>
        <p className={styles.description}>{this.props.data.description}</p>
        <p className={styles.completed}>{`${this.props.data.completed}`}</p>
        <button className={styles.button} onClick={() => this.props.onChange(this.props.data.id)}>Toggle status</button>
      </div>
    )
  }
}

export default Task;
