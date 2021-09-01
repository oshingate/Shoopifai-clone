import React, { Component } from 'react';

import { Route, Switch, withRouter } from 'react-router-dom';

import './public/scss/index.css';
import { rootUrl } from './constants/constants';
import { UserProvider } from './contexts/UserContext';
import Login from './components/landingPage Components/Login';
import LandingPage from './components/landingPage Components/LandingPage';
import Signup from './components/landingPage Components/Signup';
import AdminLandingPage from './components/admin_home_page_components/AdminLandingPage';
import ErrorPage from './components/ErrorPage';
import Header from './components/landingPage Components/Header';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      token: '',
      isLogged: false,
      user: null,
    };
  }

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
          {this.props.location.pathname !== ('/login' || '/signup') ? (
            <Header
              isLogged={this.state.isLogged}
              user={user.user}
              updateIsLoggedIn={this.updateIsLoggedIn}
            />
          ) : null}
          {/* <Header></Header> */}
          <main className='columns main '>
            {this.state.isLogged ? (
              <>
                <AuthorizedApp />
              </>
            ) : (
              <UnAuthorizedApp updateIsLoggedIn={this.updateIsLoggedIn} />
            )}
          </main>
        </>
      </UserProvider>
    );
  }
}

//component to handle logged routes

function AuthorizedApp(props) {
  return (
    <Switch>
      <Route path='/admin'>
        <AdminLandingPage />
      </Route>

      <Route exact path='*'>
        <ErrorPage fallbackURL='/' />
      </Route>
    </Switch>
  );
}

//component to handle non logged routes

function UnAuthorizedApp(props) {
  return (
    <Switch>
      <Route exact path='/' component={LandingPage} />
      <Route path='/login'>
        <Login updateIsLoggedIn={props.updateIsLoggedIn} />
      </Route>

      <Route path='/signup'>
        <Signup />
      </Route>

      <Route path='*'>
        <ErrorPage fallbackURL='/' />
      </Route>
    </Switch>
  );
}

export default withRouter(App);
