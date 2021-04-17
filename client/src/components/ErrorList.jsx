import React from 'react';
import axios from 'axios';
import ErrorView from './ErrorView';


class ErrorList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {

    return (
      <div>
        <div><ul className="no-bullets">
          {this.props.errors.map(error => (
            <li className="listItems" key={error.id} onClick={() => { this.props.onClickError(error)}}>
              {error.error_source} | {error.error_code}
            </li>
          ))}</ul>
        </div>
      </div>
    );
  }
};
export default ErrorList;