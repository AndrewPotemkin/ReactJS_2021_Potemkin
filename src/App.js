import React, { Component } from 'react';
import styles from './App.module.scss';
import TaskList from './components/TaskList/TaskList';
import TaskAdd from './components/TaskAdd/TaskAdd';
import ProjectAdd from './components/ProjectAdd/ProjectAdd';
import ProjectList from './components/ProjectList/ProjectList';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import {connect} from 'react-redux'
import { themeToggler } from "./store/actions/themeAction"
import { addData } from './store/actions/projectsAction';
import { Api } from "./utils/ApiService"

class App extends Component {

  componentDidMount() {
    Api.getAllProjects()
      .then(res => res.json())
      .then(res => {
        this.props.addData(res);
      })
      .catch(e => console.error(e))
  }

  render() {
    return (
      <BrowserRouter>
          <button className={styles.theme} onClick={this.props.themeToggler}>Change Theme</button>
          <Link className={styles.link} to={`/`}>Main Page</Link>
          <Switch>
            <Route exact path="/">
              <ProjectAdd />
              <ProjectList />
            </Route>
            <Route path="/:projectId">
              <TaskAdd />
              <TaskList />
            </Route>
            <Route exact path="*">
              <ProjectAdd />
              <ProjectList />
            </Route>
          </Switch>
      </BrowserRouter>
    );
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
    themeToggler: () => dispatch(themeToggler()),
    addData: (data) => dispatch(addData(data))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
