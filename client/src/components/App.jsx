import React from 'react';
import axios from 'axios';
import logo from '../../assets/M_Invert.svg';
import github from '../../assets/github.svg';
import linkedin from '../../assets/linkedin.svg';
import slack from '../../assets/slack.svg';

import VideosList from './VideosList.jsx';
import EntryList from './EntryList.jsx';
import ProjectList from './ProjectList.jsx';

import VideoView from './VideoView.jsx';
import EntryView from './EntryView.jsx';
import ProjectView from './ProjectView.jsx';
import NoteView from './NoteView.jsx';

import EntryForm from './EntryForm.jsx';
import LinkForm from './LinkForm.jsx';
import Keywords from './Keywords.jsx';
import KeywordsForm from './KeywordsForm.jsx';
import NoteForm from './NoteForm';

import ModulesSelect from './ModulesSelect';



class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      entries: [],
      projects: [],
      videos: [],
      links: [],
      keywordOpen: false,
      noteOpen: false,
      linkOpen: false,
      entryOpen: false,
      toRender: 'entry',
      module: 'entries',
      currentItem: {},
      currentId: 1,
      nextEntryId: null,
      nextProjectId: null

    };

    this.getVideos = this.getVideos.bind(this);
    this.getEntries = this.getEntries.bind(this);
    this.getProjects = this.getProjects.bind(this);
    this.getLinks = this.getLinks.bind(this);
    this.getnextEntryId = this.getnextEntryId.bind(this);
    this.getnextProjectId = this.getnextProjectId.bind(this);

    this.onClickVideo = this.onClickVideo.bind(this);
    this.onClickEntry = this.onClickEntry.bind(this);
    this.onClickProject = this.onClickProject.bind(this);

    this.onClickAddKeyword = this.onClickAddKeyword.bind(this);
    this.onClickAddNote = this.onClickAddNote.bind(this);
    this.onClickAddLink = this.onClickAddLink.bind(this);
    this.onClickAddEntry = this.onClickAddEntry.bind(this);
  }
  componentDidMount() {
    let requests = [];
    requests.push(this.getVideos());
    requests.push(this.getEntries());
    requests.push(this.getProjects());
    requests.push(this.getnextEntryId());
    requests.push(this.getnextProjectId());
    Promise.all(requests)
      .then(results => {
        this.setState({
          videos: results[0].data,
          entries: results[1].data,
          projects: results[2].data,
          nextEntryId: results[3].data[0].max +1,
          nextProjectId: results[4].data[0].max +1,
          currentItem: results[1].data[0]
        }, () => {
          this.getLinks();
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

  getnextEntryId() {
    return axios.get('/api/entries/max')
      .catch(err => console.log('ERROR GETTING LAST ENTRY ID', err));
  }

  getProjects() {
    return axios.get('/api/projects')
      .catch(err => console.log('ERROR GETTING PROJECTS', err));
  }

  getnextProjectId() {
    return axios.get('/api/projects/max')
      .catch(err => console.log('ERROR GETTING LAST PROJECT ID', err));
  }

  getLinks() {
    return axios.get(`/api/${this.state.module}/${this.state.currentId}/links`, { params: { linked_ref_id: this.state.currentId } })
      .then(res => {
        console.log('RES FOR GET LINKS', res)
        this.setState({ links: res.data });
      })
      .catch(err => console.log('ERROR GETTING LINKS ENTRIES: ', err));
  }

  // CLICK HANDLERS ==================================================================== //
  onClickVideo(video) {
    this.setState({
      currentItem: video,
      toRender: 'video',
      module: 'videos',
      currentId: video.id
    });
  }

  onClickEntry(entry) {
    // console.log('CLICKED');
    this.setState({
      currentItem: entry,
      toRender: 'entry',
      module: 'entries',
      currentId: entry.id
    }, () => {
      this.getLinks();
    });
  }

  onClickProject(project) {
    // console.log('CLICKED');
    this.setState({
      currentItem: project,
      toRender: 'project',
      module: 'projects'
    }, () => {
      this.getLinks();
    });
  }

  onClickAddKeyword() {
    this.setState({ keywordOpen: !this.state.keywordOpen });
  }

  onClickAddNote() {
    this.setState({ noteOpen: !this.state.noteOpen });
  }

  onClickAddLink() {
    this.setState({ linkOpen: !this.state.linkOpen });
  }

  onClickAddEntry() {
    this.setState({ entryOpen: !this.state.entryOpen });
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
            <div style={{ marginRight: "20px" }}><a href="https://github.com/nypeach/MyTechnicalJournal/" target="_blank" rel="noopener"><img src={github} className="svg-Row" alt="Github" /></a><a href="https://www.linkedin.com/in/jodimsilverman/" target="_blank" rel="noopener"><img src={linkedin} className="svg-Row" alt="LinkedIn" /></a><a href="mailto:jodimsilverman@gmail.com"><img src={slack} className="svg-Row" alt="Slack" /></a></div>
          </header>


          <div className="sidebar-nav"> {/* SIDEBAR START======================================== */}
            <div className="sidebarText"></div>
            <i className="fas fa-book-open fa-3x" onClick={this.onClickAddEntry}></i>
            <div className="sidebarText">Journal Entries</div>
            <i className="fas fa-exclamation-triangle fa-3x"></i>
            <div className="sidebarText">Errors Messages</div>
            <i className="fab fa-youtube fa-3x"></i>
            <div className="sidebarText">Videos</div>
            <i className="fas fa-tasks fa-3x"></i>
            <div className="sidebarText">Projects</div>
            <i className="fas fa-file-code fa-3x"></i>
            <div className="sidebarText">Tutorials</div>
            <i className="fas fa-file-contract fa-3x" onClick={this.onClickAddNote}></i>
            <div className="sidebarText">Notes</div>
            <i className="fas fa-link fa-3x" onClick={this.onClickAddLink}></i>
            <div className="sidebarText">Links</div>

          </div> {/* SIDEBAR END START ========================================== */}

          <div className="top-search">
            <div className="top-searchLeft">Search:</div> <Keywords />&nbsp;&nbsp;<button className="top-button" style={{ display: "block" }} onClick={this.onClickAddKeyword}>ADD KEYWORD</button>
            {this.state.keywordOpen ? (<KeywordsForm onClickAddKeyword={this.onClickAddKeyword} />) : null}

          </div>

          <div className="listContainer"> {/* LIST CONTAINER START ======================================== */}
            <div style={{ marginTop: "-5px" }}></div>
            {this.state.noteOpen ? (<NoteForm noteOpen={this.state.noteOpen} currentId={this.state.currentId} module={this.state.module} onClickAddNote={this.onClickAddNote} />) : null}

            {this.state.entryOpen ? (<EntryForm linkOpen={this.state.linkOpen} linked_ref_id={this.state.nextEntryId} onClickAddLink={this.onClickAddLink}  onClickAddEntry={this.onClickAddEntry}/>) : null}
            {/* {this.state.linkOpen ? (<LinkForm getLinks={this.state.getLinks} onClickAddLink={this.onClickAddLink} />) : null} */}

            {/* TESTING AREA ======================================== */}
            <div className="mytextdiv">
              <div className="mytexttitle">

              </div>
              <div className="divider"></div>
            </div>


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

            <EntryList
              // key={this.state.listItems}
              entries={this.state.entries}
              onClickEntry={this.onClickEntry}
              getEntries={this.getEntries}
              links={this.state.links}
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
                currentItem={this.state.currentItem}
                videos={this.state.videos}
                getVideos={this.getVideos}
                onClickVideo={this.onClickVideo}
              />
              : null}
          </div>

          <div>
            {this.state.toRender === 'entry' ?
              <EntryView
                // key={this.state.currentItem.id}
                currentItem={this.state.currentItem}
                entries={this.state.entries}
                getEntries={this.getEntries}
                onClickEntry={this.onClickEntry}
                links={this.state.links}
                linksOpen={this.state.linkOpen}
                onClickAddLink={this.onClickAddLink}
                getLinks={this.getLinks}
                onClickAddNote={this.onClickAddNote}
              />
              : null}
          </div>

          <div>
            {this.state.toRender === 'project' ?
              <ProjectView
                key={this.state.currentItem.id}
                currentItem={this.state.currentItem}
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
