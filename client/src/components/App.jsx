import React from 'react';
import axios from 'axios';
import logo from '../../assets/M_Invert.svg';
import github from '../../assets/github.svg';
import linkedin from '../../assets/linkedin.svg';
import slack from '../../assets/slack.svg';
import CreatableSelect from 'react-select/creatable';

import EntryList from './EntryList.jsx';
import ErrorList from './ErrorList.jsx';
import VideosList from './VideosList.jsx';
import ProjectList from './ProjectList.jsx';
import NoteList from './NoteList.jsx';

import EntryView from './EntryView.jsx';
import ErrorView from './ErrorView.jsx';
import VideoView from './VideoView.jsx';
import ProjectView from './ProjectView.jsx';
import NoteView from './NoteView.jsx';

import EntryForm from './EntryForm.jsx';
import ErrorForm from './ErrorForm.jsx';
import VideoForm from './VideoForm.jsx';
import ProjectForm from './ProjectForm.jsx';
import NoteForm from './NoteForm';
import LinkForm from './LinkForm.jsx';
import KeywordsForm from './KeywordsForm.jsx';


import ModulesSelect from './ModulesSelect';

const customStyles = {
  control: (provided, state) => ({
    ...provided,
    marginTop: '12px',
    backgroundColor: "#f6f6f6",
    minWidth: '300px',
    minHeight: '36px',
    maxHeight: '36px',
    paddingTop: '0px',
    paddingBottom: '0px',
    verticalAlign: 'middle',
    borderColor: "#D8315B",
    boxShadow: "#D8315B",
    borderWidth: "2px",
    color: '#051538',
    fontSize: '1.05rem',
    "&:hover": {
      borderColor: "#D8315B",
      borderWidth: "2px"
    }
  }),
  valueContainer: (provided, state) => ({
    ...provided,
    marginBottom: '32px',
  }),
  indicatorContainer: (provided, state) => ({
    ...provided,
    marginBottom: '32px',
  }),
  dropdownIndicator: (provided, state) => ({
    ...provided,
    marginBottom: '32px',
  }),
  clearIndicator: (provided, state) => ({
    ...provided,
    marginBottom: '32px',
  }),
  indicatorSeparator: (provided, state) => ({
    ...provided,
    marginBottom: '42px',
  }),
  multiValue: (provided, state) => ({
    ...provided,
    backgroundColor: "#f6f6f6"
  }),
  input: (provided, state) => ({
    ...provided,
    minHeight: '24px',
    maxHeight: '24px',
    minWidth: '300px',
  }),
  container: base => ({
    ...base,
    flexGrow: 1,
    minWidth: '300px',

  }),
  option: (provided, state) => ({
    ...provided,
    color: state.isSelected ? "#f6f6f6" : '#D8315B',
    backgroundColor: state.isSelected ? '#D8315B' : "#f6f6f6",
    backgroundColor: state.isFocused ? "#D8315B" : "#f6f6f6",
    color: state.isFocused ? "#f6f6f6" : '#D8315B',
    fontSize: "16px",
    minWidth: '300px',
  }),
}

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      keywordOptions: [],
      entries: [],
      errors: [],
      videos: [],
      projects: [],
      notes: [],
      links: [],
      keywordOpen: false,
      linkOpen: false,
      entryOpen: false,
      errorOpen: false,
      videoOpen: false,
      projectOpen: false,
      noteOpen: false,
      nextEntryId: null,
      nextErrorId: null,
      nextProjectId: null,
      toRender: 'entry',
      module: 'entries',
      currentItem: {},
      currentId: 1,
      allData: [],
      filtered: [],
      eventLength: 0
    };

    this.getKeywords = this.getKeywords.bind(this);
    this.getEntries = this.getEntries.bind(this);
    this.getErrors = this.getErrors.bind(this);
    this.getVideos = this.getVideos.bind(this);
    this.getProjects = this.getProjects.bind(this);
    this.getNotes = this.getNotes.bind(this);
    this.getLinks = this.getLinks.bind(this);
    this.getnextEntryId = this.getnextEntryId.bind(this);
    this.getnextErrorId = this.getnextErrorId.bind(this);
    this.getnextProjectId = this.getnextProjectId.bind(this);

    this.handleSelectKeyword = this.handleSelectKeyword.bind(this);
    this.handleKeywordChange = this.handleKeywordChange.bind(this);

    this.onClickEntry = this.onClickEntry.bind(this);
    this.onClickError = this.onClickError.bind(this);
    this.onClickVideo = this.onClickVideo.bind(this);
    this.onClickProject = this.onClickProject.bind(this);
    this.onClickNote = this.onClickNote.bind(this);


    this.onClickAddEntry = this.onClickAddEntry.bind(this);
    this.onClickAddError = this.onClickAddError.bind(this);
    this.onClickAddVideo = this.onClickAddVideo.bind(this);
    this.onClickAddProject = this.onClickAddProject.bind(this);
    this.onClickAddKeyword = this.onClickAddKeyword.bind(this);
    this.onClickAddNote = this.onClickAddNote.bind(this);
    this.onClickAddLink = this.onClickAddLink.bind(this);

    this.onUpdateEntryForm = this.onUpdateEntryForm.bind(this);
    this.onUpdateErrorForm = this.onUpdateErrorForm.bind(this);
    this.onUpdateVideoForm = this.onUpdateVideoForm.bind(this);
    this.onUpdateProjectForm = this.onUpdateProjectForm.bind(this);
    this.onUpdateNoteForm = this.onUpdateNoteForm.bind(this);

    this.handleKeywordChange = this.handleKeywordChange.bind(this);


  }
  componentDidMount() {
    let requests = [];
    requests.push(this.getKeywords());
    requests.push(this.getEntries());
    requests.push(this.getErrors());
    requests.push(this.getVideos());
    requests.push(this.getProjects());
    requests.push(this.getNotes());
    requests.push(this.getnextEntryId());
    requests.push(this.getnextErrorId());
    requests.push(this.getnextProjectId());
    Promise.all(requests)
      .then(results => {
        const keywordOptions = results[0].data.map(d => ({
          "value": d.id,
          "label": d.keyword
        }))
        let allData = []
        allData = allData.concat(results[1].data.map(obj => ({ ...obj, module: 'entries' })))
        allData = allData.concat(results[2].data.map(obj => ({ ...obj, module: 'errors' })))
        allData = allData.concat(results[3].data.map(obj => ({ ...obj, module: 'videos' })))
        allData = allData.concat(results[4].data.map(obj => ({ ...obj, module: 'projects' })))
        allData = allData.concat(results[5].data.map(obj => ({ ...obj, module: 'notes' })))
        this.setState({
          keywordOptions: keywordOptions,
          allData: allData,
          entries: results[1].data,
          errors: results[2].data,
          videos: results[3].data,
          projects: results[4].data,
          notes: results[5].data,
          nextEntryId: results[6].data[0].max + 1,
          nextErrorId: results[7].data[0].max + 1,
          nextProjectId: results[8].data[0].max + 1,
          currentItem: results[1].data[0]
        }, () => {
          this.getLinks();
        })
      })
  }

  // GET DATA ======================================================================== //
  getKeywords() {
    return axios.get('/api/keywords')
      .catch(err => console.log('ERROR GETTING KEYWORDS ENTRIES', err));
  }
  getEntries() {
    return axios.get('/api/entries')
      .catch(err => console.log('ERROR GETTING JOURNAL ENTRIES: ', err));
  }
  getErrors() {
    return axios.get('/api/errors')
      .catch(err => console.log('ERROR GETTING ERRORS: ', err));
  }
  getVideos() {
    return axios.get('/api/videos')
      .catch(err => console.log('ERROR GETTING VIDEOS ENTRIES: ', err));
  }
  getProjects() {
    return axios.get('/api/projects')
      .catch(err => console.log('ERROR GETTING PROJECTS', err));
  }
  getNotes() {
    return axios.get('/api/notes')
      .catch(err => console.log('ERROR GETTING PROJECTS', err));
  }
  getnextEntryId() {
    return axios.get('/api/entries/max')
      .catch(err => console.log('ERROR GETTING LAST ENTRY ID', err));
  }
  getnextErrorId() {
    return axios.get('/api/errors/max')
      .catch(err => console.log('ERROR GETTING LAST ENTRY ID', err));
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



  // EVENT ==================================================================== //
  handleSelectKeyword(newValue, actionMeta) {
    console.group('Value Changed');
    console.log('NEWVALUE', newValue);
    console.log(`action: ${actionMeta.action}`);
    console.groupEnd();
  };

  handleKeywordChange(event) {
    let newItems = event.filter(item => item.hasOwnProperty('__isNew__'));
    let keywords = event.map(i => i.label.toLowerCase());
    let newKeywords = newItems.map(item => `('${item.label}')`)
    var kwdRegEx = new RegExp('^' + keywords.map(word => '(?=.*\\b' + word + '\\b)').join('') + '.*$')
    // console.log('REGEX', kwdRegEx)
    // OLD ONE >>>   var kwdRegEx = new RegExp(keywords.join('|'))
    // var filtered = this.state.allData.map(obj => (JSON.stringify(obj).toLowerCase())).filter(item => kwdRegEx.test(item))
    var filtered = this.state.allData.filter(item => kwdRegEx.test(JSON.stringify(item).toLowerCase()))
    console.log('FILTERED', filtered)

    this.setState({ keywords: keywords, filtered: filtered, eventLength: event.length });

  }

  // CLICK HANDLERS ==================================================================== //
  onClickEntry(entry) {
    this.setState({
      currentItem: entry,
      toRender: 'entry',
      module: 'entries',
      currentId: entry.id
    }, () => {
      this.getLinks();
    });
  }

  onClickError(error) {
    this.setState({
      currentItem: error,
      toRender: 'error',
      module: 'errors',
      currentId: error.id
    }, () => {
      this.getLinks();
    });
  }

  onClickVideo(video) {
    this.setState({
      currentItem: video,
      toRender: 'video',
      module: 'videos',
      currentId: video.id
    });
  }

  onClickProject(project) {
    this.setState({
      currentItem: project,
      toRender: 'project',
      module: 'projects',
      currentId: project.id
    })
  }

  onClickNote(note) {
    this.setState({
      currentItem: note,
      toRender: 'note',
      module: 'notes',
      currentId: note.id
    })
  }

  onClickAddEntry() {
    this.setState({ entryOpen: !this.state.entryOpen });
  }
  onClickAddError() {
    this.setState({ errorOpen: !this.state.errorOpen });
  }
  onClickAddVideo() {
    this.setState({ videoOpen: !this.state.videoOpen });
  }
  onClickAddProject() {
    this.setState({ projectOpen: !this.state.projectOpen });
  }
  onClickAddNote() {
    this.setState({ noteOpen: !this.state.noteOpen });
  }
  onClickAddKeyword() {
    this.setState({ keywordOpen: !this.state.keywordOpen });
  }
  onClickAddLink() {
    this.setState({ linkOpen: !this.state.linkOpen });
  }

  onUpdateEntryForm() {
    return axios.get('/api/entries')
      .then(results => {
        console.log('RESULTS', results)
        let length = results.data.length
        this.setState({
          entries: results.data,
          currentItem: results.data[length - 1],
          toRender: 'entry',
          module: 'entries',
          currentId: results.data[length - 1].id
        }, () => {
          this.getLinks();
        })
      })
  }

  onUpdateErrorForm() {
    return axios.get('/api/errors')
      .then(results => {
        console.log('RESULTS', results)
        let length = results.data.length
        this.setState({
          errors: results.data,
          currentItem: results.data[length - 1],
          toRender: 'error',
          module: 'errors',
          currentId: results.data[length - 1].id
        }, () => {
          this.getLinks();
        })
      })
  }

  onUpdateVideoForm() {
    return axios.get('/api/videos')
      .then(results => {
        console.log('RESULTS', results)
        let length = results.data.length
        this.setState({
          videos: results.data,
          currentItem: results.data[length - 1],
          toRender: 'video',
          module: 'videos',
          currentId: results.data[length - 1].id
        }, () => {
          this.getLinks();
        })
      })
  }

  onUpdateProjectForm() {
    return axios.get('/api/projects')
      .then(results => {
        console.log('RESULTS', results)
        let length = results.data.length
        this.setState({
          projects: results.data,
          currentItem: results.data[length - 1],
          toRender: 'project',
          module: 'projects',
          currentId: results.data[length - 1].id
        }, () => {
          this.getLinks();
        })
      })
  }

  onUpdateNoteForm() {
    return axios.get('/api/notes')
      .then(results => {
        console.log('RESULTS', results)
        let length = results.data.length
        this.setState({
          notes: results.data,
          currentItem: results.data[length - 1],
          toRender: 'note',
          module: 'notes',
          currentId: results.data[length - 1].id
        }, () => {
          this.getLinks();
        })
      })
  }

  render() {

    if (this.state.entries.length === 0) {
      return '';
    } else {
      const toRender = this.state.toRender
      console.log('APP STATE', this.state)
      return (

        <div id="app"> {/* APP START ========================================== */}

          <header>
            <div><img src={logo} className="logo" alt="Logo" /><span className="header-text" >MY TECHNICAL JOURNAL</span></div>
            <div style={{ marginRight: "20px" }}><a href="https://github.com/nypeach/MyTechnicalJournal/" target="_blank" rel="noopener"><img src={github} className="svg-Row" alt="Github" /></a><a href="https://www.linkedin.com/in/jodimsilverman/" target="_blank" rel="noopener"><img src={linkedin} className="svg-Row" alt="LinkedIn" /></a><a href="mailto:jodimsilverman@gmail.com"><img src={slack} className="svg-Row" alt="Slack" /></a></div>
          </header>


          <div className="sidebar-nav"> {/* SIDEBAR START======================================== */}
            <div className="sidebarText"></div>
            <i className="fas fa-book-open fa-3x" style={{ cursor: "pointer" }} onClick={this.onClickAddEntry}></i>
            <div className="sidebarText">Journal Entries</div>
            <i className="fas fa-exclamation-triangle fa-3x" style={{ cursor: "pointer" }} onClick={this.onClickAddError} ></i>
            <div className="sidebarText">Errors Messages</div>
            <i className="fab fa-youtube fa-3x" style={{ cursor: "pointer" }} onClick={this.onClickAddVideo}></i>
            <div className="sidebarText">Videos</div>
            <i className="fas fa-tasks fa-3x" style={{ cursor: "pointer" }} onClick={this.onClickAddProject}></i>
            <div className="sidebarText">Projects</div>
            <i className="fas fa-file-contract fa-3x" style={{ cursor: "pointer" }} onClick={this.onClickAddNote}></i>
            <div className="sidebarText">Notes</div>
            <i className="fas fa-file-code fa-3x future" style={{ cursor: "pointer" }} ></i>
            <div className="sidebarText future">Tutorials</div>
            {/* <i className="fas fa-link fa-3x" style={{ cursor: "pointer" }} onClick={this.onClickAddLink}></i>
            <div className="sidebarText">Links</div> */}

          </div> {/* SIDEBAR END START ========================================== */}

          <div className="top-search">
            <div className="wrapper top-searchLeft">
              <div className="form-modal-label-select">Search:</div>
              <CreatableSelect
                isMulti options={this.state.keywordOptions}
                styles={customStyles}
                onChange={this.handleKeywordChange}
              />&nbsp;&nbsp;&nbsp;&nbsp;
              <button className="top-button" onClick={this.onClickAddKeyword}>ADD KEYWORD</button>
              {this.state.keywordOpen ? (<KeywordsForm onClickAddKeyword={this.onClickAddKeyword} />) : null}
            </div>
          </div>

          <div className="listContainer"> {/* LIST CONTAINER START ======================================== */}
            <div style={{ marginTop: "-5px" }}></div>

            {this.state.entryOpen ? (<EntryForm linkOpen={this.state.linkOpen} linked_ref_id={this.state.nextEntryId} onClickAddLink={this.onClickAddLink} onUpdateEntryForm={this.onUpdateEntryForm} onClickAddEntry={this.onClickAddEntry} />) : null}

            {this.state.errorOpen ? (<ErrorForm linkOpen={this.state.linkOpen} linked_ref_id={this.state.nextErrorId} onClickAddLink={this.onClickAddLink} onUpdateErrorForm={this.onUpdateErrorForm} onClickAddError={this.onClickAddError} />) : null}

            {this.state.videoOpen ? (<VideoForm onUpdateVideoForm={this.onUpdateVideoForm} onClickAddVideo={this.onClickAddVideo} />) : null}

            {this.state.projectOpen ? (<ProjectForm onUpdateProjectForm={this.onUpdateProjectForm} onClickAddProject={this.onClickAddProject} />) : null}

            {this.state.noteOpen ? (<NoteForm onUpdateNoteForm={this.onUpdateNoteForm} noteOpen={this.state.noteOpen} currentId={this.state.currentId} module={this.state.module} onClickAddNote={this.onClickAddNote} />) : null}

            {this.state.eventLength !== 0 && this.state.filtered.length === 0 ?

              <div className="mytextdiv">
                <div className="mytexttitle">NO RESULTS FOUND</div>

              </div> :
              <div>
                {this.state.eventLength !== 0 && this.state.filtered.filter(item => item.module === 'entries').length === 0 ?
                  null :
                  <div className="mytextdiv">
                    <div className="mytexttitle">Journal Entries</div>
                    <div className="divider"></div>
                  </div>
                }
                <EntryList
                  entries={this.state.eventLength > 0 ? this.state.filtered.filter(item => item.module === 'entries') : this.state.entries}
                  onClickEntry={this.onClickEntry}
                  getEntries={this.getEntries}
                  links={this.state.links}
                />
                {this.state.eventLength !== 0 && this.state.filtered.filter(item => item.module === 'errors').length === 0 ?
                  null :
                  <div className="mytextdiv">
                    <div className="mytexttitle">Error Messages</div>
                    <div className="divider"></div>
                  </div>
                }
                <ErrorList
                  errors={this.state.eventLength > 0 ? this.state.filtered.filter(item => item.module === 'errors') : this.state.errors}
                  onClickError={this.onClickError}
                  getErrors={this.getErrors}
                  links={this.state.links}
                />
                {this.state.eventLength !== 0 && this.state.filtered.filter(item => item.module === 'videos').length === 0 ?
                  null :
                  <div className="mytextdiv">
                    <div className="mytexttitle">Videos</div>
                    <div className="divider"></div>
                  </div>
                }
                <VideosList
                  // key={this.state.videos}
                  videos={this.state.eventLength > 0 ? this.state.filtered.filter(item => item.module === 'videos') : this.state.videos}
                  onClickVideo={this.onClickVideo}
                  getVideos={this.getVideos}
                // links={this.state.links}
                />
                {this.state.eventLength !== 0 && this.state.filtered.filter(item => item.module === 'projects').length === 0 ?
                  null :
                  <div className="mytextdiv">
                    <div className="mytexttitle">Projects</div>
                    <div className="divider"></div>
                  </div>
                }
                <ProjectList
                  projects={this.state.eventLength > 0 ? this.state.filtered.filter(item => item.module === 'projects') : this.state.projects}
                  onClickProject={this.onClickProject}
                  getProjects={this.getProjects}
                />
                {this.state.eventLength !== 0 && this.state.filtered.filter(item => item.module === 'notes').length === 0 ?
                  null :
                  <div className="mytextdiv">
                    <div className="mytexttitle">Notes</div>
                    <div className="divider"></div>
                  </div>
                }
                < NoteList
                  notes={this.state.eventLength > 0 ? this.state.filtered.filter(item => item.module === 'notes') : this.state.notes}
                  onClickNote={this.onClickNote}
                  getNotes={this.getNotes}
                />
                <div className="endOfList"></div>
                <br></br>
                <br></br>
                <br></br>
                <div className="endOfList"></div>

              </div>
            }

            <br></br>
            <br></br>
            <br></br>
            <br></br>
          </div>  {/* LIST CONTAINER END ======================================== */}

          {/* DISPLAY CONTAINER START ======================================== */}

          <div>
            {this.state.toRender === 'entry' ?
              <EntryView
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
            {this.state.toRender === 'error' ?
              <ErrorView
                currentItem={this.state.currentItem}
                errors={this.state.errors}
                getErrors={this.getErrors}
                onClickError={this.onClickError}
                links={this.state.links}
                linksOpen={this.state.linkOpen}
                onClickAddLink={this.onClickAddLink}
                getLinks={this.getLinks}
                onClickAddNote={this.onClickAddNote}
              />
              : null}
          </div>

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

          <div>
            {this.state.toRender === 'note' ?
              <NoteView
                key={this.state.currentItem.id}
                currentItem={this.state.currentItem}
                notes={this.state.notes}
                getNotes={this.getNotes}
                onClickNote={this.onClickNote}
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
