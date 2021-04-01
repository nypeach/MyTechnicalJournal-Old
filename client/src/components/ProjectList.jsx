import React from 'react';
import axios from 'axios';
import JournalEntryView from './JournalEntryView';

class ProjectList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
    };
    this.onClickProject=this.onClickProject.bind(this);

  }

onClickProject() {
  alert('Coming Soon!! This is a future enhancement!')
}

  render() {

    return (

        <div><ul className="no-bullets">
          {this.props.projectItems.map(item => (
            <li key={item.id} onClick={this.onClickProject}>
              {(new Date(item.project_start_date).toDateString().slice(4))} | {item.project_name}
            </li>
          ))}</ul>
        </div>



    );
  }


};
export default ProjectList;