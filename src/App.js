import React, { Component } from 'react';
import styles from './App.module.scss';
import TaskList from './components/TaskList/TaskList';
import TaskAdd from './components/TaskAdd/TaskAdd';
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
      <AppProvider value={this.state.darkTheme}>
        <TaskAdd />
        <button className={styles.theme} onClick={this.onChange}>Change Theme</button>
        <TaskList />
      </AppProvider>
    );
  }
}

export default App;
