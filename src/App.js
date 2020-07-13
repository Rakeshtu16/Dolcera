import React, { Component } from 'react';
import './css/App.css';
import {BrowserRouter as Router, Route,} from 'react-router-dom';
import Posts from './components/Post'
import AllUsers from './components/AllUsers';

class App extends Component {

  render() {

    const PostsWithID = ({match}) => {
      return(
        <Posts userId={match.params.id} />
      )
    }

    return(
      <Router>
          <Route exact path="/" component={AllUsers} />
          <Route exact path="/posts" component={Posts} />
          <Route path="/posts/:id" component={PostsWithID} />
      </Router>
    )
  }
}

export default App;
