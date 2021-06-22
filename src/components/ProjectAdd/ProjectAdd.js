import React, { Component } from 'react';
import styles from './ProjectAdd.module.scss';

class ProjectAdd extends Component {
    consoleData = (event) => {
        event.preventDefault();
        if (this.nameInput.value !== '' && this.descriptionInput !== '') {
            console.log(`Name: ${this.nameInput.value}`);;
        }
    }

  render() {
    return (
        <form className={styles.add} onSubmit={this.consoleData}>
            <h2 className={styles.title}>Project Add:</h2>
            <div className={styles.field}>
                <label className={styles.label}>Name:</label>
                <input className={styles.input} type="text" ref={(input) => {this.nameInput = input}}/>
                <button className={styles.button} type="submit">Post Project</button>
            </div>
        </form>
    )
  }
}

export default ProjectAdd;
