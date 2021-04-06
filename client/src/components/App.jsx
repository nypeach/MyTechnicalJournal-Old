import React from 'react';
import axios from 'axios';
import JournalEntryView from './JournalEntryView.jsx';
import JournalEntryList from './JournalEntryList.jsx';
import AddJournalEntry from './AddJournalEntry.jsx';
import ProjectList from './ProjectList.jsx';
import Keywords from './Keywords.jsx';
import logo from '../../assets/M_Invert.svg';
import github from '../../assets/github.svg';
import linkedin from '../../assets/linkedin.svg';
import slack from '../../assets/slack.svg';
import AddNotes from './AddNotes.jsx';



class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      listItems: [],
      currentItem: {},
      isOpen: false,
      noteOpen: false,
      projectItems: [],
      currentProject: {}
    };

    this.onClickJournalEntry = this.onClickJournalEntry.bind(this);
    this.onJournalEntryClicked = this.onJournalEntryClicked.bind(this);
    this.getJournalEntries = this.getJournalEntries.bind(this);
    this.getProjects = this.getProjects.bind(this);
    this.onAddNoteClicked = this.onAddNoteClicked.bind(this);
  }
  componentDidMount() {
    this.getJournalEntries('journal');
    this.getProjects('project');
  }
  onClickJournalEntry(item) {
    // console.log('CLICKED');
    this.setState({
      currentItem: item
    });
  }
  onJournalEntryClicked() {
    // console.log('CLICKED');
    this.setState({ isOpen: !this.state.isOpen });
  }
  onAddNoteClicked() {
    this.setState({ noteOpen: !this.state.noteOpen });
  }

  getJournalEntries() {
    axios.get('/journals')
      .then(res => {
        this.setState({ listItems: res.data, currentItem: res.data[0] });
      })
      .catch(err => console.log('ERROR GETTING JOURNAL ENTRIES: ', err));
  }

  getProjects() {
    axios.get('/projects')
      .then(res => {
        this.setState({ projectItems: res.data, currentProject: res.data[0] });
      })
      .catch(err => console.log('ERROR GETTING PROJECTS', err));
  }

  render() {

    return (

      <div id="app">
        <header className="header-wrapper">
          <div><img src={logo} className="logo" alt="Logo" /><span className="header-text" >MY TECHNICAL JOURNAL</span></div>
          <div><img src={github} className="svg-Row" alt="Github" /><img src={linkedin} className="svg-Row" alt="LinkedIn" /><img src={slack} className="svg-Row" alt="Slack" /></div>
        </header>
        <div className="with-sidebar">
          <div>
            {/* <!-- intermediary wrapper --> */}
            <div className="sidebar">

              <div className="sidebarText"></div>
              <i className="fas fa-book-open fa-3x"></i>
              <div className="sidebarText">Journal Entries</div>
              <i className="fas fa-exclamation-triangle fa-3x"></i>
              <div className="sidebarText">Errors Messages</div>
              <i className="fas fa-tasks fa-3x"></i>
              <div className="sidebarText">Projects</div>
              <i className="fas fa-file-contract fa-3x"></i>
              <div className="sidebarText">Notes</div>
              <i className="fas fa-file-code fa-3x"></i>
              <div className="sidebarText">Tutorials</div>
            </div>

            <div className="not-sidebar">
              <div className="top-search">
                <div className="top-searchLeft">KEYWORD SEARCH</div>
                <Keywords handleKeywordChange={this.handleKeywordChange} />
              </div>

{/* =============================================================================================================== */}
              <div className="with-RightSidebar">
                <div>
                  {/* <!-- intermediary wrapper --> */}
                  <div className="RightSidebar">
                    <JournalEntryList
                      key={this.state.listItems}
                      listItems={this.state.listItems}
                      currentItem={this.state.currentItem}
                      isOpen={this.state.isOpen}
                      projectItems={this.state.projectItems}
                      currentProject={this.state.currentProject}
                      onClickJournalEntry={this.onClickJournalEntry}
                      onJournalEntryClicked={this.onJournalEntryClicked}
                    />
                    <button style={{ display: "inline" }} onClick={this.onAddNoteClicked}>ADD NOTES</button>


                    {this.state.noteOpen ? (<AddNotes
                    onAddNoteClicked={this.onAddNoteClicked}  />) : null}

                  </div>

                  <div className="not-RightSidebar">
                    <div className="insideViewItem">
                    <JournalEntryView
                    key={this.state.currentItem.id}
                    onClickJournalEntry={this.onClickJournalEntry}
                    onJournalEntryClicked={this.onJournalEntryClicked}
                    currentItem={this.state.currentItem}
                    isOpen={this.state.isOpen} />
                    </div>
                  </div>
                </div>
              </div>
{/* =============================================================================================================== */}
            </div>
          </div>
        </div>
      </div>

    );
  }

}

export default App;
