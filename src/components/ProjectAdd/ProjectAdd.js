import React, { Component } from 'react';
import styles from './ProjectAdd.module.scss';
import {connect} from 'react-redux'
import { withRouter } from 'react-router-dom';
import { Api } from "../../utils/ApiService";
import { addProject } from '../../store/actions/projectsAction';

class ProjectAdd extends Component {
    consoleData = (event) => {
        event.preventDefault();

        const obj = {
            name: this.nameInput.value
        }

        Api.postProject(obj)
        .then(res => res.json())
        .then(res => {
            this.props.addProject(res)
            
        })
        .catch(e => console.error(e))
        this.nameInput.value = '';
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

function mapStateToProps(state) {
    return {
        projects: state.projects,
        isDarkTheme: state.theme.isDark
    }
  }

  function mapDispatchToProps(dispatch) {
    return {
      addProject: (data) => dispatch(addProject(data)),
    }
  }

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ProjectAdd));
