import { Component } from 'react';
import { connect } from 'react-redux';
import { loadPosts } from './actionCreators';

class Posts extends Component {
  componentDidMount() {
    this.props.dispatch(loadPosts(this.props.userId));
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.userId !== this.props.userId) {
      this.props.dispatch(loadPosts(nextProps.userId));
    }
  } 
  
  render() {
    if (this.props.isLoading) {
      return <p>Loading...</p>
    }

    let posts = this.props.posts.map((post) => {
      <Post post={post} key={post.id} />
    });

    return <div>{posts}</div>
  }
}

export default connect(
  (state) => ({ posts: state.posts })
})(Posts);