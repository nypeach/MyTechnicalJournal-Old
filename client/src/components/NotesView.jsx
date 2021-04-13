import React from 'react';
import marked from 'marked';

const renderContent = `# MyTechnicalJournal



# Future Enhancements
Preformatted Text (make code inside code box)
<pre>code goes here()</pre>

# Contributors
Stephen H. Hyde https://github.com/birdhighway
Jihang Li https://github.com/jihangli10
Phil Teves https://github.com/philteves`



class NotesView extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      content: renderContent
    };

    this.getMarkdownText = this.getMarkdownText.bind(this);
  }
  getMarkdownText() {
    var rawMarkup = marked(this.state.content, { sanitize: true })
    return {
      __html: rawMarkup
    }
  }


  render() {

    return (
      <div className="journalContainer">
        <div className="journal">
          <div id="outputText">
            <label>Output</label>
            <div id="outputText" dangerouslySetInnerHTML={this.getMarkdownText()}></div>
          </div>
        </div>
      </div>
    );
  }

}

export default NotesView;