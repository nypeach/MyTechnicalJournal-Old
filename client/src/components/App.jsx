import React from 'react';
import axios from 'axios';
import JournalEntryView from './JournalEntryView.jsx';
import JournalEntryList from './JournalEntryList.jsx';
import AddJournalEntry from './AddJournalEntry.jsx';
import ProjectList from './ProjectList.jsx';
import Keywords from './Keywords.jsx';


class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      listItems: [],
      currentItem: {},
      isOpen: false,
      projectItems:[],
      currentProject: {}
    };
    this.onClickJournalEntry = this.onClickJournalEntry.bind(this);
    this.onJournalEntryClicked = this.onJournalEntryClicked.bind(this);
    this.getJournalEntries = this.getJournalEntries.bind(this);
    this.getProjects = this.getProjects.bind(this);
  }
  componentDidMount() {
    this.getJournalEntries('journal');
    this.getProjects('project');
  }
  onClickJournalEntry(item) {
    console.log('CLICKED');
    this.setState({
      currentItem: item
    });
  }
  onJournalEntryClicked() {
    console.log('CLICKED');
    this.setState({ isOpen: !this.state.isOpen});
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
        <div className="heading">
        <h1 style={{display: "inline"}} className="heading-left">MY TECHNICAL JOURNAL</h1>
        <div className="heading-right1">
            <Keywords style={{ display: "inline" }} className="heading-right1" handleKeywordChange={this.handleKeywordChange} /></div>
        </div>
        <div className="main">
          <AddJournalEntry
          getJournalEntries={this.getJournalEntries} />

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

          {/* <ProjectList
            key={this.state.projectItems}
            listItems={this.state.projectItems}
            currentItem={this.state.currentProject}
            isOpen={this.state.isOpen}
            onClickJournalEntry={this.onClickJournalEntry}
            onJournalEntryClicked={this.onJournalEntryClicked}
          /> */}

        </div>
      </div>
    );
  }

}

export default App;
