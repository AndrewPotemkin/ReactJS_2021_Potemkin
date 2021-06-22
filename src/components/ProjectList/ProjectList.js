import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styles from './ProjectList.module.scss';
import classNames from "classnames";
import {connect} from 'react-redux'



class ProjectList extends Component {

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
      projects: state.projects.data,
      isDarkTheme: state.theme.isDark
  }
}

export default connect(mapStateToProps)(ProjectList);
