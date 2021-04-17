import React from 'react';
import axios from 'axios';
import App from './App';
import LinkForm from './LinkForm';


class ProjectView extends React.Component {
  constructor(props) {

    super(props);

    this.state = {
    };
  }

  render() {
    console.log('projectview render')

    if (this.props.currentItem === undefined) {
      return '';

    } else {
      let project = this.props.currentItem;

      return (

        <div className="journalContainer">
          <div className="journal">
            <div className="journalTitle">Project: {project.title}</div>
            <div className="journalSubTitle">START DATE:
            <div className="journalText">{project.project_start_date}</div>
            </div>
            <div className="journalSubTitle">END DATE:
            <div className="journalText">{project.project_end_date}</div>
            </div>
            <div className="journalSubTitle">BUDGET:
            <div className="journalText">{project.project_budget}</div>
            </div>
            <div className="journalSubTitle">DESCRIPTION:
            <div className="journalText">{project.project_description}</div>
            </div>
            <div className="journalSubTitle">RELATED:
            <div className="journalText">
                <a href={project.github_url} cursor="pointer" target="_blank">{project.github_url}</a>
              </div>
              <div className="journalSubTitle">TECH STACK:
            <div className="journalText">
                  <table>
                    <tbody>
                    <tr>
                      <td className="stack">Front End:&nbsp;</td>
                      <td>{project.tech_front_end.replace(/,/g, ', ')}</td>
                    </tr>
                    <tr>
                      <td className="stack">Back End:&nbsp;</td>
                      <td>{project.tech_back_end.replace(/,/g, ', ')}</td>
                      </tr>
                      <tr>
                      <td className="stack">Related:&nbsp;</td>
                      <td>{project.tech_related.replace(/,/g, ', ')}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }
  }
}

export default ProjectView;
