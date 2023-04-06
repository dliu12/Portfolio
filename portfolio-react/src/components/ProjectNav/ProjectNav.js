import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

import '../../assets/styles/components/ProjectNav.css';

const ProjectNav = () => {
  const [isCollapsed, setIsCollapsed] = React.useState(true);
  const projectList = [{ name: 'project 1', url: '/project_1' }];

  return (
    <ul
      className='ProjectNav'
      onMouseEnter={() => {
        setIsCollapsed(false);
      }}
      onMouseLeave={() => {
        setIsCollapsed(true);
      }}>
      <li className='ProjectNav__header'>
        Projects <FontAwesomeIcon icon={faCaretDown} />
      </li>
      {!isCollapsed && <ProjectDropDown projectList={projectList} />}
    </ul>
  );
};

export default ProjectNav;

const ProjectDropDown = ({ projectList }) => {
  return (
    <React.Fragment>
      {projectList.map((project, ind) => (
        <li className='ProjectNav__items' key={`project-${ind}`}>
          <Link to={project.url}>{project.name}</Link>
        </li>
      ))}
    </React.Fragment>
  );
};

ProjectDropDown.propTypes = {
  projectList: PropTypes.array.isRequired
};
