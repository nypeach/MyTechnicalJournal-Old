import React from 'react';
import axios from 'axios';
import JournalEntryView from './JournalEntryView';
import ProjectList from './ProjectList';

class JournalEntryList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
    };

  }



  render() {

    return (
      <div>
        <div className="mytextdiv">
          <div className="mytexttitle">
            Journal Entries &nbsp;
         </div>
          <div className="divider"></div>
        </div>
        <div className="listItems"><ul className="no-bullets">
          {this.props.listItems.map(item => (
            <li key={item.id} onClick={() => {this.props.onClickJournalEntry(item); this.props.onJournalEntryClicked()}}>
              {(new Date(item.entry_date).toDateString().slice(4))} | {item.title}
            </li>
          ))}</ul>
        </div>
        {/* {this.props.isOpen ? (<JournalEntryView key={this.props.currentItem.id} onClickJournalEntry={this.props.onClickJournalEntry} onJournalEntryClicked={this.props.onJournalEntryClicked} currentItem={this.props.currentItem} isOpen={this.props.isOpen} />) : null} */}
        <div className="mytextdiv">
          <div className="mytexttitle">
            Projects &nbsp;
         </div>
          <div className="divider"></div>
        </div>
        <div className="listItems">
        <ProjectList
          projectItems={this.props.projectItems}
          currentProject={this.props.currentProject}
          />
          <br></br>
          <button style={{ display: "inline" }} onClick={this.onAddLinksClicked}>ADD PROJECT</button>
        </div>
        <div className="mytextdiv">
          <div className="mytexttitle">
            Tutorials &nbsp;
         </div>
          <div className="divider"></div>
        </div>
        <div className="mytextdiv">
          <div className="mytexttitle">
            Errors &nbsp;
         </div>
          <div className="divider"></div>
        </div>
      </div>

    );
  }


};
export default JournalEntryList;