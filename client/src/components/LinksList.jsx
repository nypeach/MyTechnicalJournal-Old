import React from 'react';
import axios from 'axios';
import App from './App';
import AddLink from './AddLink';


class LinksList extends React.Component {
  constructor(props) {

    super(props);

    this.state = {
    };
  }



  render() {
    if (this.props.links === undefined) {
      return '';

    } else {
      const links = this.props.links
      console.log('CURRENT ITEM LINKS', this.props.links)

      return (
        <div>
            <div className="journalSubTitle links">Links:
              <div>
                <ul className="no-bullets">
                  {links.map(link => (
                  <li key={link.id}><a href={link.url_link} target="_blank">{link.url_short}</a></li>
                  ))}
                </ul>
              </div>
            </div>
        </div>
      );
    }
  }
}

export default LinksList;
