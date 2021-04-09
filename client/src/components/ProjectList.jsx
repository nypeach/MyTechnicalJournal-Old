import React from 'react';
import axios from 'axios';

class ProjectList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {

    return (
      <div>
        <div><ul className="no-bullets">
          {this.props.projects.map(project => (
            <li className="listItems" key={project.id} onClick={() => { this.props.onClickProject(project)}}>
              {project.project_name}
            </li>
          ))}</ul>
        </div>
      </div>
    );
  }
};
export default ProjectList;