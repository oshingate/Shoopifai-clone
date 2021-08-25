import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';

import { getCurrentUser, noToken } from '../actions';
import '../scss/index.css';
import HomePage from '../components/HomePage';
import Login from '../components/Login';
import Signup from '../components/Signup';

class App extends Component {
  state = {
    token: '',
    currentPage: 'login',
  };

  componentDidMount() {
    var token = localStorage.getItem('authToken') || '';
    if (token) {
      this.setState({ token: token });
      this.props.dispatch(getCurrentUser());
    } else {
      this.props.dispatch(noToken());
    }
  }

  render() {
    return (
      <div>
        {!this.state.token ? (
          this.state.currentPage === 'login' ? (
            <Login />
          ) : (
            <Signup />
          )
        ) : (
          <Route exact path='/' component={HomePage} />
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    currentUser: state.currentUser.user,
  };
};

export default connect(mapStateToProps)(App);
