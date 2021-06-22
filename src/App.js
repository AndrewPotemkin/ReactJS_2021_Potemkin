import React, { Component } from 'react';
import styles from './App.module.scss';
import TaskList from './components/TaskList/TaskList';
import TaskAdd from './components/TaskAdd/TaskAdd';
import ProjectAdd from './components/ProjectAdd/ProjectAdd';
import ProjectList from './components/ProjectList/ProjectList';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import projects from './components/projects';
const AppContext = React.createContext({})
export const AppProvider = AppContext.Provider;
export const AppConsumer = AppContext.Consumer;



class App extends Component {

  state = {
    darkTheme: false
  }

  onChange = () => {
    let {darkTheme} = this.state;
    darkTheme = !darkTheme;
    this.setState({darkTheme});
  }

  render() {
    return (
      <BrowserRouter>
        <AppProvider value={this.state.darkTheme}>
          <button className={styles.theme} onClick={this.onChange}>Change Theme</button>
          <Link className={styles.link} to={`/`}>Main Page</Link>
          <Switch>
            <Route exact path="/">
              <ProjectAdd />
              <ProjectList />
            </Route>
            <Route exact path="/0">
              <TaskAdd />
              <TaskList data={projects[0]}/>
            </Route>
            <Route exact path="/1">
              <TaskAdd />
              <TaskList data={projects[1]}/>
            </Route>
            <Route exact path="*">
              <ProjectAdd />
              <ProjectList />
            </Route>
          </Switch>
        </AppProvider>
      </BrowserRouter>
    );
  }
}

export default App;
