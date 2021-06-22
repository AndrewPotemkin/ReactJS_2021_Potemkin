import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styles from './ProjectList.module.scss';
import classNames from "classnames";
import {connect} from 'react-redux'
// import projects from '../projects';


// const normaliser = (projects) => {

//   const obj = {
//     projectsById: {},
//     tasksById: {}
//   };

//   for (let key in projects) {
//     const projectId = projects[key].id;
//     const projectName = projects[key].name;
//     const tasks = projects[key].tasks;
//     const projectTasksIds = tasks.map(item => item.id);
//     tasks.forEach(item => {
//       obj.tasksById[item.id] = item;
//     })
//     const projectInfo = {
//       id: projectId,
//       name: projectName,
//       tasksIds: projectTasksIds
//     }
//     obj.projectsById[projectId] = projectInfo
//   }
//   return obj;
// }


class ProjectList extends Component {

  // state = {...projects};

  
  render() {
    return (
      <>

          <ul className={classNames(styles.list, this.props.isDarkTheme ? styles.black : '')}>
          {this.props.projects && Object.values(this.props.projects).map((project, index)=> {
            return <li 
              key={index}
              className={styles.item}
              >
                <Link className={styles.link} to={`/${project.id}`}>{`${project.name}`}</Link>
               </li>
            })
          }
          </ul>

      </>
      
    )
  }
}

function mapStateToProps(state) {
  return {
      projects: state.projects.data.projectsById,
      isDarkTheme: state.theme.isDark
  }
}



export default connect(mapStateToProps)(ProjectList);
