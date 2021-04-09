import React from 'react';
import axios from 'axios';
import App from './App';
import AddLink from './AddLink';


class ProjectView extends React.Component {
  constructor(props) {

    super(props);

    this.state = {
      // linked: [],
      // isOpen: false
    };
    // this.getJournalEntryLinks = this.getJournalEntryLinks.bind(this);
    // this.onAddLinksClicked = this.onAddLinksClicked.bind(this);
  }

  // onAddLinksClicked() {
  //  // console.log('CLICKED');
  //   this.setState({ isOpen: !this.state.isOpen });
  // }

  // componentDidMount() {
  //   this.getJournalEntryLinks();
  // }

  // getJournalEntryLinks() {

  //   axios.get('/links', {params: {linked_ref: 'Journal Entry',linked_ref_id: this.props.currentItem.id}})
  //     .then(res => {
  //     //  console.log('RES DATA', res.data);
  //       this.setState({ linked: res.data });
  //     })
  //     .catch(err => console.log('ERROR GETTING JOURNAL ENTRIES: ', err));
  // }

  render() {
    if (this.props.currentProject === undefined) {
      return '';

    } else {
      let project = this.props.currentProject;

      return (

        <div className="journalContainer">
          <div className="journal">
            <div className="journalTitle"key={project.id}>
              {project.project_name}
            </div>
          <div key={project.project_start_date} className="journalSubTitle">Project Start Date:
            <div className="journalText">{(new Date(project.project_start_date).toDateString().slice(4))}</div>
          </div>
            <div key={project.project_end_date} className="journalSubTitle">Project End Date:
            <div className="journalText">{(new Date(project.project_end_date).toDateString().slice(4))}</div>
            </div>
            <div key={project.project_description} className="journalSubTitle">Project Description:
            <div className="journalText">{project.project_description}</div>
            </div>
            {/* <div className="journalSubTitle links">Links:
              <div>
                <ul className="no-bullets">
              {this.state.linked.map(link => (
                <li key={link.id}><a href={link.url_link} target="_blank">{link.url_short}</a></li>
              ))}</ul>
            </div>
            </div>
            <br></br>
            <button style={{ display: "inline" }} onClick={this.onAddLinksClicked}>ADD LINKS</button> */}
        </div>
        </div>
      );
    }
  }

}

export default ProjectView;
