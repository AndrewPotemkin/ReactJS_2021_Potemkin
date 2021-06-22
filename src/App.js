import React, { Component } from 'react';
import styles from './App.module.scss';
import TaskList from './components/TaskList/TaskList';
import TaskAdd from './components/TaskAdd/TaskAdd';
import ProjectAdd from './components/ProjectAdd/ProjectAdd';
import ProjectList from './components/ProjectList/ProjectList';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import {connect} from 'react-redux'
import { themeToggler } from "./store/actions/themeAction"
import projects from './components/projects';
import { addData } from './store/actions/projectsAction';

class App extends Component {

  componentDidMount() {
    // Временно. Функция принимает инфу с сервера и нормализует его в приемлемый для редакса вид. 
    // Позже реализацию нужно перенести в цепочку фетч -> нормализация данных -> добавление в store.

    const normaliser = (projects) => {

      const obj = {
        projectsById: {},
        tasksById: {}
      };
    
      for (let key in projects) {
        const projectId = projects[key].id;
        const projectName = projects[key].name;
        const tasks = projects[key].tasks;
        const projectTasksIds = tasks.map(item => item.id);
        tasks.forEach(item => {
          obj.tasksById[item.id] = item;
        })
        const projectInfo = {
          id: projectId,
          name: projectName,
          tasksIds: projectTasksIds
        }
        obj.projectsById[projectId] = projectInfo
      }
      return obj;
    }
    this.props.addData(normaliser(projects))
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
            <Route path="/:taskId">
              <TaskAdd />
              <TaskList />
            </Route>
            {/* <Route exact path="/0">
              <TaskAdd />
              <TaskList data={projects[0]}/>
            </Route>
            <Route exact path="/1">
              <TaskAdd />
              <TaskList data={projects[1]}/>
            </Route> */}
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
