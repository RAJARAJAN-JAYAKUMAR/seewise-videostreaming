import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import VideoDetail from './components/video/VideoDetail';
import VideoList from './components/video/VideoList';

const App = () => {
  return (
    <Router>
      <div>
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/videos/:id" component={VideoDetail} />
        <Route exact path="/" component={VideoList} />
      </div>
    </Router>
  );
};

export default App;
