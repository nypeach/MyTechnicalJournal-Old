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
import NotesView from './NotesView.jsx';
import VideosList from './VideosList.jsx';
import VideoView from './VideoView.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      listItems: [],
      currentItem: {},
      isOpen: false,
      noteOpen: false,
      projectItems: [],
      currentProject: {},
      videos: [],
      currentVideo: {},
      isVideoOpen: false,
      currentOpen: 'journal'

    };

    this.getVideos = this.getVideos.bind(this);
    this.onClickVideo = this.onClickVideo.bind(this);
    this.getJournals = this.getJournals.bind(this);
    this.onClickJournal= this.onClickJournal.bind(this);

    this.getProjects = this.getProjects.bind(this);
    this.onAddNoteClicked = this.onAddNoteClicked.bind(this);
  }
  componentDidMount() {
    this.getJournals();
    this.getProjects();
    this.getVideos();
  }

  // GET DATA ======================================================================== //
  getVideos() {
    axios.get('/videos')
      .then(res => {
        this.setState({ videos: res.data, currentVideo: res.data[0] });
      })
      .catch(err => console.log('ERROR GETTING VIDEOS ENTRIES: ', err));
  }

  getJournals() {
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


// CLICK HANDLERS ==================================================================== //
  onClickVideo(video) {
    this.setState({
      currentVideo: video,
      isVideoOpen: !this.state.isVideoOpen,
      currentOpen: 'video'
    })
  }
  onClickJournal(item) {
    // console.log('CLICKED');
    this.setState({
      currentItem: item,
      isOpen: !this.state.isOpen,
      currentOpen: 'journal'
    });
  }



  onAddNoteClicked() {
    this.setState({ noteOpen: !this.state.noteOpen });
  }





  render() {
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
          <div className="top-searchLeft">Search:</div> <Keywords handleKeywordChange={this.handleKeywordChange}/>
        </div>

        <div className="listContainer"> {/* LIST CONTAINER START ======================================== */}

          <div className="mytextdiv" style={{marginTop: "-5px"}}>
            <div className="mytexttitle">
              Videos
            </div>
            <div className="divider"></div>

          </div>
          <VideosList
            getVideos={this.getVideos}
            // onVideoClicked={this.onVideoClicked}
            onClickVideo={this.onClickVideo}
            videos={this.state.videos}
            currentVideo={this.state.currentVideo}
          />
          <div className="mytextdiv">
            <div className="mytexttitle">
              Journal Entries
            </div>
            <div className="divider"></div>
          </div>
            <JournalEntryList
              key={this.state.listItems}
              listItems={this.state.listItems}
              currentItem={this.state.currentItem}
              isOpen={this.state.isOpen}
              projectItems={this.state.projectItems}
              currentProject={this.state.currentProject}
              onClickJournal={this.onClickJournal}
            />

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
            {this.state.currentOpen === 'video' ?
          <VideoView
              getVideos={this.getVideos}
              onVideoClicked={this.onVideoClicked}
              onClickVideo={this.onClickVideo}
              videos={this.state.videos}
              currentVideo={this.state.currentVideo}
              />
              : null}
          </div>
          <div>
            {this.state.currentOpen === 'journal' ?
              <JournalEntryView
                key={this.state.currentItem.id}
                onClickJournalEntry={this.onClickJournalEntry}
                onJournalEntryClicked={this.onJournalEntryClicked}
                currentItem={this.state.currentItem}
                isOpen={this.state.isOpen} />
              : null}
          </div>
     {/* DISPLAY CONTAINER START ======================================== */}

      </div>



    );
  }

}

export default App;
