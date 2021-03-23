import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import HomePage from './pages/index';
//import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
//import CheckoutPage from './pages/checkout/checkout.component';
//import Header from './components/header/header.component';

//import { selectCurrentUser } from './redux/user/user.selectors';
//import { checkUserSession } from './redux/user/user.actions';

import { user } from '../src/redux/modules';

import './App.css';

class App extends React.Component {
  unsubscribeFromAuth = null;

  componentDidMount() {
    const { checkUserSession } = this.props;
    checkUserSession(1);
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route
            exact
            path="/signin"
            render={() => (this.props.currentUser ? <Redirect to="/" /> : null)}
          />
        </Switch>
      </>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: user.selectors.selectCurrentUser,
});

const mapDispatchToProps = (dispatch) => ({
  checkUserSession: (id) => dispatch(user.actions.setCurrentUser({ id })),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
