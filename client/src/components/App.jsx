import React from 'react';
import axios from 'axios';
import logo from '../../assets/M_Invert.svg';
import github from '../../assets/github.svg';
import linkedin from '../../assets/linkedin.svg';
import slack from '../../assets/slack.svg';

import VideosList from './VideosList.jsx';
import JournalEntryList from './JournalEntryList.jsx';
import ProjectList from './ProjectList.jsx';
import VideoView from './VideoView.jsx';
import JournalEntryView from './JournalEntryView.jsx';
import ProjectView from './ProjectView.jsx';
import NotesView from './NotesView.jsx';

import AddJournalEntry from './AddJournalEntry.jsx';
import AddNotes from './AddNotes.jsx';
import Keywords from './Keywords.jsx';
import KeywordsForm from './KeywordsForm.jsx';
import StackTypes from './StackTypes.jsx';



class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      entries: [],
      projects: [],
      videos: [],
      links: [],
      addKeywordOpen: false,
      toRender: 'entry',
      module: 'entries',
      currentItem:{},
      currentId: 1

    };

    this.getVideos = this.getVideos.bind(this);
    this.getEntries = this.getEntries.bind(this);
    this.getProjects = this.getProjects.bind(this);
    this.getLinks = this.getLinks.bind(this);

    this.onClickVideo = this.onClickVideo.bind(this);
    this.onClickEntry = this.onClickEntry.bind(this);
    this.onClickProject = this.onClickProject.bind(this);
    this.onClickAddKeyword = this.onClickAddKeyword.bind(this);

  }
  componentDidMount() {
    let requests = [];
    requests.push(this.getVideos());
    requests.push(this.getEntries());
    requests.push(this.getProjects());
    requests.push(this.getLinks());
    Promise.all(requests)
      .then(results => {
        this.setState({
          videos: results[0].data,
          entries: results[1].data,
          projects: results[2].data,
          links: results[3].data,
          currentItem: results[1].data[0]
        })
      })
    }

  // GET DATA ======================================================================== //
  getVideos() {
    return axios.get('/api/videos')
      .catch(err => console.log('ERROR GETTING VIDEOS ENTRIES: ', err));
  }

  getEntries() {
    return axios.get('/api/entries')
      .catch(err => console.log('ERROR GETTING JOURNAL ENTRIES: ', err));
  }

  getProjects() {
    return axios.get('/api/projects')
      .catch(err => console.log('ERROR GETTING PROJECTS', err));
  }

  getLinks() {
    return axios.get(`/api/${this.state.module}/${this.state.currentId}/links`, { params: { linked_ref_id: this.state.currentId} })
      .catch(err => console.log('ERROR GETTING LINKS ENTRIES: ', err));
  }

  // CLICK HANDLERS ==================================================================== //
  onClickVideo(video) {
    this.setState({
      currentItem: video,
      toRender: 'video',
      module: 'videos',
      currentId: video.id
    })
  }
  onClickEntry(entry) {
    // console.log('CLICKED');
    this.setState({
      currentItem: entry,
      toRender: 'entry',
      module: 'entries',
      currentId: entry.id
    },() => {
      this.getLinks()
    });

  }
  onClickProject(project) {
    // console.log('CLICKED');
    this.setState({
      currentItem: project,
      toRender: 'project',
      module: 'projects'
    });

  }
  onClickAddKeyword() {
    this.setState({ addKeywordOpen: !this.state.addKeywordOpen });
  }

  onAddNoteClicked() {
    this.setState({ noteOpen: !this.state.noteOpen });
  }





  render() {

    if (this.state.entries.length === 0) {
      return '';
    } else {
      const toRender = this.state.toRender
      console.log('STATE', this.state)
      return (

        <div id="app"> {/* APP START ========================================== */}

          <header>
            <div><img src={logo} className="logo" alt="Logo" /><span className="header-text" >MY TECHNICAL JOURNAL</span></div>
            <div><img src={github} className="svg-Row" alt="Github" /><img src={linkedin} className="svg-Row" alt="LinkedIn" /><img src={slack} className="svg-Row" alt="Slack" /></div>
          </header>


          <div className="sidebar-nav"> {/* SIDEBAR START======================================== */}
            <div className="sidebarText"></div>
            <i className="fas fa-book-open fa-3x"></i>
            <div className="sidebarText">Journal Entries</div>
            <i className="fas fa-exclamation-triangle fa-3x"></i>
            <div className="sidebarText">Errors Messages</div>
            <i className="fab fa-youtube fa-3x"></i>
            <div className="sidebarText">Videos</div>
            <i className="fas fa-tasks fa-3x"></i>
            <div className="sidebarText">Projects</div>
            <i className="fas fa-file-contract fa-3x"></i>
            <div className="sidebarText">Notes</div>
            <i className="fas fa-file-code fa-3x"></i>
            <div className="sidebarText">Tutorials</div>
          </div> {/* SIDEBAR END START ========================================== */}

          <div className="top-search">
            <div className="top-searchLeft">Search:</div> <Keywords />&nbsp;&nbsp;<button className="top-button" style={{ display: "block" }} onClick={this.onClickAddKeyword}>ADD KEYWORD</button>
            {this.state.addKeywordOpen ? (<KeywordsForm onClickAddKeyword={this.onClickAddKeyword} />) : null}

          </div>

          <div className="listContainer"> {/* LIST CONTAINER START ======================================== */}
            <div style={{ marginTop: "-5px" }}></div>
            {/* TESTING AREA ======================================== */}
            <div className="mytextdiv">
              <div className="mytexttitle">
                StackTypes (Will Delete)
            </div>
              <div className="divider"></div>
            </div>
            <StackTypes />
            <div className="mytextdiv">
              <div className="mytexttitle">
                Add New Keywords (Will Delete)
            </div>
              <div className="divider"></div>
            </div>

            <div className="mytextdiv">
              <div className="mytexttitle">Videos</div>
              <div className="divider"></div>
            </div>

            <VideosList
              // key={this.state.videos}
              videos={this.state.videos}
              onClickVideo={this.onClickVideo}
              getVideos={this.getVideos}
              // links={this.state.links}
            />

            <div className="mytextdiv">
              <div className="mytexttitle">Journal Entries</div>
              <div className="divider"></div>
            </div>

            <JournalEntryList
              // key={this.state.listItems}
              entries={this.state.entries}
              onClickEntry={this.onClickEntry}
              getEntries={this.getEntries}
              // links={this.state.links}
            />



            <div className="mytextdiv">
              <div className="mytexttitle">Projects</div>
              <div className="divider"></div>
            </div>

            <ProjectList
              // key={this.state.listItems}
              projects={this.state.projects}
              onClickProject={this.onClickProject}
              getProjects={this.getProjects}
              // links={this.state.links}
            />





            {/*





          <div className="mytextdiv">
            <div className="mytexttitle">
              Journal Entries
            </div>
            <div className="divider"></div>
          </div>
          <JournalEntryList
            // key={this.state.listItems}
            listItems={this.state.listItems}
            currentItem={this.state.currentItem}
            isOpen={this.state.isOpen}
            onClickJournal={this.onClickJournal}
          />

          <div className="mytextdiv">
            <div className="mytexttitle">
              Projects
            </div>
            <div className="divider"></div>
          </div>
          <ProjectList
            // key={this.state.projects}
            projects={this.state.projects}
            currentProject={this.state.currentProjects}
            projectOpen={this.state.projectOpen}
            onClickProject={this.onClickProject}
          />
 */}


            <div className="mytextdiv">
              <div className="mytexttitle">
                Error Messages
            </div>
              <div className="divider"></div>
            </div>
            <div className="mytextdiv">
              <div className="mytexttitle">
                Notes
            </div>
              <div className="divider"></div>
            </div>
            <div className="mytextdiv">
              <div className="mytexttitle">
                Tutorials
            </div>
              <div className="divider"></div>
            </div>
            <div className="mytextdiv">
              <div className="mytexttitle">
                Links
            </div>
              <div className="divider"></div>
            </div>
            <div className="mytextdiv">
              <div className="mytexttitle">
                Journal Entries
            </div>
              <div className="divider"></div>
            </div>
            <div className="mytextdiv">
              <div className="mytexttitle">
                Journal Entries
            </div>
              <div className="divider"></div>
            </div>
            <div className="mytextdiv">
              <div className="mytexttitle">
                Journal Entries
            </div>
              <div className="divider"></div>
            </div>
            <div className="mytextdiv">
              <div className="mytexttitle">
                Journal Entries
            </div>
              <div className="divider"></div>
            </div>
            <div className="mytextdiv">
              <div className="mytexttitle">
                Journal Entries
            </div>
              <div className="divider"></div>
            </div>
            <div className="mytextdiv">
              <div className="mytexttitle">
                Journal Entries
            </div>
              <div className="divider"></div>
            </div>
            <div className="mytextdiv">
              <div className="mytexttitle">
                Journal Entries
            </div>
              <div className="divider"></div>
            </div>
            <div className="mytextdiv">
              <div className="mytexttitle">
                Journal Entries
            </div>
              <div className="divider"></div>
            </div>
            <div className="mytextdiv">
              <div className="mytexttitle">
                Journal Entries
            </div>
              <div className="divider"></div>
            </div>
            <div className="mytextdiv">
              <div className="mytexttitle">
                Journal Entries
            </div>
              <div className="divider"></div>
            </div>
            <div className="mytextdiv">
              <div className="mytexttitle">
                Journal Entries
            </div>
              <div className="divider"></div>
            </div>
            <div className="mytextdiv">
              <div className="mytexttitle">
                Journal Entries
            </div>
              <div className="divider"></div>
            </div>
            <div className="mytextdiv">
              <div className="mytexttitle">
                Journal Entries
            </div>
              <div className="divider"></div>
            </div>
            <div className="mytextdiv">
              <div className="mytexttitle">
                Journal Entries
            </div>
              <div className="divider"></div>
            </div>
            <div className="mytextdiv">
              <div className="mytexttitle">
                Journal Entries
            </div>
              <div className="divider"></div>
            </div>

          </div>  {/* LIST CONTAINER END ======================================== */}

          {/* DISPLAY CONTAINER START ======================================== */}
          <div>
            {this.state.toRender === 'video' ?
              <VideoView
                key={this.state.currentItem.id}
                currentVideo={this.state.currentItem}
                videos={this.state.videos}
                getVideos={this.getVideos}
                onClickVideo={this.onClickVideo}
              />
              : null}
          </div>

          <div>
            {this.state.toRender === 'entry' ?
              <JournalEntryView
                // key={this.state.currentItem.id}
                currentEntry={this.state.currentItem}
                entries={this.state.entries}
                getEntries={this.getEntries}
                onClickEntry={this.onClickEntry}
                links={this.state.links}
              />
              : null}
          </div>

          <div>
            {this.state.toRender === 'project' ?
              <ProjectView
                key={this.state.currentItem.id}
                currentProject={this.state.currentItem}
                projects={this.state.projects}
                getProjects={this.getProjects}
                onClickProject={this.onClickProject}
              />
              : null}
          </div>
          {/* DISPLAY CONTAINER END ======================================== */}

        </div>



      );
    }


  }

}

export default App;
