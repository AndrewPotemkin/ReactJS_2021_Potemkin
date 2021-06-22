import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styles from './ProjectList.module.scss';
import classNames from "classnames";
import projects from '../projects';
import {AppConsumer} from "../../App"

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


class ProjectList extends Component {

  state = {...projects};

  componentDidMount() {
    console.log(projects, 'projects')
    console.log(normaliser(projects), 'result')
    console.log(this.state);
  }

  
  render() {
    return (
      <>
      <AppConsumer>
        {context => (
          <ul className={classNames(styles.list, context ? styles.black : '')}>
          {Object.values(this.state).map((project, index)=> {
            return <li 
              key={index}
              className={styles.item}
              >
                <Link className={styles.link} to={`/${project.id}`}>{`${project.name}`}</Link>
               </li>
            })
          }
          </ul>
        )}
        
      </AppConsumer>
      </>
      
    )
  }
}

export default ProjectList;
