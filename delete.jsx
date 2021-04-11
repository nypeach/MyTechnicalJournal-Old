/* eslint-disable react/destructuring-assignment */
import React from 'react';
import SocialPost from '../social/SocialPost';
import axios from 'axios';
import Checkbox from './Checkbox';

class ManagePosts extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      allPosts: [],
      selectedCheckboxes: new Set(),
      hide: false
    };
    this.getAllPosts = this.getAllPosts.bind(this);
    this.toggleCheckbox = this.toggleCheckbox.bind(this);
    this.onHideClick = this.onHideClick.bind(this);
  }

  // componentWillMount() {
  //   this.selectedCheckboxes = new Set();
  // }
  componentDidMount() {
    this.getAllPosts();
  }

  getAllPosts() {
    axios.get('api/post/reported')
      .then((res) => {
        this.setState({ allPosts: res.data });
      })
      .catch((err) => console.log('ERROR GETTING POSTS: ', err));
  }

  toggleCheckbox(label) {
    if (this.selectedCheckboxes.has(label)) {
      this.selectedCheckboxes.delete(label);
    } else {
      this.selectedCheckboxes.add(label);
    }
  }
  handleFormSubmit() {
    preventDefault();
    // We may not use the following code.  Instead it will be a 'put' request
    for (const checkbox of this.selectedCheckboxes) {
      console.log(checkbox, 'is selected.');
    }
  }

  createCheckbox(label) {
    return
    <Checkbox
      label={label}
      handleCheckboxChange={this.toggleCheckbox}
      key={label}
    />
  }

  render() {
    const allPosts = this.state.allPosts;
    console.log('ALL POSTS', allPosts);

    return (
      <div>
        <div className="manage-heading">MANAGE POSTS</div>

        <div className="listItems"><ul className="no-bullets">
          {allPosts.map((post) => (


            <li key={post.id}>
              <div class="mytextdiv">
                <div class="mytexttitle manage-mytext">
                  {post.name_user + " " + post.last_name}&nbsp;</div>
                <div class="divider"></div>
              </div>
              {this.createCheckbox(post.id)}

              <br></br>
              Post Name: {post.name}
              <br></br>
              Created: {post.created_at}
              <br></br>
              Location: {post.location_post}
              <br></br>
              Post: {post.message_post}
              <br></br>
              {post.image_url}
              {post.run}
            </li>
          ))}</ul>
        </div>



        {/* {allPosts.map((post) => (
          <div>{post.name_user + " " + post.last_name}
            <label>
              Hide?:
          <input
                name="isGoing"
                type="checkbox"
                checked={this.state.hide}
                onChange={this.onHideClick} />
            </label>
            <SocialPost key={post.date + post.post} propic={post.propic} name={post.name} date={post.created_at} location={post.location_post} image={post.image_url} run={post.run} post={post.message_post} /></div>
        ))} */}
      </div>
    );
  }
}

export default ManagePosts;
