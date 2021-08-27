import React, { Component } from 'react';

import { Route, Switch } from 'react-router-dom';

import './public/scss/index.css';
import { rootUrl } from './constants/constants';
import { UserProvider } from './contexts/UserContext';
import Login from './components/Login';
import HomePage from './components/HomePage';
import Signup from './components/Signup';
import ErrorPage from './components/ErrorPage';
import Header from './components/HomePage_Components/Header';

class App extends Component {
  state = {
    token: '',
    isLogged: false,
    user: null,
  };

  componentDidMount() {
    var token = localStorage.getItem('authToken') || '';

    if (token) {
      fetch(rootUrl + 'users/me/', { headers: { Authorization: token } })
        .then((res) => {
          return res.json();
        })
        .then(({ user }) => {
          this.setState({ token: token, isLogged: true, user });
        });
    } else {
      this.setState({ token: '', isLogged: false });
    }
  }

  updateIsLoggedIn = (value, user, history, token) => {
    if (value) {
      this.setState({ token: token, isLogged: value, user });
    } else {
      localStorage.setItem('authToken', '');
      this.setState({ isLogged: Boolean(value), user: null, token: '' });
      history.push('/login');
    }
  };

  render() {
    let user = { token: this.state.token, user: this.state.user };

    return (
      <UserProvider value={user}>
        <>
          <Header
            isLogged={this.state.isLogged}
            user={user.user}
            updateIsLoggedIn={this.updateIsLoggedIn}
          ></Header>
          <main>
            {this.state.isLogged ? (
              <AuthorizedApp />
            ) : (
              <UnAuthorizedApp updateIsLoggedIn={this.updateIsLoggedIn} />
            )}
          </main>
        </>
      </UserProvider>
    );
  }
}

function UnAuthorizedApp(props) {
  return (
    <Switch>
      <Route exact path='/' component={HomePage} />
      <Route path='/login'>
        <Login updateIsLoggedIn={props.updateIsLoggedIn} />
      </Route>

      <Route path='/signup'>
        <Signup />
      </Route>

      <Route path='*'>
        <ErrorPage></ErrorPage>
      </Route>
    </Switch>
  );
}
function AuthorizedApp(props) {
  return (
    <Switch>
      <Route exact path='/'>
        <HomePage />
      </Route>

      <Route exact path='*'>
        <ErrorPage></ErrorPage>
      </Route>
    </Switch>
  );
}
export default App;
